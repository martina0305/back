const crudPlaces = (app) =>{
    const Places = require ('../models/places.js');

    findAllPlaces = (req, res) =>{

        Places.find((err, places)=>{
            if(!err){
                console.log('GET/places');
                res.send(places)
            }
        })
    }
    
    app.get('/places', findAllPlaces);
}


module.exports = crudPlaces;
