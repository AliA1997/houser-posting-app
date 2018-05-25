require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const ctrl = require('./controller');
const session = require('express-session');
const PORT = 4000;
const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 60 * 24 * 14
    }
}))
massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
}).catch(err => console.log('Connection error-----------', err));

app.get('/api/houses', ctrl.getHouses);
app.post('/api/houses', ctrl.createHouses);
app.put('/api/houses/:id', ctrl.editHouse);
app.delete('/api/houses/:id', ctrl.deleteHouse);
app.listen(PORT, () => console.log(`Listening on Port:${PORT}`));