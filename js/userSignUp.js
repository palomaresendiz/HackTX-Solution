// Initialize Parse
Parse.initialize("vYOu7vgqNnE9f4j7gKqppBNcWAprWDGBVC3SV8u8, rnIdMgPC2xXcrMDzZ1WmoHVSyUy999wyQdjkEWNQ");
Parse.serverURL = "https://parseapi.back4app.com/";

// Get references to input elements
var nwUsernameInput = document.getElementById("nwUsername");
var nwPasswordInput = document.getElementById("nwPassword");
var repeatPasswordInput = document.getElementById("repeatPassword");

signUp();

function signUp() {
    // Create a new instance of the user class
    var user = new Parse.User();
    user.set("username", nwUsernameInput);
    user.set("password", nwPasswordInput);
    user.set("repeatPassword", repeatPasswordInput);
  
    if (nwPasswordInput != repeatPasswordInput) {
        alert("Passwords do not match");
    }
    
  
    user.signUp().then(function(user) {
        console.log('User created successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
    }).catch(function(error){
        console.log("Error: " + error.code + " " + error.message);
    });
}
