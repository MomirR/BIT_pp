// Write a program that calculates a number of float values in the array.

// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2

var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
function calculatesInt(array) {
    var counter = 0;
    for (i = 0; i < array.length; i++) {
        // var isDecimalNumber = parseFloat(array[i]);
        if (typeof array[i] === 'number' && (array[i] % 1 !== 0) && !isNaN(array[i])) {
            counter += 1;
        }
    }
    return counter;
}
var result = calculatesInt(array);
console.log(result);
