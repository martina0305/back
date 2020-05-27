var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var placesSchema = new Schema({
    id: {type: String},
    lat: {type: String},
    lng: {type: String},
    name: {type: String},
    description: {type: String}
});

module.exports = mongoose.model('Places', placesSchema, 'places');

