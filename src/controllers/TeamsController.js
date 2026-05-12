const Teams = require('../classes/Teams');

module.exports = {
    async post(req, res) {
        try{
            if(req.body && Array.isArray(req.body)){
                await req.body.forEach(team => {
                    Teams.create(team);
                });
            }else
                await Teams.create(req.body);

            res.status(201).send('Time(s) criado(s)!');
        }catch(e){
            res.status(500).send(req.body);
        }
    },
    
    async put(req, res){
        try{
            await Teams.update(req.body, {
                where: {
                  id: req.params.id
                }
            });

            res.status(200).send("Sucesso!");
        }catch(e){
            res.status(500).send("Operação falhou!");
        }
    },

    async delete (req, res){
        try{
            await Teams.destroy({
                where: {
                  id: req.params.id
                }
            });

            res.status(200).send("Sucesso!");
        }catch(e){
            res.status(500).send("Operação falhou!");
        }
    },

    async getAll(req, res){
        try{
            const teams = await Teams.findAll();
            res.status(200).json(teams);
        }catch(e){
            res.status(500).send("Operação falhou!");
        }
    },

    async getById (req, res){
        try{
            const team = await Teams.findOne({ where: { id: req.params.id } });
            res.status(200).send(team);
        }catch(e){
            res.status(500).send("Operação falhou!");
        }
    }
}