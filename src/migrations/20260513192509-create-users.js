const userColumns = require('../models/columns/userColumns');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable('users', userColumns)
  },

  async down (queryInterface) {
    return queryInterface.dropTable('users');
  }
};
