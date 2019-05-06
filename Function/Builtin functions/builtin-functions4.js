// Write a program that calculates a number of integer values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3
var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

function howManyIntegers() {
    var output = 0;
    for (i = 0; i < array.length; i++) {
        if (typeof array[i] === "number" && array[i] % 1 === 0) {           
            output ++;
        }
    }
    return output;
}

var rez = howManyIntegers();
console.log(rez);



