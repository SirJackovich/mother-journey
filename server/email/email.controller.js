const express = require('express');
const router = express.Router();
const emailService = require('../email/email.service');

// routes
router.post('/', email);

module.exports = router;

function email(req, res, next) {
  emailService.email(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}
