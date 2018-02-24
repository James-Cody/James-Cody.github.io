function temp(high, low, s) {
var t = (high+low)/2;
var temp = 35.74 + (0.6215*t) - (35.75*(Math.pow(s, 0.16))) + (0.4275*t*(Math.pow(s, 0.16)));
temp = Math.round(temp * 1) / 1;
document.getElementById('windChill').innerHTML = "Wind-chill Fatctor: " + temp + "&deg;";
}