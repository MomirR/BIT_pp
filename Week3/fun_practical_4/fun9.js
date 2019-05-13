// Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

var numbers = [4, 6, 2, 8, 2, 2];
var deleteThisElement = 2;

function deleteElement(transformed, deleteThisElement) {
    for (i = 0; i < transformed.length; i++) {
        if (deleteThisElement === transformed[i]) {
            transformed.splice(i);
        }
    }
    return transformed;
}
console.log(deleteElement(copyingTheArray(numbers), deleteThisElement));

//Can copy any array
function copyingTheArray(firstArray) {
    var copied = [];
    var firstArrayLength = firstArray.length;
    for (i = 0; i < firstArrayLength; i++) {
        copied[i] = firstArray[i];
    }
    return firstArray;
}


