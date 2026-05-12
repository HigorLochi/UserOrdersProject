const TeamsController = require('../Controllers/TeamsController');
const bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()

module.exports = (app) => {
   app.post('/teams', jsonParser, TeamsController.post);
   app.put('/teams/:id', jsonParser, TeamsController.put);
   app.delete('/teams/:id', TeamsController.delete);
   app.get('/teams', TeamsController.getAll);
   app.get('/teams/:id', TeamsController.getById);
}