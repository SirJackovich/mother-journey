const express = require('express');
const router = express.Router();
const contentService = require('./content.service');

// routes
router.get('/', getAll);
router.post('/', create);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
  contentService.create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  contentService.getAll()
    .then(contents => res.json(contents))
    .catch(err => next(err));
}

function getById(req, res, next) {
  contentService.getById(req.params.id)
    .then(content => content ? res.json(content) : res.sendStatus(404))
    .catch(err => next(err));
}

function update(req, res, next) {
  contentService.update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  contentService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}
