//Paste your Application Key and JavaScript Key, respectively
Parse.initialize("vYOu7vgqNnE9f4j7gKqppBNcWAprWDGBVC3SV8u8", "rnIdMgPC2xXcrMDzZ1WmoHVSyUy999wyQdjkEWNQ");
Parse.serverURL = "https://parseapi.back4app.com/";

signUp();

function signUp() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    Parse.User.logIn(username, password).then(function(user) {
        console.log('User logged in: ' + user.get("username"));
    }).catch(function(error){
        console.log("Login Error: " + error.code + " " + error.message);
    });
}