const crudPlaces = (app) =>{
    const Place = require('../models/places.js').default;


    //Funciones de endpoints
    //GET - Devuelve los lugares
    findAllPlaces = (req, res) =>{
        console.log('hola mundo');
        Place.find((err, places)=>{
            if(!err){
                console.log('GET/places');
                res.send(places)
            }
        })
    }
    
    //app.get('/places', findAllPlaces);

    //POST - Insert a new register in the DB
    addPlace = function (req, res) {
        console.log('POST');
        console.log(req.body);
        var place = new Place({
            lat: req.body.lat,
            lng: req.body.lng,
            name: req.body.name,
            description: req.body.description,
            type: req.body.type
        });
        place.save(function (err) {
            if (!err) {
                console.log('Created',req.body);
            } else {
                console.log('ERROR: ' + err);
            }
        });
        res.send(place);
    };

    //PUT - Update a register already exists in the DB
    modificarPlace = function (req, res) {
        Place.findById(req.params.id, function (err, place) {
            place.lat = req.body.lat;
            place.lng = req.body.lng;
            place.name = req.body.name;
            place.description = req.body.description;
            place.type = req.body.type;
            place.save(function (err) {
                if (!err) {
                    console.log('Updated',req.body);
                } else {
                    console.log('ERROR: ' + err);
                }
                res.send(place);
            });
        });
    }

    //DELETE - Delete a register with specified ID
    deletePlace = function (req, res) {
        Place.findById(req.params.id, function (err, place) {
            place.remove(function (err) {
                if (!err) {
                    console.log('Removed',req.body);
                } else {
                    console.log('ERROR: ' + err);
                }
                res.send(place);
            })
        });
    }

    //URLS
    app.get('/places', findAllPlaces);
    app.post('/places', addPlace);
    app.put('/place/:id', modificarPlace);
    app.delete('/place/:id', deletePlace);
}


module.exports = crudPlaces;
