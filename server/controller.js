module.exports = {
    //This method gets the houses
    getHouses: (req, res) => {
        //Assign the db instance from the request to a variable.
        const dbInstance = req.app.get('db');
        //Run the get_houses sql file. It returns the data retrieved from the sql file.
        dbInstance.get_houses().then(houses => {
            //Then send a json object with this data.
            if(houses) res.status(200).json({houses});
            else res.status(200).json({houses: ['houses not found']})
        })
    },
    //This method get the data from a individual house.
    getHouse: (req, res) => {
        //This destructs id from the req.params via the endpoint.
        const { id } = req.params;
        //Retrieve the database instance from request and assign it to a variable.
        const dbInstance = req.app.get('db');
        //Run the get_house sql. It returns the data retrieved from the sql file.
        dbInstance.get_house(id).then(house => {
            //Then sends a json object with this data.
            res.status(200).json({house});
        }).catch(err => console.log('Get house------', err));
    },
    createHouses: (req, res) => {
        //Destruct thte data from the req.body, then assign to object, since it is using named parameters.
        const { nameInput, addressInput, cityInput, stateInput, zipcodeInput,
             imageurlInput, monthly_mortgage_amountInput, monthly_rentInput } = req.body;   
        const newHouse = { nameInput, addressInput, cityInput, stateInput, zipcodeInput,
             imageurlInput, monthly_mortgage_amountInput, monthly_rentInput };       
        //Assign the db instance from the request to a variable              
        const dbInstance = req.app.get('db');
        //Run the create_house sql file to create a new house. 
        dbInstance.create_house(newHouse)
        .then(house => {
            //Returns a message since it is not returning no data.
            res.status(200).json({message: 'House created!!'});            
        }).catch(err => console.log('Create House error---------', err));
    },
    editHouse: (req, res) => {
        //Destruct the id from the req.params.
        const { id } = req.params;     
        //Destruct from the req.body, and assign to a new object to so we can update the column based on id. 
        const { nameInput, addressInput, cityInput, stateInput, zipcodeInput, 
            imageurlInput, monthly_mortgage_amountInput, monthly_rentInput } = req.body;
        const updatedHouse = { nameInput, addressInput, cityInput, stateInput, zipcodeInput, id,
             imageurlInput, monthly_mortgage_amountInput, monthly_rentInput };
        //Assign the db instance from the request to a variable                                
        const dbInstance = req.app.get('db');  
        //Run the edit_house sql file with the object as a parameter.
        dbInstance.edit_house(updatedHouse)
        .then(house => {
            //Since it returns data. 
            res.status(200).json({house});
        }).catch(err => console.log('Database put error!', err));
    },
    deleteHouse: (req, res) => {
        //Destruct the data from the request params. Req.params
        const { id } = req.params;
        //Assign the db instance from the request to a variable.
        const dbInstance = req.app.get('db');     
        //Run the delete_house sql file, and run the id, and since it is one parameter,
        // no need for it to be an object or an array.
        dbInstance.delete_house(id).then(() => {
            //Since not retrieving any data, just returns a message.
            res.status(200).json({message: 'House Deleted!!'});
        }).catch(err => console.log('House Delete error---------', err));
    }
}