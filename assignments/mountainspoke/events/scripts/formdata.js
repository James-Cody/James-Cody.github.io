function clearBoxes() {
    var phone = document.getElementById('phone').value;
    var quit = false;
    phone = phone.replace(/[^\d]/g, "");
    if (phone.length == 10 || phone.length == 11) {document.getElementById('divphone').innerHTML = "";}
    else {
        document.getElementById('divphone').innerHTML = "Please enter a valid phone number";
        quit++;
    }

    
    var dob = document.getElementById('dob').value;
    dob = dob.replace(/[^\d]/g, "");
    if (dob.length == 8) {document.getElementById('divdob').innerHTML = "";}
    else {
        document.getElementById('divdob').innerHTML = "Please enter a DOB in the format MM/DD/YYYY";
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