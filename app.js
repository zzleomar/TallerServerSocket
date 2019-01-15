var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

//rutas apiREST
var rutas = require('./routes/index');
app.use('/api', rutas);


module.exports = app;