const fs = require('fs');
const path = require('path');
const sequelize = require('../config/connection');
const { DataTypes } = require('sequelize');

const db = {};

fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const modelFactory = require(path.join(__dirname, file));

    const model = modelFactory(sequelize, DataTypes);

    db[model.name] = model;
  });


  Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = require('sequelize');

module.exports = db;