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
      ApplicationDocuments.belongsTo(models.Applications, {as:'application', foreignKey:'application_id'})
    }
  }
  ApplicationDocuments.init({
    application_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    url: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    order: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }

  }, {
    sequelize,
    modelName: 'ApplicationDocuments',
    tableName: 'application_documents',
    underscored: true,
    timestamps: true,
  });
  return ApplicationDocuments;
};