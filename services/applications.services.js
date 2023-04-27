const models = require('../database/models')
const { CustomError } = require('../utils/helpers')

class ApplicationsServices {

  constructor() { }

  async getApplicationOr404(id) {
    let application = await models.Applications.findByPk(id, {
      include: [
        {
          model: models.ApplicationsPhotos,
          as: 'photos'
        },
        {
          model: models.ApplicationsDocuments,
          as: 'documents'
        },
        {
          model: models.ApplicationsPayments,
          as: 'payments'
        },
      ]
    })
    if (!application) throw new CustomError('Not found application', 404, 'Not Found')

    return application
  }










  async createApplication(obj) {

    const transaction = await models.sequelize.transaction()

    try {
      let newApplication = await models.Applications.create({
        user_id: obj.user_id,
        legal_first_names: obj.legal_first_names,
        legal_last_names: obj.legal_last_names,
        nationality: obj.nationality,
        email: obj.email,
        phone: obj.phone,
        date_of_birth: obj.date_of_birth,
        gender: obj.gender,
        passport_number: obj.passport_number,
        passport_expiration_date: obj.passport_expiration_date,
        residence: obj.residence,
        residence_address: obj.residence_address,
        job: obj.job,
        comments: obj.comments,
        status: 'draft'
      }, { transaction })
      await transaction.commit()
      return newApplication
    } catch (error) {
      await transaction.rollback()
      throw error
    }

  }












  async updateAplication(id, body) {

    const transaction = await models.sequelize.transaction()

    try {
      let application = await models.Applications.findByPk(id)

      if (!application) throw new CustomError('Not found Application', 404, 'Not Found')

      let updateAplication = await application.update(body, {
        transaction,
        fields: [' legal_first_names', 'legal_last_names', 'nationality', 'email', 'phone', 'date_of_birth', 'gender', 'passport_number', 'passport_expiration_date', 'residence', 'residence_address', 'job', 'comments', 'status'
        ]
      })

      await transaction.commit()

      return updateAplication
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }











  async getApplicationOr404raw(id) {
    let application = await models.Applications.findByPk(id)
    if (!application) throw new CustomError('Not found application', 404, 'Not Found')
    return application
  }





}

module.exports = ApplicationsServices;
