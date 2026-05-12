const OrderController = require('../controllers/OrderController');
const bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

module.exports = (app) => {
   app.get('/orders', OrderController.getAll);
   app.get('/orders/:userid', OrderController.getByUserId);
   app.post('/orders', jsonParser, OrderController.post);
}