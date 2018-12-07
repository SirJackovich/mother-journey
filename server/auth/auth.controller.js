const express = require('express');
const router = express.Router();
const authService = require('./auth.service');

// routes
router.post('/', auth);

module.exports = router;

function auth(req, res, next) {
  authService.auth(req.body)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err));
}
