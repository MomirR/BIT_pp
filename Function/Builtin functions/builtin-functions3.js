// Write a program to filter out falsy values from the array.
// Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]

var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function arrayToString() {
    var newArray = [];
    var j = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] === true || (typeof array[i] === "number" && array[i] !== 0) && array[i] !== false && typeof array[i] !== "" && typeof array[i] !== null && typeof array[i] !== undefined) {
            if (!isNaN(array[i])) {
            newArray[j] = array[i];
            j++;
            }   
        }
    }
    return newArray;
}
var rez = arrayToString();
console.log(rez);



