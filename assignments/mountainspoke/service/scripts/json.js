var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function(){
    var partArray = request.response;
    populateParts(partArray);
}

function populateParts(jsonObj) {
    var bikeParts = jsonObj['parts'];
    var b = [];
    var bw = [];
    var bg = [];
    var bb = [];
    var bp = [];
    var bs = [];
    
    for (var i = 0; i < bikeParts.length; i++) {
        b[i+1] = bikeParts[i].name;
        bw[i+1] = bikeParts[i].wheel;
        bg[i+1] = bikeParts[i].gears;
        bb[i+1] = bikeParts[i].brakes;
        bp[i+1] = bikeParts[i].pedal;
        bs[i+1] = bikeParts[i].seat;
        document.getElementById.toString("b{$i+1}").innerHTML = b[i+1];
        document.getElementById.toString("bw{$i+1}").innerHTML = bw[i+1];
        document.getElementById.toString("bg{$i+1}").innerHTML = bg[i+1];
        document.getElementById.toString("bb{$i+1}").innerHTML = bb[i+1];
        document.getElementById.toString("bp{$i+1}").innerHTML = bp[i+1];
        document.getElementById.toString("bs{$i+1}").innerHTML = bs[i+1];
    }
        
}