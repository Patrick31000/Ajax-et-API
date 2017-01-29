(function() {
    console.log('Start');
    $ajax({
        type: "GET",
        url: "",
        datatype: "",
        success
    })


    var info = JSON.parse(reponse);
    // Récupération de certains résultats
    var temperature = main.temp;
    var humidite = main.humidity;

    // Affichage des résultats
    /* var conditionsElt = document.createElement("div");
    conditionsElt.textContent = "Il fait actuellement " + temperature +
        "°C et l'humidité est de " + humidite;
    var meteoElt = document.getElementById("meteo");
    meteoElt.appendChild(conditionsElt);;
});*/


    $('#sendAjaxBtn').click(function() {
        console.log('click btn');

        var url = "http://localhost:3000/places";
        $.ajax(url).done(ajaxDone).fail(ajaxFailed);
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
})();