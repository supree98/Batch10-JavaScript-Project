var inputName;
var batchNumber;
var inputPassword;
var confirmPassword;
var inputMailId;
var inputPhone;
var inputGender;
var inputState;
var person;
var result;

function validateRegisterForm() {

    inputName = document.registerForm.userName.value;
    batchNumber = document.registerForm.batchNumber.value;
    inputPassword = document.registerForm.password.value;
    confirmPassword = document.registerForm.confirmPassword.value;
    inputMailId = document.registerForm.inputMailId.value;
    inputPhone = document.registerForm.inputPhone.value;
    inputGender = findGender(document.getElementsByName("gender"));
    inputState = document.registerForm.inputState.value;

    if (inputName != "" && batchNumber != "" && inputPassword != "" && confirmPassword != "" && inputMailId != "" &&
        inputPhone != "" && inputGender != "" && inputState != "") {
            var message = validate(inputPhone);
            if(message == "doNotShow") {
                return false;
            } else if(message != "") {
                alert(message);
                return false;
            } else {
                alert(`Registered successfully with name ${inputName}`);
                return true;
            }

    } else {
        alert("please provide all the credentials")
        return false;
    }  

}

function validateLoginForm() {
    result = "";
    inputId = document.loginForm.inputId.value;
    inputPassword = document.loginForm.loginPassword.value;
    var result = getUser(inputId , inputPassword);
    if(result != "") {
        alert(`Welcome ${result}`);
        return true;
    } else {
        return false;
    }

}

function findGender(elm) {

    if (elm[0].checked) {
        return "Male";
    } else {
        return "Female";
    }

}
