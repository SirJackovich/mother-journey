const express = require('express');
const errors = require('restify-errors');
const categoryRoutes = express.Router();
const Category = require('../models/Category');

// get all categories
categoryRoutes.route('/').get((req, res, next) => {
  Category.apiQuery(req.params, function(err, docs) {
    if (err) {
      console.error(err);
      return next(
        new errors.InvalidContentError(err.errors.name.message)
      );
    }

    res.send(docs);
    next();
  });
});

// create new category
categoryRoutes.route('/').post((req, res, next) => {
  if (!req.is('application/json')) {
    return next(
      new errors.InvalidContentError("Expects 'application/json'")
    );
  }

  let data = req.body || {};

  let category = new Category(data);
  category.save(function(err) {
    if (err) {
      console.error(err);
      return next(new errors.InternalError(err.message));
      next();
    }

    res.send(201);
    next();
  });
});

// get a category by id
categoryRoutes.route('/:id').get((req, res, next) => {
  Category.findOne({ _id: req.params.id }, function(err, doc) {
    if (err) {
      console.error(err);
      return next(
        new errors.InvalidContentError(err.errors.name.message)
      );
    }

    res.send(doc);
    next();
  });
});

// update category by id
categoryRoutes.route('/:id').put((req, res, next) => {
  if (!req.is('application/json')) {
    return next(
      new errors.InvalidContentError("Expects 'application/json'")
    );
  }

  let data = req.body || {};

  if (!data._id) {
    data = Object.assign({}, data, { _id: req.params.id });
  }

  Category.findOne({ _id: req.params.id }, function(err, doc) {
    if (err) {
      console.error(err);
      return next(
        new errors.InvalidContentError(err.errors.name.message)
      );
    } else if (!doc) {
      return next(
        new errors.ResourceNotFoundError(
          'The resource you requested could not be found.'
        )
      );
    }

    Category.update({ _id: data._id }, data, function(err) {
      if (err) {
        console.error(err);
        return next(
          new errors.InvalidContentError(err.errors.name.message)
        );
      }

      res.send(200, data);
      next();
    });
  });
});

// // delete category by id
// categoryRoutes.route('/:id').del((req, res, next) => {
//   Category.remove({ _id: req.params.id }, function(err) {
//     if (err) {
//       console.error(err);
//       return next(
//         new errors.InvalidContentError(err.errors.name.message)
//       );
//     }
//
//     res.send(204);
//     next();
//   });
// });

module.exports = categoryRoutes;
