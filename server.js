var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname, '/', 'index.html'));
});


app.get('/place', function(req, res) {
    console.log("/place");
    res.send("Nope, toujours pas...");
});

app.get('/places', function(req, res) {
    console.log("/places");

    // places.places[5].password = Date.now();
    // response.send(places);
});

app.get('/meteo', function(req, res) {

    res.sendFile(path.join(__dirname, 'public/page', 'meteo.html'));
});

app.get('/geoloc', function(req, res) {

    res.sendFile(path.join(__dirname, 'public/page', 'geoloc.html'));
});

app.get('/maps', function(req, res) {

    res.sendFile(path.join(__dirname, 'public/page', 'maps.html'));
});


app.listen(8080, function() {
    console.log('Example app listening on port 8080!');
});