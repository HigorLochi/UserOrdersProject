const OrderController = require('../controllers/OrderController');
const bodyParser = require('body-parser')
const auth = require('../middlewares/auth');

module.exports = (app) => {
   app.get('/orders', auth(), OrderController.getAll);
   app.get('/orders/:userid', auth(), OrderController.getByUserId);
   app.post('/orders', auth(), OrderController.post);
}