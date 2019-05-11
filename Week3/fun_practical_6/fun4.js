// Write a function that takes a number and returns array of its digits.

var number = 976;

var convertingToArray = function (number) {
    var string = "";
    string +=  number;
    var stringLength = string.length;
    var arrayOfNumbers = [];
    for (i = 0;  i < stringLength; i++) {
        arrayOfNumbers[i] = parseInt(string[i]);
    }
    return arrayOfNumbers;
}
console.log(convertingToArray(number));
