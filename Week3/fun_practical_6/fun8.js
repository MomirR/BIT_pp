// Write a function to find the maximum and minimum elements. Function returns an array.

var allDataTypes = [3, 5, 24, "Hello", "World", undefined, NaN, 983];

var filterNonNumber = function (allDataTypes) {
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

function findingMinMax(NonNumberArray) {
    var min = NonNumberArray[0];
    var max = NonNumberArray[0];
    var minMax = [];
    NonNumberArrayLength = NonNumberArray.length;
    for (i = 0; i < NonNumberArrayLength; i++) {
        if (NonNumberArray[i] < min) {
            min = NonNumberArray[i];
        } else if (max < NonNumberArray[i]) {
            max = NonNumberArray[i];
        }
    }
    minMax[0] = min;
    minMax[1] = max;
    return minMax;
}

console.log(findingMinMax(filterNonNumber(allDataTypes)));


