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
    var bikeParts = [0];
    bikeParts = jsonObj['parts'];
    var b = [0];
    var bw = [0];
    var bg = [0];
    var bb = [0];
    var bp = [0];
    var bs = [0];
    for (var i = 0; i < bikeParts.length; i++) {
        b[i+1] = bikeParts[i].name;
        bw[i+1] = bikeParts[i].wheel;
        bg[i+1] = bikeParts[i].gears;
        bb[i+1] = bikeParts[i].brakes;
        bp[i+1] = bikeParts[i].pedal;
        bs[i+1] = bikeParts[i].seat;
        document.getElementById("b{$i+1}").innerHTML = b[i+1];
        document.getElementById("bw{$i+1}").innerHTML = bw[i+1];
        document.getElementById("bg{$i+1}").innerHTML = bg[i+1];
        document.getElementById("bb{$i+1}").innerHTML = bb[i+1];
        document.getElementById("bp{$i+1}").innerHTML = bp[i+1];
        document.getElementById("bs{$i+1}").innerHTML = bs[i+1];
    }
        
}