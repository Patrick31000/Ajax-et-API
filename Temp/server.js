var express = require('express');
var http = require('http');
var path = require('path');

var app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res) {
    var openWeatherMapURL = 'http://api.openweathermap.org/data/2.5/weather?q=Toulouse,France&appid=30368112942be4f953f06bf5e19d7edd&lang=fr&units=metric';
    require('request').get(openWeatherMapURL, function(err, response, body) {

        var meteo = JSON.parse;
        res.send(meteo);
    });

});




app.get('/place', function(request, response) {
    console.log("/place");
    response.send("Nope, toujours pas...");
});

app.get('/places', function(request, response) {
    console.log("/places");

    places.places[5].password = Date.now();
    response.send(places);
});

// ... Tout le code de gestion des routes (app.get) se trouve au-dessus

app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});


app.listen(8080, function() {
    console.log('Example app listening on port 8080!');
});