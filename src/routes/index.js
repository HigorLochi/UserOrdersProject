require('dotenv').config()

const UsersRoute = require('./UsersRoute');

module.exports = (app) => {
   UsersRoute(app)
}