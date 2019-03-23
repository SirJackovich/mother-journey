const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const path = require('path');
const expressJwt = require('express-jwt');
const GridFsStorage = require('multer-gridfs-storage');
const multer = require('multer');
const Grid = require('gridfs-stream');
const crypto = require('crypto');

mongoose.connect(config.db.uri, { useNewUrlParser: true, useCreateIndex: true });
const conn = mongoose.connection;

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

app.use(requireHTTPS);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '/dist')));

app.use('/api/auth', require('./server/auth/auth.controller'));

app.use('/api/blog', jwt(), require('./server/blog/blog.controller'));

app.use('/api/category', jwt(), require('./server/category/category.controller'));

app.use('/api/email', require('./server/email/email.controller'));

app.post('/api/image/', upload.single('file'), function (req, res) {
  res.send(req.file.filename);
});

app.get('/api/image/:filename', getImage);

app.get('/api/image/info/:filename', info);

app.use('/api/user', jwt(), require('./server/user/user.controller'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

app.use(errorHandler);

app.listen(config.port);

console.log('App listening on port ' + config.port);

// Redirect http to https
function requireHTTPS(req, res, next) {
  // Insecure request
  if (app.get('env') !== 'development' && req.get('x-forwarded-proto') === 'http') {
    // Redirect to https://
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

function errorHandler(err, req, res, next) {
  if (typeof (err) === 'string') {
    // custom application error
    return res.status(400).json({ message: err });
  }

  if (err.name === 'ValidationError') {
    // mongoose validation error
    return res.status(400).json({ message: err.message });
  }

  if (err.name === 'UnauthorizedError') {
    // jwt authentication error
    return res.status(401).json({ message: 'Invalid Token' });
  }

  // default to 500 server error
  return res.status(500).json({ message: err.message });
}
function filterRoutes(req){
  return req.method === "GET";
}

function jwt() {
  const secret = config.secret;
  return expressJwt({secret}).unless(filterRoutes);
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

module.exports = app;
