const express = require('express')
const router = express.Router()

const passport = require('../libs/passport')

const verifySchema = require('../schemas/joiSchema.checker');
const { getAplication } = require('../controllers/aplication.controller');



router.get(
  '/application',
  passport.authenticate('jwt', { session: false }),
  getAplication
);

module.exports = router