var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'http://api.wunderground.com/api/bd9e84fca0dc43f7/conditions/q/MN/Franklin.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var temps = request.response;
  populateTemp(temps);
}

function populateTemp(json) {
    var wArray = json['current_observation'];
    var high = wArray.temp_f;
    var low = wArray.dewpoint_f;
    var wet = wArray.relative_humidity;
    var wind = wArray.wind_mph;
    var windTxt = wArray.wind_string;
    var weatherString = wArray.weather;
    
    var weatherPic = wArray.icon_url;
    var elem = document.createElement("img");
    elem.setAttribute("src", weatherPic);
    elem.setAttribute("height", "50");
    elem.setAttribute("width", "50");
    elem.setAttribute("alt", "weatherIcon");
    
    document.getElementById('high').innerHTML = "High: " + high + "&deg;";
    document.getElementById('low').innerHTML = "Low: " + low + "&deg;";
    document.getElementById('wet').innerHTML = "Humidity: " + wet;
    document.getElementById('wind').innerHTML = "Windsped: " + windTxt;
    document.getElementById('weatherString').innerHTML = weatherString;
    document.getElementById("weatherPic").appendChild(elem);
    
var t = (high+low)/2;
var temp = 35.74 + (0.6215*t) - (35.75*(Math.pow(wind, 0.16))) + (0.4275*t*(Math.pow(wind, 0.16)));
temp = Math.round(temp * 1) / 1;
document.getElementById('windChill').innerHTML = "Wind-chill Fatctor: " + temp + "&deg;";
}