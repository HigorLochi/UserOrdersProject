const express = require('express');
const session = require('express-session');
const cors = require('cors');

const app = express();
const sequelize = require('./config/database');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60
    }
}));

require('./routes/index')(app);

sequelize.authenticate().then(() => {
    app.listen(3333);
}).catch(err => {
    console.log(err);
});