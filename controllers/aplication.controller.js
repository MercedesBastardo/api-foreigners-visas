
const AuthService = require('../services/auth.service')
const UsersService = require('../services/users.service')
const { CustomError } = require('../utils/helpers')
const jwt = require('jsonwebtoken')
const sender = require('../libs/nodemailer')
require('dotenv').config()

const models = require('../database/models')

const authService = new AuthService()
const usersService = new UsersService()


const getAplication = async (request, response, next) => {

  try {
    const { id } = request.user;
    const result = await models.Applications.findOne({ where: { id } });
    if (!result) return response.sendStatus(404);
    return response.status(200).json(result);
  }
  catch (error) {
    next(error)
  }

}




module.exports = {

  getAplication

}