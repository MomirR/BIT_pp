// Write a program that inserts a given element e on the given position p in the array a. 
// If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

var numbers = [2, -2, 33, 12, 5, 8];
var input = 78;
var index = 3;

function pushingElement(input, index) {
    var transformed = [];
    for (i = 0, j = 0; i < numbers.length; i++) {
        if (index === i) {
            transformed[index] = input;
            j++;

        }
        transformed[j] = numbers[i];
        j++;
    }
    return transformed;
}
console.log(pushingElement(input, index));

