Parse.initialize("vYOu7vgqNnE9f4j7gKqppBNcWAprWDGBVC3SV8u8", "rnIdMgPC2xXcrMDzZ1WmoHVSyUy999wyQdjkEWNQ");
Parse.serverURL = "https://parseapi.back4app.com/";

var nwUsernameInput = document.getElementById("nwUsername");
var nwPasswordInput = document.getElementById("nwPassword");
var repeatPasswordInput = document.getElementById("repeatPassword");

// Attach an event listener to the form's submit button
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the input fields
    var username = nwUsernameInput.value;
    var password = nwPasswordInput.value;
    var repeatPassword = repeatPasswordInput.value;

    if (password !== repeatPassword) {
        alert("Passwords do not match. Please try again.");
    } else {
        signUp(username, password);
    }
});

function signUp(username, password) {
    var user = new Parse.User();
    user.set("username", username);
    user.set("password", password);
    user.set("email", "email@example.com");

    user.signUp().then(function (user) {
        console.log('User created successfully with name: ' + user.get("username") + ' and email: ' + user.get("email"));
    }).catch(function (error) {
        console.log("Error: " + error.code + " " + error.message);
    });
}