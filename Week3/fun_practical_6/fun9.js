// Write a function to find the median element of array.

var allDataTypes = [3, 5, 24, "Hello", "World", undefined, NaN, 983, 2455];

var findMedElement = function (allDataTypes) {
    allDataTypesLength = allDataTypes.length;
    var index;
    var res = "";
    if (allDataTypesLength % 2 !== 0) {
        index = (allDataTypesLength - 1) / 2;
    } else {
        index = allDataTypesLength / 2;
    }

    for (i = 0; i < allDataTypesLength; i++) {
        if (index === i) {
            res = allDataTypes[i];
        }
    }
    return res;
}
console.log(findMedElement(allDataTypes));


