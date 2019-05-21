// Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

// 	12345 -> 54321
var numbers = new Array();
numbers = [1, 2, 3, 4, 5];

function reversedNumbers(numbers) {
    var result = numbers.reverse();
    console.log(typeof result);
    return result;
}
console.log(reversedNumbers(numbers));

