const WorldCupsController = require('../Controllers/WorldCupsController');
const bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()

module.exports = (app) => {
   app.post('/worldcups', jsonParser, WorldCupsController.post);
   app.put('/worldcups/:id', jsonParser, WorldCupsController.put);
   app.delete('/worldcups/:id', WorldCupsController.delete);
   app.get('/worldcups', WorldCupsController.getAll);
   app.get('/worldcups/:id', WorldCupsController.getById);
   app.get('/worldcups/setoitavasdefinal/:id', WorldCupsController.oitavasDeFinal);
   app.get('/worldcups/advancephase/:id', WorldCupsController.advancePhase);
}