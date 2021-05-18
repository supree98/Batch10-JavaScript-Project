function addUser() {

    var user = {
        name : inputName,
        batch : batchNumber,
        password : inputPassword,
        mail : inputMailId,
        phone : inputPhone,
        gender : inputGender,
        state : inputState
    }

    var jsonUser = JSON.stringify(user);
    localStorage.setItem( `${user["phone"]}` , jsonUser);

}