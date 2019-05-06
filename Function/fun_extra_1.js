// Write a function to check whether the `input` is a string or not.
// "My random string" -> true
// 12 -> false
var input = "My random string"; //

function calculates(input) {
    var rez;
    if (typeof input !== "number") {
        rez = "true";
    } else {
        rez = "false";
    }
    return rez;
}
var rez = calculates(input);
console.log(rez);
