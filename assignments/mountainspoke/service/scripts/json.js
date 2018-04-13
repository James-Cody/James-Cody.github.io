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
    var bplace = 0;
    var bwplace = 0;
    var bgplace = 0;
    var bbplace = 0;
    var bpplace = 0;
    var bsplace = 0;
    
  for (var i = 0; i < parts.length; i++) {
    b[i+1] = parts[i].name;
    bplace = "b" + (i+1);
    bw[i+1] = parts[i].wheel;
    bwplace = "bw" + (i+1);
    bg[i+1] = parts[i].gears;
    bgplace = "bg" + (i+1);
    bb[i+1] = parts[i].brakes;
    bbplace = "bb" + (i+1);
    bp[i+1] = parts[i].pedal;
    bpplace = "bp" + (i+1);
    bs[i+1] = parts[i].seat;
    bsplace = "bs" + (i+1);
        
    document.getElementById(bplace).innerHTML = b[i+1];
    document.getElementById(bwplace).innerHTML = bw[i+1];
    document.getElementById(bgplace).innerHTML = bg[i+1];
    document.getElementById(bbplace).innerHTML = bb[i+1];
    document.getElementById(bpplace).innerHTML = bp[i+1];
    document.getElementById(bsplace).innerHTML = bs[i+1];
    }
        
}