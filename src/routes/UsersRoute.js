const UsersController = require('../controllers/UsersController');
const bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()

module.exports = (app) => {
   app.post('/login', jsonParser, UsersController.login);
   app.get('/users', UsersController.getAll);
   app.post('/users', jsonParser, UsersController.post);
   app.put('/users/:id', jsonParser, UsersController.put);
   app.delete('/users/:id', UsersController.delete);
}