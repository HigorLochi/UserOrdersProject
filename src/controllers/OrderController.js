const { User, Order, OrderDescription } = require('../models');
const sequelize = require('../config/connection');

module.exports = {
    async getAll(req, res){
        try{
            const orders = await Order.findAll({include: [
                {
                    model: User,
                    as: 'user'
                },
                {
                    model: OrderDescription,
                    as: 'descriptions'
                }
            ]});

            res.status(200).json(orders);
        }catch(e){
            res.status(500).send({message: e.message});
        }
    },

    async getByUserId(req, res){
        try{
            const orders = await Order.findAll({ where: { userid: req.params.userid }, include: [
                {
                    model: User,
                    as: 'user'
                },
                {
                    model: OrderDescription,
                    as: 'descriptions'
                }
            ]});

            res.status(200).send(orders);
        }catch(e){
            res.status(500).send({message: e.message});
        }
    },

    async post(req, res) {
        const transaction = await sequelize.transaction();

        try{
            const order = await Order.create(
                {
                    userid: req.body.userid
                },
                { transaction: transaction }
            );

            const descriptions = req.body.descriptions.map(desc => ({
                ...desc,
                orderId: order.id
            }));

            await OrderDescription.bulkCreate(descriptions, {
                transaction: transaction
            });

            transaction.commit();

            res.status(201).send({message: "Order(s) created."});
        }catch(e){
            transaction.rollback();

            res.status(500).send({message: e.message});
        }
    }
}