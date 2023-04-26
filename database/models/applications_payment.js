'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApplicationsPayments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ApplicationsPayments.belongsTo(models.Applications, { as: 'application', foreignKey: 'application_id' })
    }
  }
  ApplicationsPayments.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    application_id: {
      type: DataTypes.UUID,
      allowNull: false,
      foreignKey: true
    },
    payment_intent: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ApplicationsPayments',
  });
  return ApplicationsPayments;
};