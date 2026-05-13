const { DataTypes } = require('sequelize');

const orderColumns = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
    },
    userid: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    }
};

module.exports = orderColumns;