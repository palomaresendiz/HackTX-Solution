Parse.initialize("vYOu7vgqNnE9f4j7gKqppBNcWAprWDGBVC3SV8u8", "rnIdMgPC2xXcrMDzZ1WmoHVSyUy999wyQdjkEWNQ");
Parse.serverURL = "https://parseapi.back4app.com/";

signUp();

function signUp() {
    // Create a new instance of the user class
    var user = new Parse.User();
    user.set("username", "my name");
    user.set("password", "my pass");
    user.set("email", "email@example.com");
  
  
    user.signUp().then(function(user) {
        console.log('User created successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
    }).catch(function(error){
        console.log("Error: " + error.code + " " + error.message);
    });
}