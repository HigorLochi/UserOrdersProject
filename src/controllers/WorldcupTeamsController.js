const WorldCupTeams = require('../classes/WorldcupTeams');
const Teams = require('../classes/Teams');
const WorldCups = require('../classes/WorldCups');
const { BelongsTo } = require('sequelize');
const Util = require('../util');

module.exports = {
    async post(req, res) {
        try{
            if(req.body && Array.isArray(req.body)){
                await req.body.forEach(worldcupteam => {
                    WorldCupTeams.create(worldcupteam);
                });
            }else
                await WorldCupTeams.create(req.body);

            res.status(201).send('Relação criada!');
        }catch(e){
            res.status(500).send(req.body);
        }
    },
    
    async put(req, res){
        try{
            await WorldCupTeams.update(req.body, {
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
            await WorldCupTeams.destroy({
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
            const worldcupteams = await WorldCupTeams.findAll({
                include: [
                    {
                        model: Teams,
                        association: new BelongsTo(WorldCupTeams, Teams, {foreignKey:"idTeam"}),
                    },
                    {
                        model: WorldCups,
                        association: new BelongsTo(WorldCupTeams, WorldCups, {foreignKey:"idWorldcup"}),
                    }
                ]
            });
            res.status(200).json(worldcupteams);
        }catch(e){
            res.status(500).send("Operação falhou!");
        }
    },

    async getById (req, res){
        try{
            const worldcupteam = await WorldCupTeams.findOne({ 
                where: { id: req.params.id },
                include: [
                    {
                        model: Teams,
                        association: new BelongsTo(WorldCupTeams, Teams, {foreignKey:"idTeam"}),
                    },
                    {
                        model: WorldCups,
                        association: new BelongsTo(WorldCupTeams, WorldCups, {foreignKey:"idWorldcup"}),
                    }
                ]
            });
            res.status(200).send(worldcupteam);
        }catch(e){
            res.status(500).send("Operação falhou!");
        }
    }
}