(function() {
    console.log('Start');


});

$('#sendAjaxBtn2').click(function() {
    console.log('click btn');

    //var url = "http://localhost:3000/places";
    //$.ajax(url).done(ajaxDone).fail(ajaxFailed);

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=Toulouse,France&appid=30368112942be4f953f06bf5e19d7edd&lang=fr&units=metric',
        type: "GET",
        success: function(data) {
            //var meteo = JSON.parse;
            var temperature = data.main.temp;
            var humidite = data.main.humidity;

            $("#meteo").append("il fait " + temperature + " C° et " + humidite + "% d'humidité à Toulouse")

        }
    });
});

$('#sendAjaxBtn3').click(function() {
    console.log('click btn');

    $.ajax({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Toulouse,France&key=AIzaSyDxueQvI5pP4KwpySt9oUJhjyIOHPa1hyM',
        type: "GET",
        success: function(data) {
            //var meteo = JSON.parse;
            var ville = data.results[0].address_components[0].long_name;
            var region = data.results[0].address_components[2].long_name;
            var latitude = data.results[0].geometry.location.lat;
            var longitude = data.results[0].geometry.location.lng;

            $("#geolocalisation").append("Vous êtes situé à " + ville + " dans la region " + region + ".<br>" +
                "Votre latitude est de " + latitude + "° et votre longitude est de " + longitude + "°.");

        }
    });
});

$('#sendAjaxBtn4').click(function() {
    console.log('click btn');

    $.ajax({
        url: 'https://maps.googleapis.com/maps/api/directions/json?origin=Toulouse&destination=Tarbes&key=AIzaSyDWyuyigrpE3xALBFDaVKbvRkTE4XHp2Q4',
        type: "GET",
        success: function(data) {
            //var meteo = JSON.parse;
            var distance = data.routes[0].legs[0].distance.text;
            var temps = data.routes[0].legs[0].duration.text;;
            console.log(temps);


            $("#maps").append("La distance entre Toulouse et Tarbes est de " + distance + " pour un temps de conduite de " + temps + ".");

        }
    });
});


function ajaxDone(data, status) {
    console.log('done', data);
    var places = data.places;
    console.log(places);

    for (var i = 0; i < places.length; i++) {
        var place = places[i];
        var newElement = "<li>" + place.nom + "</li>";

        if (place.nom === "IoT Valley") {
            var motDePasse = place.password;
            $('body').append('Mot de passe: ' + motDePasse);
        }

        $('#list').append(places);
    }
};

function ajaxFailed() {
    console.log('failed');

};