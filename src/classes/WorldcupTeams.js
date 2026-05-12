const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('worldcup', 'root', undefined, {
    host: 'localhost',
    dialect: 'mysql'
});

const WorldcupTeams = sequelize.define('WorldcupTeams', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    allowNull: false
  },
  idWorldcup: {
    type: DataTypes.INTEGER
  },
  idTeam: {
    type: DataTypes.INTEGER
  }
}, {
    createdAt:false,
    updatedAt:false,
    tableName:"worldcupteams"
});

module.exports = WorldcupTeams