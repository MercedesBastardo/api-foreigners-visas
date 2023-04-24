'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('application_photos', {
        application_id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          foreignKey: true,
          references: {
            model: 'applications',
            key: 'user_id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT'
        },
        url: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        order: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        }
      }, { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },
  down: async (queryInterface, /*Sequelize*/) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.dropTable('application_photos', { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}