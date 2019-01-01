const express = require('express');
const router = express.Router();
const GridFsStorage = require('multer-gridfs-storage');
const multer = require('multer');
const Grid = require('gridfs-stream');
const crypto = require('crypto');
const mongoose = require('mongoose');
const config = require('../../config');
const path = require('path');

// Create mongo connection
const conn = mongoose.createConnection(config.db.uri);

// Init gfs
let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('images');
});

// Create storage engine
const storage = new GridFsStorage({
  url: config.db.uri,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'images'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

router.post('/', upload.single('file'), create);

router.get('/:filename', getImage);

router.get('/info/:filename', info);

module.exports = router;

function create(req, res){
  res.send(req.file.filename);
}

function getImage(req, res){
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }

    // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an image'
      });
    }
  });
}

function info(req, res){
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }
    // File exists
    return res.json(file);
  });
}


