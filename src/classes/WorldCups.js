const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('worldcup', 'root', undefined, {
    host: 'localhost',
    dialect: 'mysql'
});

const WorldCups = sequelize.define('WorldCups', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER
  },
  currentPhase: {
    type: DataTypes.STRING
  }
}, {
    createdAt:false,
    updatedAt:false,
    tableName:"worldcups"
});

module.exports = WorldCups