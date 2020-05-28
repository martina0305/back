var express = require ('express');
var app= express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var http = require('http');
var server = http.createServer(app);
var mongoose = require('mongoose');


//conexion a la base de datos
mongoose.connect('mongodb+srv://marta:twisted9320*@cluster0-i4afa.mongodb.net/photographymap?retryWrites=true&w=majority', function(err, res){

  if (err) throw err;
  console.log('conectado a mi base');
});

//MIDDLEWARES

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());
var cors = require('cors')


app.use(cors())

routes = require('./routes/places')(app);


app.get('/', function(req, res){
  res.send("Welcome to the machine");
});

server.listen(process.env.PORT || 3000, function(){
  console.log("servidor corriendo en localhost:3000");
});

module.export = app;

