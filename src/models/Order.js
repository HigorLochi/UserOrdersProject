module.exports = (sequelize, columns) => {
  const Order = sequelize.define('Order', columns, {
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