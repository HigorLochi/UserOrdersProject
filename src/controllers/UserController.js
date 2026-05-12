const sequelize = require('../config/connection');
const { User } = require('../models');

var passwordHash = require('password-hash');

module.exports = {
    async login(req, res) {
        try{
            let auth = false;

            if(req.body.login && req.body.password){
                const user = await User.findOne({ where: { login: req.body.login }});

                if(user && passwordHash.verify(req.body.password, user.password)){
                    auth = true;

                    req.session.user = {
                        id: user.id,
                        name: user.name,
                        login: user.login
                    };
                }
            } 

            res.status(200).send(auth);
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
                password: (!passwordHash.isHashed(user.password)) ? passwordHash.generate(user.password) : user.password
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
            if(req.body.password && !passwordHash.isHashed(req.body.password))
                req.body.password = passwordHash.generate(req.body.password)
            
            await User.update(req.body, {
                where: {
                  id: req.params.id
                }
            }, {
                transaction: transaction
            });

            transaction.commit();

            res.status(201).send({message: "User(s) updated."});
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
            });

            transaction.commit();

            res.status(200).send({message: "User deleted."});
        }catch(e){
            transaction.rollback();
            
            res.status(500).send({message: e.message});
        }
    }
}