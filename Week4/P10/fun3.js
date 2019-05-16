// Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements.
// 	Input: prograMming
// 	Output: progra**ing, 2
var test = "prograMming";

var replace = (function (test) {
    var testLength = test.length;
    var newString = "";
    var counter = 0;
    for (i = 0; i < testLength; i++) {
        if (test[i] === "M" || test[i] === "m") {
            newString += "*";
            counter++;
        } else {
            newString += test[i];
        }
    }

    return newString + ", " + counter;
})(test);
console.log(replace);
