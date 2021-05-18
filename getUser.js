function getUser(inputId, inputPassword) {

    try {
        var user = JSON.parse(localStorage.getItem(inputId));
        if(inputPassword == user["password"]) {
            return user["name"];
        } else {
            var elm = document.getElementById("invalidPassword");
            elm.style.color = "red";
            elm.innerHTML = "invalid password";
            return "";
        }
    } catch(e) {
        alert("user does not exist");
        return "";
    }
    
}