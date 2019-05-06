// Write a program that calculates a number of integer values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3
var array = [NaN, 23, 15, false, -22, '', 4.99, 7.99, null];
function calculatesInt(array) {

    var counter = 0;

    for (i = 0; i < array.length; i++) {
        var notDecimalNumber = (array[i] % 1 === 0);
        if (typeof array[i] === 'number' && notDecimalNumber) {
            counter += 1;
        }
    }

    return counter;
}

var result = calculatesInt(array);
console.log(result);



