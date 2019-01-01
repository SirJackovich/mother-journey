const express = require('express');
const router = express.Router();
const categoryService = require('./category.service');

// routes
router.get('/', getAll);
router.post('/', create);

module.exports = router;

function create(req, res, next) {
  categoryService.create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  categoryService.getAll()
    .then(categorys => res.json(categorys))
    .catch(err => next(err));
}
