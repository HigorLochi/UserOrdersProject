const Users = require('../classes/Users');

var passwordHash = require('password-hash');

module.exports = {
    async login(req, res) {
        try{
            let auth = false;

            if(req.body.login && req.body.senha){
                const user = await Users.findOne({ where: { login: req.body.login } });

                if(user && passwordHash.verify(req.body.senha, user.senha)) 
                    auth = true;
            } 

            res.status(201).send(auth);
        }catch(e){
            res.status(500).send(false);
        }
    },

    async getAll(req, res){
        try{
            const response = await Users.findAll();
            res.status(200).json(response);
        }catch(e){
            res.status(500).send({message: e.message});
        }
    },

    async post(req, res) {
        try{
            if(req.body){
                let users = (Array.isArray(req.body)) ? req.body : [req.body];

                await users.forEach(user => {
                    if(!passwordHash.isHashed(user.senha))
                        user.senha = passwordHash.generate(user.senha)

                    Users.create(user);
                });
            }

            res.status(201).send({message: "User(s) created."});
        }catch(e){
            res.status(500).send({message: e.message});
        }
    },

    async put(req, res){
        try{
            if(req.body.senha && !passwordHash.isHashed(req.body.senha)){
                req.body.senha = passwordHash.generate(req.body.senha)
            }
            await Users.update(req.body, {
                where: {
                  id: req.params.id
                }
            });

            res.status(200).send({message: "User updated."});
        }catch(e){
            res.status(500).send({message: e.message});
        }
    },

    async delete (req, res){
        try{
            await Users.destroy({
                where: {
                  id: req.params.id
                }
            });

            res.status(200).send({message: "User deleted."});
        }catch(e){
            res.status(500).send({message: e.message});
        }
    }
}