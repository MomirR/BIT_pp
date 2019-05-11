// Write a function that combines two arrays by alternatingly taking elements.
// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
var letters = ["a", "b", "c"];
var numbers = [1, 2, 3];

var combineTwoArrays = function (letters, numbers) {
    var lettersLength = letters.length;
    var numbersLength = numbers.length;
    var combinedArray = [];
    for (i = 0; i < lettersLength; i++) {
        combinedArray[i * 2] = letters[i];
    }
    for (j = 0; j < numbersLength; j++) {
        combinedArray[(j * 2) + 1] = numbers[j];
    }
    return combinedArray;
}
console.log(combineTwoArrays(letters, numbers));
