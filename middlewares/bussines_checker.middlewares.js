const ApplicationsServices = require('../services/applications.services')
const applicationsServices = new ApplicationsServices();
const { CustomError } = require('../utils/helpers')

const applicationIsNotConfirmed = async (request, response, next) => {
  try {
    let { id } = request.user
    let aplication = await applicationsServices.getApplicationOr404raw(id)
    if (aplication.status != 'confirmed') return next()

    throw new CustomError('Application have the status as confirmed', 403, 'Permission Denied')

  } catch (error) {
    return next(error)
  }
}

module.exports = applicationIsNotConfirmed