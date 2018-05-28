# Instructions 

## Step 1 Install needed dependencies/modules.
1. Install dependencies for backend.
- For configuring server
    - install express body-parser 
- For configuring sessions 
    - install express-session
- For configuring database, and a .env file.
    - install massive dotenv 
2. Install dependencies for frontend.
- For the configuring redux.
    - install react-redux redux
- For configuring react-router 
    - install react-router-dom
- For fetching data 
    - install axios

##Step 2 Create needed folders 
- Create a server folder 
    - Create a index.js file
    - Create a controller.js file
- Create a db folder that holds sql files.
- Create a components folder within src folder.
    - Create a Dashboard, Header, House, HousePage, Wizard, with each folder having it's own css, and js file regarding that component. Optional
- Create a ducks folder within src folder.
    - Create a reducer.js file for reducer
    - Create a store.js file for configuring store
- Create a routes file  for routes.
## Step 3 Configure your backend.
- Go to your package.json and setup proxy, and main.
    - main: server/,
    - proxy: http://localhost:4000
- Go to your server folder, and index.js file.
    - Set up server 
        - const express = require('express');
        - const app = express();
        - const PORT = 4000;
        - at the end of the file. 
            - app.listen(PORT, () => console.log(`Listening on Port:${PORT}`))
    - Apply middleware 
        - Setup the req.body for request from server.
            - const bodyParser = require('body-parser');
            - app.use(bodyParser.json())
        - Setup cookies for a unique experience for each user.
            - const session = require('express-session');
            - app.use(session({
                resave: false,
                saveUnitialized: false,
                cookie: {
                    maxAge: 60 * 60 * 60 * 24 * 14
                }
            }))    
    - Setup Database 
        - To configure your .env file on the very top of the file.
            - require('dotenv').config();
        - Right Below const express = require('express')
            - const massive = require('massive');
        - Setup database after setting up session middleware.
            - massive(process.env.CONNECTION_STRING).then(database => {
                app.set('db', database);
            }).catch(error => console.log('Error!!', error));
    - Setup endpoints then setup each method in controller file for each endpoint.
        - For retrieving houses in Dashboard component.
            - app.get('/api/houses', ctrl.getHouses);
        - For retrieving a specific house in HousePage component using request parameters.
            - app.get('/api/houses/:id', ctrl.getHouse);
        - For creating a new house, no need for request parameter in this case becuase it is just adding house, there is no need for a id request parameter.
            - app.post('/api/houses', ctrl.createHouse);
        - For editing a house, need request parameters, since retrieving a specific house.
            - app.put('/api/houses/:id', ctrl.editHouse);
        - For deleting a house, need request parameters, since retrieving a specific house.
            - app.delete('/api/houses/:id', ctrl.deleteHouses);
    - Setup controller methods.
        - getHouses method
            - retrieve all houses.
        - getHouse method 
            - retrieve a specific house based on id request parameter.
        - createHouse method 
            - create a house
        - editHouse method.
            - edit a specific house based on id request parameter.
        - deleteHouse method.
            - delete a specific house based on id request parameter.
    -