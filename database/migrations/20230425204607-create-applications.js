'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('applications', {
      user_id: {
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
      legal_first_names: {
        type: Sequelize.STRING
      },
      legal_last_names: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      date_of_birth: {
        type: Sequelize.DATEONLY
      },
      gender: {
        type: Sequelize.STRING
      },
      passport_number: {
        type: Sequelize.STRING
      },
      passport_expiration_date: {
        type: Sequelize.DATEONLY
      },
      residence: {
        type: Sequelize.STRING
      },
      residence_address: {
        type: Sequelize.STRING
      },
      job: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('applications');
  }
};