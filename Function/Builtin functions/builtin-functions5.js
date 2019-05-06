// Write a program that calculates a number of float values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2
var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

function howManyFloats() {
    var output = 0;
    for (i = 0; i < array.length; i++) {
        if (typeof array[i] === "number" && array[i] % 1 !== 0) {
            if (!isNaN(array[i])) {
                output ++;
            }
        }
    }
    return output;
}

var rez = howManyFloats();
console.log(rez);

