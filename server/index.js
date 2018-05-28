//Configures your .env file, so you can retrieve CONNECTION_STRING from that file.
require('dotenv').config();
//Configure server 
const express = require('express');
//Configure middleware and setup req.body
const bodyParser = require('body-parser');
//Used for setting up database.
const massive = require('massive');
//Used for endpoints.
const ctrl = require('./controller');
//Used for setting up cookies.
const session = require('express-session');
//Have a variable for a port. 
const PORT = 4000;

const app = express();

//Setup public files. 
app.use(express.static('public'));
//Setup req.body
app.use(bodyParser.json());
//Setup cookie
app.use(session({
    //A secret for sessionId
    secret: process.env.SESSION_SECRET,
    //For performance.
    resave: false,
    saveUninitialized: false,
    //Setup the cookie's age. 
    cookie: {
        maxAge: 60 * 60 * 60 * 24 * 14
    }
}))
//Setup database using CONNECTION_STRING variable from .env connecting to Heroku database.
massive(process.env.CONNECTION_STRING).then(database => {
    //Hook sql files to app, and database.
    app.set('db', database);
}).catch(err => console.log('Connection error-----------', err));
//Used for getting houses for Dashboard component
app.get('/api/houses', ctrl.getHouses);
//Used for getting a individual house data for HousePage component.
app.get(`/api/houses/:id`, ctrl.getHouse);
//Used for creating houses with StepThree Component
app.post('/api/houses', ctrl.createHouses);
//Used for editing houses.
app.put('/api/houses/:id', ctrl.editHouse);
//Used for deleting houses.
app.delete('/api/houses/:id', ctrl.deleteHouse);
//Listens to port specified.
app.listen(PORT, () => console.log(`Listening on Port:${PORT}`));