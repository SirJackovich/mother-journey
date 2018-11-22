/**
 * Module Dependencies
 */
const errors = require('restify-errors');

/**
 * Model Schema
 */
const Category = require('../models/Category');

module.exports = function(server) {

  /**
   * POST
   */
  server.post('/api/category', (req, res, next) => {
    if (!req.is('application/json')) {
      return next(
        new errors.InvalidContentError("Expects 'application/json'"),
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

  /**
   * LIST
   */
  server.get('/api/category', (req, res, next) => {
    Category.apiQuery(req.params, function(err, docs) {
      if (err) {
        console.error(err);
        return next(
          new errors.InvalidContentError(err.errors.name.message),
        );
      }

      res.send(docs);
      next();
    });
  });

  /**
   * GET
   */
  server.get('/api/category/:id', (req, res, next) => {
    Category.findOne({ _id: req.params.id }, function(err, doc) {
      if (err) {
        console.error(err);
        return next(
          new errors.InvalidContentError(err.errors.name.message),
        );
      }

      res.send(doc);
      next();
    });
  });

  /**
   * UPDATE
   */
  server.put('/api/category/:id', (req, res, next) => {
    if (!req.is('application/json')) {
      return next(
        new errors.InvalidContentError("Expects 'application/json'"),
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
          new errors.InvalidContentError(err.errors.name.message),
        );
      } else if (!doc) {
        return next(
          new errors.ResourceNotFoundError(
            'The resource you requested could not be found.',
          ),
        );
      }

      Category.update({ _id: data._id }, data, function(err) {
        if (err) {
          console.error(err);
          return next(
            new errors.InvalidContentError(err.errors.name.message),
          );
        }

        res.send(200, data);
        next();
      });
    });
  });

  /**
   * DELETE
   */
  server.del('/api/category/:id', (req, res, next) => {
    Category.remove({ _id: req.params.id }, function(err) {
      if (err) {
        console.error(err);
        return next(
          new errors.InvalidContentError(err.errors.name.message),
        );
      }

      res.send(204);
      next();
    });
  });
};
