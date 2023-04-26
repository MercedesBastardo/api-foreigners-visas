'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('application_documents', {
      aplication_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'

      },
      url: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('application_documents');
  }
};