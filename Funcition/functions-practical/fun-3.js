// Write a program to filter out falsy values from the array.
// Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]
var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function numberArray(array) {
    var newArray = [];
    for (i = 0, j = 0; i < array.length; i++) {
        if (typeof array[i] === "number" && array[i] !== 0 && !isNaN(array[i])) {
            newArray[j] = array[i];
            j++;

        }
    }
    return newArray;
}
var rez = numberArray(array);
console.log(rez);

