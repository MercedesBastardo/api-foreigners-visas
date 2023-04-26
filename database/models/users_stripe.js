'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersStripe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UsersStripe.belongsTo(models.Users, { as: 'user', foreignKey: 'user_id' })
    }
  }
  UsersStripe.init({
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      foreignKey: true,
      primaryKey: true

    },
    client_id: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'UsersStripe',
  });
  return UsersStripe;
};