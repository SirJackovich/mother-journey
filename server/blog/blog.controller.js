const express = require('express');
const router = express.Router();
const blogService = require('./blog.service');

// routes
router.get('/', getAll);
router.post('/', create);
router.get('/newest', getNewest);
router.get('/archive', getArchive);
router.get('/:path', getByPath);
router.put('/:path', update);
router.delete('/:path', remove);

module.exports = router;

function create(req, res, next) {
  blogService.create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  if(req.query.category) {
    blogService.getByCategory(req.query.category)
      .then(blogs => res.json(blogs))
      .catch(err => next(err));
  }else if(req.query.query){
    blogService.find(req.query.query)
      .then(blogs => res.json(blogs))
      .catch(err => next(err));
  }else{
    blogService.getAll()
      .then(blogs => res.json(blogs))
      .catch(err => next(err));
  }
}

function getByPath(req, res, next) {
  blogService.getByPath(req.params.path)
    .then(blog => blog ? res.json(blog) : res.sendStatus(404))
    .catch(err => next(err));
}

function update(req, res, next) {
  blogService.update(req.params.path, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function remove(req, res, next) {
  blogService.remove(req.params.path)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getNewest(req, res, next) {
  blogService.getNewest()
    .then(blog => blog ? res.json(blog) : res.json())
    .catch(err => next(err));
}

function getArchive(req, res, next) {
  blogService.getArchive()
    .then(blogs => res.json(blogs))
    .catch(err => next(err));
}
