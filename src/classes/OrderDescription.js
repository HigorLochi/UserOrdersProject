module.exports = (sequelize, DataTypes) => {
    const OrderDescription = sequelize.define('OrderDescription', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false
        },
        orderid: {
            type: DataTypes.INTEGER,
            references: {
            model: 'orders',
            key: 'id'
            }
        },
        product: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
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