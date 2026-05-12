const UsersRoute = require('./UsersRoute');
const OrdersRoute = require('./OrdersRoute');

module.exports = (app) => {
   UsersRoute(app),
   OrdersRoute(app)
}