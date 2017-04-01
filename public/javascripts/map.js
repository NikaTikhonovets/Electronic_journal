/**
 * Created by Ника Тихоновец on 29.03.2017.
 */
function myMap() {

    var myLatLng = {lat: 53.911687, lng: 27.594888};
    var mapOptions = {
        center: new google.maps.LatLng(myLatLng),
        scrollwheel: false,
        zoom: 16
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var infowindow = new google.maps.InfoWindow({
        content: '<p><b>Education Style</b></p><p>Нас можно найти здесь!</p>'
    });

    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Гикало, 9'
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}