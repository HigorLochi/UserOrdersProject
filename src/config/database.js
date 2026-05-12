const { Sequelize } = require('sequelize');

require('dotenv').config()

const sequelize = new Sequelize(process.env.SQL_DB, process.env.SQL_USERNAME, undefined, {
  host: process.env.SQL_HOST,
  dialect: 'mysql'
});

module.exports = sequelize;