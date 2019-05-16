// Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
// 	Input array: [4, 5, 11, 9]
// 	Output array: [ 9, 5, 11, 4]

var num1 = [4, 5, 11, 9];

(function rotate(num1) {
    var newNum = [];
    var numLength = num1.length;
    var lastElement = num1[numLength - 1];
    var firstElement = num1[0];
    var tmp = firstElement;
    firstElement = lastElement;
    lastElement = tmp;
    newNum = num1;
    newNum[0] = firstElement;
    newNum[numLength - 1] = lastElement;
    console.log(newNum);
})(num1);