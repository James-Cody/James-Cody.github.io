var requestURL = 'https://james-cody.github.io/assignments/mountainspoke/service/scripts/prices.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var p = request.response;
  populateParts(p);
}

function populateParts(jsonObj) {
    var parts = jsonObj['parts'];
    var b = [];
    var bw = [];
    var bg = [];
    var bb = [];
    var bp = [];
    var bs = [];
    
    for (var i = 0; i < parts.length; i++) {
        b[i+1] = parts[i].name;
        bw[i+1] = parts[i].wheel;
        bg[i+1] = parts[i].gears;
        bb[i+1] = parts[i].brakes;
        bp[i+1] = parts[i].pedal;
        bs[i+1] = parts[i].seat;
        document.getElementById.toString("b{$i+1}").innerHTML = b[i+1];
        document.getElementById.toString("bw{$i+1}").innerHTML = bw[i+1];
        document.getElementById.toString("bg{$i+1}").innerHTML = bg[i+1];
        document.getElementById.toString("bb{$i+1}").innerHTML = bb[i+1];
        document.getElementById.toString("bp{$i+1}").innerHTML = bp[i+1];
        document.getElementById.toString("bs{$i+1}").innerHTML = bs[i+1];
    }
        
}