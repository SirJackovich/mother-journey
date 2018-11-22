/**
 * Module Dependencies
 */
const errors = require('restify-errors');

/**
 * Model Schema
 */
const Role = require('../models/Role');

module.exports = function(server) {

  /**
   * POST
   */
  server.post('/api/role', (req, res, next) => {
    if (!req.is('application/json')) {
      return next(
        new errors.InvalidContentError("Expects 'application/json'"),
      );
    }

    let data = req.body || {};

    let role = new Role(data);
    role.save(function(err) {
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
  server.get('/api/role', (req, res, next) => {
    Role.apiQuery(req.params, function(err, docs) {
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
  server.get('/api/role/:id', (req, res, next) => {
    Role.findOne({ _id: req.params.id }, function(err, doc) {
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
  server.put('/api/role/:id', (req, res, next) => {
    if (!req.is('application/json')) {
      return next(
        new errors.InvalidContentError("Expects 'application/json'"),
      );
    }

    let data = req.body || {};

    if (!data._id) {
      data = Object.assign({}, data, { _id: req.params.id });
    }

    Role.findOne({ _id: req.params.id }, function(err, doc) {
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

      Role.update({ _id: data._id }, data, function(err) {
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
  server.del('/api/role/:id', (req, res, next) => {
    Role.remove({ _id: req.params.id }, function(err) {
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
