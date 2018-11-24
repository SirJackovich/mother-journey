const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const config = require('./config');

const path = require('path');

const categoryRoutes = require("./routes/category");

mongoose.connect(config.db.uri);

app.use(express.static(path.join(__dirname, '/dist')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.listen(config.port);

console.log('App listening on port ' + config.port);

app.use('/api/category', categoryRoutes);

// app.use(function (req, res, next) {
//     // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + port)
//
//     // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
//
//     // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
//
//     // Pass to next layer of middleware
//   next()
// });

app.get('/', function (req, res) {
  res.sendfile('./dist/index.html');
});
