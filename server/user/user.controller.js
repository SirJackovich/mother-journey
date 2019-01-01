const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/', create);
router.get('/:id', getById);

module.exports = router;

function create(req, res, next) {
  userService.create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getById(req, res, next) {
  userService.getById(req.params.id)
    .then(user => user ? res.json(user) : res.sendStatus(404))
    .catch(err => next(err));
}
