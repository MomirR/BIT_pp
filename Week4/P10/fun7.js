// Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3] 

var input = [2, 8, 11, 4, 9, 3];

var filter = function (n) {
    var check;
    if (n % 2 !== 0) {
        check = true;
        return check;
    }
}
function mainFun(filter, input) {
    var newArray = [];
    for (i = 0, j = 0; i < input.length; i++) {
        if (filter(input[i]) == + true) {
            newArray[j] = input[i];
            j++;
        }
    }
    return newArray;
}

console.log(mainFun(filter, input));


//     for (i = 0; i < input.length; i++) {
//         var checking = ( % 2 !== 0) ? true : false;
//     }
//     return checking;
// }
// console.log(test(input));