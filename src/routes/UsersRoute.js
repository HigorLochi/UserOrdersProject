const UserController = require('../controllers/UserController');
const bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()

module.exports = (app) => {
   app.post('/login', jsonParser, UserController.login);
   app.get('/users', UserController.getAll);
   app.post('/users', jsonParser, UserController.post);
   app.put('/users/:id', jsonParser, UserController.put);
   app.delete('/users/:id', UserController.delete);
}