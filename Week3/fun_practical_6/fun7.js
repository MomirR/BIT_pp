// Write a function to find the maximum element in array of numbers. 
// Filter out all non-number elements.
var testingArray = [3, 5, 24, "Hello", "World", undefined, NaN, 983];

function filterNonNumber(testingArray) {
    var numbers = [];
    var testingArrayLength = testingArray.length;
    for (i = 0, j = 0; i < testingArrayLength; i++) {
        if (typeof testingArray[i] && isNaN(testingArray[i])) {
            numbers[j] = testingArray[i];
            j++;
        }

    }

}