// Write a function that returns a function that calculates a decimal value of the given octal number.
// Input: 034
// Output: 28

// var input = 034;

// var result = (function (input) {

//     function calculates() {
//         var convertingToString = " ";
//         convertingToString += input;
//         return convertingToString;
//     };
//     return calculates();

// })(input);
// console.log(result);


var input = 034;
var result;

function main(input) {

    function calculates() {
        var convertingToString = " ";
        convertingToString += input;
        return convertingToString;
    };
    return calculates;
}

var result = main(input);
console.log(result());
