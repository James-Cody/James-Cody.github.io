function date() {
    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth();
    var day = d.getDate();
    var weekday = d.getDay();
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
    if(weekday == 1) {weekday = "Monday";}
    if(weekday == 2) {weekday = "Tuesday";}
    if(weekday == 3) {weekday = "Wednesday";}
    if(weekday == 4) {weekday = "Thursday";}
    if(weekday == 5) {weekday = "Friday";}
    if(weekday == 6) {weekday = "Saturday";}
    if(weekday == 7) {weekday = "Sunday";}
    document.getElementById('currentdate').innerHTML = weekday + ", " + day + " " + m + " " + y;
}