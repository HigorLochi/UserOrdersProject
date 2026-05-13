module.exports = (sequelize, columns) => {
    const OrderDescription = sequelize.define('OrderDescription', columns, {
        createdAt:false,
        updatedAt:false,
        tableName:"ordersdescription"
    });

    OrderDescription.associate = (models) => {
        OrderDescription.belongsTo(models.Order, {
            foreignKey: 'orderId',
            as: 'order'
        });
    }

    return OrderDescription;
}