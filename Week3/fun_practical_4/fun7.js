// Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]
var firstArray = [4, 5, 6, 2];
var secondArray = [3, 8, 11, 9];

function intertwining(first,second) {
    var result = [];
    for (i = 0; i < first.length; i++) {
        result[i * 2] = first[i];
        result[i * 2 + 1] = second[i];        
    }
    return result;
}

console.log(intertwining(firstArray,secondArray));
