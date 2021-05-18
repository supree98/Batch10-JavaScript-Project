function showLoginForm() {

    var loginFormElm = document.getElementById("loginForm");
    var registerFormElm = document.getElementById("registerForm");
    var welcomMessageElm = document.getElementById("WelcomeMessage");
    loginFormElm.style.visibility = "visible";
    registerFormElm.style.visibility = "hidden";
    welcomMessageElm.style.visibility = "visible";

}

function showRegisterForm() {

    var loginFormElm = document.getElementById("loginForm");
    var registerFormElm = document.getElementById("registerForm");
    var welcomMessageElm = document.getElementById("WelcomeMessage");
    loginFormElm.style.visibility = "hidden";
    registerFormElm.style.visibility = "visible";
    welcomMessageElm.style.visibility = "hidden";

}