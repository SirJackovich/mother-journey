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

// routes
router.post('/', upload.single('file'), (req, res) => {
  res.send(req.file.filename);
});

module.exports = router;


