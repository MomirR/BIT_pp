// Write a function to find the maximum element in array of numbers. 
// Filter out all non-number elements.
var allDataTypes = [3, 5, 24, "Hello", "World", undefined, NaN, 983];

function filterNonNumber(allDataTypes) {
    var numbers = [];
    var allDataTypesLength = allDataTypes.length;
    for (i = 0, j = 0; i < allDataTypesLength; i++) {
        if (typeof allDataTypes[i] === "number" && isFinite(allDataTypes[i])) {
            numbers[j] = allDataTypes[i];
            j++;
        }
    }
    return numbers;
}

console.log(filterNonNumber(allDataTypes));
