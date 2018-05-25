module.exports = {
    getHouses: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_houses().then(houses => {
            if(houses) res.status(200).json({houses});
            else res.status(200).json({houses: ['houses not found']})
        })
    },
    createHouses: (req, res) => {
        const { name, address, city, state, zipcode } = req.body;   
        const newHouse = { name, address, city, state, zipcode };        
        const dbInstance = req.app.get('db');
        dbInstance.create_house(newHouse)
        .then(house => {
            res.status(200).json({message: 'House created!!'});            
        }).catch(err => console.log('Create House error---------', err));
    },
    editHouse: (req, res) => {
        const { id } = req.params;     
        const { name, address, city, state, zipcode } = req.body;
        const updatedHouse = { name, address, city, state, zipcode, id };                   
        const dbInstance = req.app.get('db');  
        dbInstance.edit_house(updatedHouse)
        .then(house => {
            res.status(200).json({house});
        }).catch(err => console.log('Database put error!', err));
    },
    deleteHouse: (req, res) => {
        const { id } = req.params;
        const dbInstance = req.app.get('db');     
        dbInstance.delete_house(id).then(() => {
            res.status(200).json({message: 'House Deleted!!'});
        }).catch(err => console.log('House Delete error---------', err));
    }
}