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
      ApplicationsPayments.belongsTo(models.Applications, {as:'applications', foreignKey:'application_id'})
    }
  }
  ApplicationsPayments.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true
    },
    application_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    payment_intent: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'ApplicationsPayments',
    tableName: 'applications_payments',
    underscored: true,
    timestamps: true
  });
  return ApplicationsPayments;
};