function clearBoxes() {
    var phone = document.getElementById('phone').value;
    var quit = false;
    phone = phone.replace(/[^\d]/g, "");
    if (phone.length == 10 || phone.length == 11) {document.getElementById('divphone').innerHTML = "";}
    else {
        document.getElementById('divphone').innerHTML = "Please enter a valid phone number";
        quit++;
    }

    
    var fname = document.getElementById('fname').value;
    if (fname.length != 0){document.getElementById('divfname').innerHTML = "";}
    else{
        document.getElementById('divfname').innerHTML = "Name cannot be empty";
        quit++;
    }
    
    var lname = document.getElementById('lname').value;
    if (lname.length != 0){document.getElementById('divlname').innerHTML = ""}
    else{
        document.getElementById('divlname').innerHTML = "Name cannot be empty";
        quit++;
    }
    
    var email = document.getElementById('email').value;
    if (email.length != 0){document.getElementById('divemail').innerHTML = ""}
    else{
        document.getElementById('divemail').innerHTML = "Email cannot be empty";
        quit++;
    }
    
    var dob = document.getElementById('dob').value;
    dob = dob.replace(/[^\d]/g, "");
    if (dob.length != 0){
        if (dob.length == 8) {document.getElementById('divdob').innerHTML = "";}
        else {
            document.getElementById('divdob').innerHTML = "Please enter a DOB in the format MM/DD/YYYY";
            quit++;
        }
    }
    else{
        document.getElementById('divdob').innerHTML = "Invalid DOB - DOB Required";
        quit++;
    }
    
    var state = document.getElementById('state').value;
    if (state.length != 0){document.getElementById('divstate').innerHTML = ""}
    else{
        document.getElementById('divstate').innerHTML = "State cannot be empty";
        quit++;
    }
    
    var country = document.getElementById('country').value;
    if (country.length != 0){document.getElementById('divcountry').innerHTML = ""}
    else{
        document.getElementById('divcountry').innerHTML = "Country cannot be empty";
        quit++;
    }
    
    if(quit){return;}
    
    document.getElementById('fname').value = "";
    document.getElementById('lname').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('dob').value = "";
    document.getElementById('state').value = "";
    document.getElementById('country').value = "";
    document.getElementById('comments').value = "";
    alert("Thank you. Your form has been submitted");
}