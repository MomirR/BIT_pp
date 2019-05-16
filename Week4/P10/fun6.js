// Write a function that checks if a given string is valid password.
// The password is valid if it is at least 6 characters long and contains at least one digit. 
// The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid. 
// Input: JSGuru 
// Output: Your password is invalid!

var input = "JSG6uru";

var successCallback = function () {
    var msg = "Your password is correct";
    return msg;
}

var errorCallback = function () {
    var msg = "Your password is invalid";
    return msg
}

function validation(input, success, error) {

    for (i = 0; i < input.length; i++) {
        if (isFinite(input[i]) === true) {
            return success;
        }
    }

    return error;
}

console.log(validation(input, successCallback(), errorCallback()));

