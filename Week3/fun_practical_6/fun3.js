// Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
var dimension = 2;
var arrayOfElements = [1, 2, 3, 4, 5, 6];

var rotating = function (dimension) {
    var afterRotation = [];
    var arrayOfElementsLength = arrayOfElements.length;
    var index;
    for (i = 0, j = 0; i < arrayOfElementsLength; i++) {
        if (dimension <= i) {
            afterRotation[j] = arrayOfElements[i];
            index = j;
            j++;
        }
    }
    var someLength = arrayOfElementsLength - j;

    for (k = 0; k < someLength; k++) {
        afterRotation[j] = arrayOfElements[k];
        j++;
    }
    return afterRotation;
}
console.log(rotating(dimension));