const UserController = require('../controllers/UserController');
const bodyParser = require('body-parser');
const auth = require('../middlewares/auth');

var jsonParser = bodyParser.json()

module.exports = (app) => {
   app.post('/login', jsonParser, UserController.login);
   app.get('/users', auth(), UserController.getAll);
   app.post('/users', auth(), UserController.post);
   app.put('/users/:id', auth(), UserController.put);
   app.delete('/users/:id', auth(), UserController.delete);
}