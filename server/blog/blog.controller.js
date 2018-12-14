const express = require('express');
const router = express.Router();
const blogService = require('./blog.service');

// routes
router.get('/', getAll);
router.post('/', create);
router.get('/:path', getByPath);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
  blogService.create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  blogService.getAll()
    .then(blogs => res.json(blogs))
    .catch(err => next(err));
}

function getByPath(req, res, next) {
  blogService.getByPath(req.params.path)
    .then(blog => blog ? res.json(blog) : res.sendStatus(404))
    .catch(err => next(err));
}

function update(req, res, next) {
  blogService.update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  blogService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}
