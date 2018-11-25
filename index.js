const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const path = require('path');
const userService = require('./server/user/user.service');

mongoose.connect(config.db.uri, { useNewUrlParser: true });

app.use(requireHTTPS);
app.use(errorHandler);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


app.use(express.static(path.join(__dirname, '/dist')));

app.use('/api/category', require('./server/category/category.controller'));

app.use('/api/content', require('./server/content/content.controller'));

app.use('/api/role', require('./server/role/role.controller'));

app.use('/api/user', require('./server/user/user.controller'));

app.post('/api/auth', authenticate);

app.get('/', function (req, res) {
  res.sendfile('./dist/index.html');
});

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

function authenticate(req, res, next) {
  userService.authenticate(req.body)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err));
}
