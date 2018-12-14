const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const path = require('path');
const expressJwt = require('express-jwt');
const userService = require('./server/user/user.service');

mongoose.connect(config.db.uri, { useNewUrlParser: true });

app.use(requireHTTPS);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '/dist')));

app.use('/api/auth', require('./server/auth/auth.controller'));

app.use('/api/category', jwt(), require('./server/category/category.controller'));

app.use('/api/content', jwt(), require('./server/content/content.controller'));

app.use('/api/image', jwt(), require('./server/image/image.controller'));

app.use('/api/email', require('./server/email/email.controller'));

app.use('/api/role', jwt(), require('./server/role/role.controller'));

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

function jwt() {
  const secret = config.secret;
  return expressJwt({ secret, isRevoked }).unless({
    path: [
      // public routes that don't require authentication
      { url: '/api/user/', methods: 'POST' },
      { url: '/api/content/', methods: 'GET' },
      { url: '/api/content/:id', methods: 'GET' },
      { url: '/api/category/', methods: 'GET' },
      { url: '/api/category/:id', methods: 'GET' }
    ]
  });
}

async function isRevoked(req, payload, done) {
  const user = await userService.getById(payload.sub);

  // revoke token if user no longer exists
  if (!user) {
    return done(null, true);
  }

  done();
}
