const orderDescriptionColumns = require('../models/columns/orderDescriptionColumns');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable('orderdescriptions', orderDescriptionColumns)
  },

  async down (queryInterface) {
    return queryInterface.dropTable('orders');
  }
};