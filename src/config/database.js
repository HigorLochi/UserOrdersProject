const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('userordersproject', 'root', undefined, {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;