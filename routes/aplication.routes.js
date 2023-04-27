const express = require('express')
const router = express.Router()
const applicationIsNotConfirmed = require('../middlewares/bussines_checker.middlewares')

const passport = require('../libs/passport')

const { getApplication, addApplication, updateApplication } = require('../controllers/aplication.controller');



router.route('/')
  .post(passport.authenticate('jwt', { session: false }), addApplication)


router.route('/application')
  .get(passport.authenticate('jwt', { session: false }), getApplication)
  .put(passport.authenticate('jwt', { session: false }), applicationIsNotConfirmed, updateApplication)



module.exports = router