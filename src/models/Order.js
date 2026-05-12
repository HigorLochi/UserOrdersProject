module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
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
  }, {
    createdAt:false,
    updatedAt:false,
    tableName:"orders",
  });

  Order.associate = (models) => {
    Order.belongsTo(models.User, {
      foreignKey: 'userid',
      as: 'user'
    });

    Order.hasMany(models.OrderDescription, {
      foreignKey: 'orderId',
      as: 'descriptions'
    });
  };

  return Order;
}