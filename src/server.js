const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require('./config/database');

require('./routes/index')(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.authenticate().then(() => {
    app.listen(3333);
}).catch(err => {
    console.log(err);
});