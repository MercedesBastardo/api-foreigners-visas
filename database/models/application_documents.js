'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApplicationDocuments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ApplicationDocuments.belongsTo(models.Applications, {as:'applications', foreignKey:'application_id'})
    }
  }
  ApplicationDocuments.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ApplicationDocuments',
    tableName: 'application_documents',
    underscored: true,
    timestamps: true
  });
  return ApplicationDocuments;
};