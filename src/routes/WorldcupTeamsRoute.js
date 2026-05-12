const WorldcupTeamsController = require('../controllers/WorldcupTeamsController');
const bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()

module.exports = (app) => {
   app.post('/worldcupteams', jsonParser, WorldcupTeamsController.post);
   app.put('/worldcupteams/:id', jsonParser, WorldcupTeamsController.put);
   app.delete('/worldcupteams/:id', WorldcupTeamsController.delete);
   app.get('/worldcupteams', WorldcupTeamsController.getAll);
   app.get('/worldcupteams/:id', WorldcupTeamsController.getById);
}