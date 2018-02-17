function date() {
    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth();
    var day = d.getDate();
    if(m == 0) {m = "January";}
    if(m == 1) {m = "February";}
    if(m == 2) {m = "March";}
    if(m == 3) {m = "April";}
    if(m == 4) {m = "May";}
    if(m == 5) {m = "June";}
    if(m == 6) {m = "July";}
    if(m == 7) {m = "August";}
    if(m == 8) {m = "September";}
    if(m == 9) {m = "October";}
    if(m == 10) {m = "November";}
    if(m == 11) {m = "Decenber";}
    document.getElementById('currentdate').innerHTML = m + " " + day + " "+ y;
}