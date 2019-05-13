// Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

var firstArrayOfNumbers = [4, 5, 6, 2];
var secondArrayOfNumbers = [3, 8, 11, 9];

function concatenation(first, second) {
    var afterConcatenation = [];
    var index;
    for (i = 0; i < first.length; i++) {
        afterConcatenation[i] = first[i];
        if (first.length - 1 === i) {
            index = i + 1;
        }
    }
    for (j = 0; j < second.length; j++) {
        afterConcatenation[index + j] = second[j];
    }
    return afterConcatenation;
}

console.log(concatenation(firstArrayOfNumbers, secondArrayOfNumbers));
