var person;
var message;

function validate(phone) {
    try {

        message = "";
        person = JSON.parse(localStorage.getItem(phone));
        isUserAlreadyPresent();
        return message;

    } catch (e) {

        isValidName();
        isValidPassword();
        isValidMail();
        isValidPhone();

        if (message == "") {
            addUser();
        } 
        return message;

    }
}

function isValidName() {

    var pattern = /^[a-zA-Z]{1,20}$/;
    var elm = document.getElementById("validName");

    if (!inputName.match(pattern)) {
        elm.style.color = "red";
        elm.innerHTML = "not a valid name";
    } else {
        elm.innerHTML = "";
    }
 
}                                                

function isValidPassword() {

    var pattern = /^(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[!#@\$%&\?].*).{8,}$/;
    var elm = document.getElementById("validPassword");

    if (inputPassword != confirmPassword) {
        elm.style.color = "red";
        elm.innerHTML = "password does not match";
        message = "doNotShow";
    }  else if(!inputPassword.match(pattern)) {
        elm.style.color = "red";
        elm.innerHTML = "password should contain atleast one number, special character, upper and lower case letter";
        message = "doNotShow";
    } else {
        elm.innerHTML = "";
    }

}

function isValidMail() {

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var elm = document.getElementById("validMail");

    if (!inputMailId.match(pattern)) {    
        elm.style.color = "red";
        elm.innerHTML = "not a valid mail id";
        message = "doNotShow";
    } else {
        elm.innerHTML = "";
    }

}

function isValidPhone() {

    var pattern = /^[6-9]\d{9}/;
    var elm = document.getElementById("validPhone");
    if (!inputPhone.match(pattern)) {
        elm.style.color = "red";
        elm.innerHTML = "invalid phone number";
        message = "doNotShow";
    } else {
        elm.innerHTML = "";
    }

}

function isUserAlreadyPresent() {
    
    if (inputPhone == person["phone"]) {
        message = "phone number already exists";
    } 

}