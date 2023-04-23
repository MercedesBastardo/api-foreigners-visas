'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApplicationPhotos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ApplicationPhotos.belongsTo(models.Applications, {as:'application', foreignKey:'application_id'})
    }
  }
  ApplicationPhotos.init({
    application_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    url: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    order: {
      allowNull: null,
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'ApplicationPhotos',
    tableName: 'application_photos',
    underscored: true,
    timestamps: true
  });
  return ApplicationPhotos;
};