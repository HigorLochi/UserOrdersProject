const Matchs = require('./classes/Matchs');
const Teams = require('./classes/Teams');
const WorldCups = require('./classes/WorldCups');
const WorldcupTeams = require('./classes/WorldcupTeams');
const { BelongsTo, where } = require('sequelize');

module.exports = {
    shuffle(arrayEntry) {
        let currentIndex = arrayEntry.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            // And swap it with the current element.
            [arrayEntry[currentIndex], arrayEntry[randomIndex]] = [
            arrayEntry[randomIndex], arrayEntry[currentIndex]];
        }
      
        return arrayEntry;
    },

    nextPhase(phase){
        switch(phase) {
            case "oitavas de final":
                return "quartas de final"
            case "quartas de final":
                return "semifinal"
            case "semifinal":
                return "final"
            default:
                return "encerrada"
        }
    },

    async setOitavasDeFinal(idworldcup) {
        try{
            let countMatchs = Matchs.count({ where: {idWorldCup:idworldcup}})
            if(countMatchs > 0) return true;

            let worldcupsteams = await WorldcupTeams.findAll({ 
                where: { idWorldcup: idworldcup },
                include: [
                    {
                        model: WorldCups,
                        association: new BelongsTo(WorldcupTeams, WorldCups, {foreignKey:"idWorldcup"}),
                    }
                ]
            })
            
            worldcupsteams = this.shuffle(worldcupsteams)

            let auxteams = []
            worldcupsteams.forEach(worldcupteam => {
                auxteams.push(worldcupteam.idTeam)

                if(auxteams.length == 2){
                    Matchs.create({
                        idWorldCup: worldcupteam.WorldCup.id,
                        phase: worldcupteam.WorldCup.currentPhase,
                        idTeam1: auxteams[0],
                        pointsTeam1: 0,
                        idTeam2: auxteams[1],
                        pointsTeam2: 0
                    })
                    auxteams = []
                }
            });

            return true;
        }catch(e){
            return false;
        }
    },

    async advancePhaseMatchs(worldcup) {
        try{
            let matchs = await Matchs.findAll({
                where: {
                    idWorldCup:worldcup.id,
                    phase: worldcup.currentPhase
                }
            })

            let nextphase = this.nextPhase(worldcup.currentPhase)
            let auxteams = []
            matchs.forEach((match) => {
                if(match.pointsTeam1 > match.pointsTeam2) auxteams.push(match.idTeam1)
                else if(match.pointsTeam2 > match.pointsTeam1) auxteams.push(match.idTeam2)
                else return

                if(worldcup.currentPhase == "final"){
                    Teams.increment('cups', { by: 1, where: { id: auxteams[0] }});
                }else if(auxteams.length == 2){
                    console.log('auxteams',auxteams)
                    Matchs.create({
                        idWorldCup: worldcup.id,
                        phase: nextphase,
                        idTeam1: auxteams[0],
                        pointsTeam1: 0,
                        idTeam2: auxteams[1],
                        pointsTeam2: 0
                    })
                    auxteams = []
                } 
            })

            return nextphase;
        }catch(e){
            return false;
        }
    }
}