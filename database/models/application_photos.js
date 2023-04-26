'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApplicationsPhotos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ApplicationsPhotos.belongsTo(models.Applications, { as: 'application', foreignKey: 'application_id' })
    }
  }
  ApplicationsPhotos.init({
    application_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      foreignKey: true
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ApplicationsPhotos',
  });
  return ApplicationsPhotos;
};