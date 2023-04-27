const ApplicationsServices = require('../services/applications.services');
const applicationsServices = new ApplicationsServices();


const getApplication = async (request, response, next) => {
  try {
    let { id } = request.user;
    let application = await applicationsServices.getApplicationOr404(id);
    return response.status(200).json({ results: application })
  } catch (error) {
    next(error)
  }
}

const addApplication = async (request, response, next) => {
  try {
    let { body } = request;
    let { id } = request.user
    body.user_id = id
    let application = await applicationsServices.createApplication(body);
    return response.status(201).json({ results: application })
  } catch (error) {
    next(error)
  }
}

const updateApplication = async (request, response, next) => {
  try {
    let { id } = request.user
    let { body } = request
    let application = await applicationsServices.updateAplication(id, body)
    return response.json({ results: application })
  } catch (error) {
    next(error)
  }
}






module.exports = {
  getApplication,
  addApplication,
  updateApplication
}