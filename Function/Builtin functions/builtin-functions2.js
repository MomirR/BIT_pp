// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// 	Output: “015false-2247”

var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function arrayToString() {
    var newString = "";
    for (i = 0; i < array.length; i++) {
       if (typeof array[i] === "number" || (array[i] === false || array[i] === true ) || typeof array[i] === "string") {
           if (!isNaN(array[i])) {
            newString += array[i];
           }
       }
    }
    return newString;
}
var rez = arrayToString();
console.log(rez);
