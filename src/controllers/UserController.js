const sequelize = require('../config/connection');
const { User } = require('../models');
const PasswordValidator = require('../validators/PasswordValidator');
const PasswordHash = require('../utils/PasswordHash');

module.exports = {
    async login(req, res) {
        try{
            const user = await User.findOne({ where: { login: req.body.login }});

            if(user && PasswordValidator.validatePasswordWithHash(req.body.password, user.password)){
                req.session.user = {
                    id: user.id,
                    name: user.name,
                    login: user.login
                };
            }

            res.status(200).send(req.session.hasOwnProperty('user'));
        }catch(e){
            res.status(500).send(e.message);
        }
    },

    async getAll(req, res){
        try{
            const response = await User.findAll();
            res.status(200).json(response);
        }catch(e){
            res.status(500).send({message: e.message});
        }
    },

    async post(req, res) {
        const transaction = await sequelize.transaction();

        try{
            const users = req.body.map(user => ({
                ...user,
                password: (!PasswordValidator.isHashed(user.password)) ? PasswordHash.generate(user.password) : user.password
            }));

            await User.bulkCreate(users, {
                transaction: transaction
            });

            transaction.commit();

            res.status(201).send({message: "User(s) created."});
        }catch(e){
            transaction.rollback();

            res.status(500).send({message: e.message});
        }
    },

    async put(req, res){
        const transaction = await sequelize.transaction();

        try{            
            await User.update({
                ...req.body,
                password: (!PasswordValidator.isHashed(req.body.password)) ? PasswordHash.generate(req.body.password) : req.body.password
            }, {
                where: {
                  id: req.params.id
                }
            }, {
                transaction: transaction
            });

            transaction.commit();

            res.status(201).send({message: "User updated."});
        }catch(e){
            transaction.rollback();

            res.status(500).send({message: e.message});
        }
    },

    async delete (req, res){
        const transaction = await sequelize.transaction();

        try{
            await User.destroy({
                where: {
                  id: req.params.id
                }
            }, {
                transaction: transaction
            });

            transaction.commit();

            res.status(200).send({message: "User deleted."});
        }catch(e){
            transaction.rollback();
            
            res.status(500).send({message: e.message});
        }
    }
}