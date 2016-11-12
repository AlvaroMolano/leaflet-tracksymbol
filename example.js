var PORT = 8000;
var HOST = '127.0.0.1';
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

var serverPath = path.join(__dirname, 'public');
var leafletFile = path.join(__dirname, 'leaflet-tracksymbol.js');

app.use(express.static(serverPath));
app.get('/leaflet-tracksymbol.js', function(req, res) {
	res.sendFile(leafletFile);
});

var httpServer = http.createServer(app).listen(PORT);
console.log('Http-server started in port ' + PORT);
