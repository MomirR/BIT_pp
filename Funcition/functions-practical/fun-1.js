// Write a function that converts an array of strings into an array of numbers. 
// Filter out all non-numeric values.
// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]
var array = ["1", "21", undefined, "42", "1e+3", Infinity];
function arrayToNumber(array) {
    var res = [];

    for (i = 0, j = 0; i < array.length; i++) {
        if (typeof array[i] === "string") {
            res[j] = parseFloat(array[i]);
            j++;
        }
    }
    return res;
}
var finalArray = arrayToNumber(array);
console.log(finalArray);






