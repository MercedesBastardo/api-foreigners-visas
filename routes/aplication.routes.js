const express = require('express')
const router = express.Router()

const passport = require('../libs/passport')

const verifySchema = require('../schemas/joiSchema.checker');
const { getAplication, createAplication } = require('../controllers/aplication.controller');



router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  createAplication
);


router.get(
  '/application',
  passport.authenticate('jwt', { session: false }),
  getAplication
);

router.put(
  '/application',
  passport.authenticate('jwt', { session: false }),
  getAplication
);

module.exports = router