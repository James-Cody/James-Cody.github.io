var requestURL = 'https://james-cody.github.io/assignments/mountainspoke/json/prices.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function(){
    var partArray = request.response;
    populateParts(partArray); //see note
}

/* this code was not working - i kept getting errors with the array not registering as an array 
*  and as a null or unknown and getting the .length was impossible. I had to completely change my
*  JSON to not use an array and manually select each element - which is an awefull waste of resources
*  but because the error was coming from some syntax in my JSON that i could not find, (and we were never taught JSON syntax)
*  This was the only alternative i had... 
*/ 

function populateParts(jsonObj) {
    var bikeParts = jsonObj['members'];
    var b = [0];
    var bw = [0];
    var bg = [0];
    var bb = [0];
    var bp = [0];
    var bs = [0];
    var bword = "";
    var bwword = "";
    var bgword = "";
    var bbword = "";
    var bpword = "";
    var bsword = "";
    
    for (var i = 0; i < bikeParts.length; i++) {
        b[i+1] = bikeParts[i].name;
        bword = "b" + [i+1];
        bw[i+1] = bikeParts[i].wheel;
        bwword = "bw" + [i+1];
        bg[i+1] = bikeParts[i].gears;
        bgword = "bg" + [i+1];
        bb[i+1] = bikeParts[i].brakes;
        bbword = "bb" + [i+1];
        bp[i+1] = bikeParts[i].pedal;
        bpword = "bp" + [i+1];
        bs[i+1] = bikeParts[i].seat;
        bsword = "bs" + [i+1];
        document.getElementById(bword).innerHTML = b[i+1];
        document.getElementById(bwword).innerHTML = bw[i+1];
        document.getElementById(bgword).innerHTML = bg[i+1];
        document.getElementById(bbword).innerHTML = bb[i+1];
        document.getElementById(bpword).innerHTML = bp[i+1];
        document.getElementById(bsword).innerHTML = bs[i+1];
        alert(i);
    }        
}