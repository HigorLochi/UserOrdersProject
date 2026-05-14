const fs = require('fs');
const path = require('path');
const sequelize = require('../config/connection');
const db = {};

fs.readdirSync(__dirname).filter(file => {return (file !== 'index.js' && file !== 'columns')}).forEach(file => {
  const modelFactory = require(path.join(__dirname, file));
  const columns = require(path.join(__dirname, 'columns' , (file.split("."))[0].toLowerCase() + 'Columns.js'))
  const model = modelFactory(sequelize, columns);

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