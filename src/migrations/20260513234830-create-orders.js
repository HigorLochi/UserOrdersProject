const orderColumns = require('../models/columns/orderColumns');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable('orders', orderColumns)
  },

  async down (queryInterface) {
    return queryInterface.dropTable('orders');
  }
};
