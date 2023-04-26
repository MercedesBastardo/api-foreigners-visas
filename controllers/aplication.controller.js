
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

    const result = await models.Applications.findAll({ where: { user_id: id } });

    if (!result) return response.sendStatus(404);
    return response.status(200).json(result);
  }
  catch (error) {
    next(error)
  }
}

const createAplication = async (request, response, next) => {
  try {
    const { id } = request.user;
    const { legal_first_names, legal_last_names, nationality, email, phone, date_of_birth, gender, passport_number, passport_expiration_date, residence, residence_address, job, comments, status } = request.body;

    const result = await models.Applications.create({ user_id: id, legal_first_names, legal_last_names, nationality, email, phone, date_of_birth, gender, passport_number, passport_expiration_date, residence, residence_address, job, comments, status });

    if (!result) return response.sendStatus(409)

    return response.status(201).json(result);
  }
  catch (error) {
    next(error)
  }
}

const updateAplication = async (request, response, next) => {
  try {
    const { id } = request.user;
    const application = await models.Applications.findAll({ where: { id } });
    if (!application) return response.sendStatus(404);
    if (application.status === 'confirmed') return response.sendStatus(403);

    const { legal_first_names, legal_last_names, nationality, email, phone, date_of_birth, gender, passport_number, passport_expiration_date, residence, residence_address, job, comments, status } = request.body;

    const result = await models.Applications.update({ legal_first_names, legal_last_names, nationality, email, phone, date_of_birth, gender, passport_number, passport_expiration_date, residence, residence_address, job, comments, status },
      { where: { id }, returning: true });


    return response.status(200).json(result[1][0]);
  }
  catch (error) {
    next(error)
  }
}


module.exports = {
  getAplication,
  createAplication,
  updateAplication

}