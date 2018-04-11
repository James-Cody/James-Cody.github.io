function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(45.672318, -111.090771),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}