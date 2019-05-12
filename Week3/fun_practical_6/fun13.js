// Write a function to find all the numbers greater than the average.
var allDt = [3, 5, 24, "Hello", "World", undefined, NaN, 983, 23, 11, 56];  //all data types;

//returns only numbers
var filterNonNumber = function (allDt) {
    var numbers = [];
    var allDtLength = allDt.length;
    for (i = 0, j = 0; i < allDtLength; i++) {
        if (typeof allDt[i] === "number" && isFinite(allDt[i])) {
            numbers[j] = allDt[i];
            j++;
        }
    }
    return numbers;
}

//returns average number
var calcAverage = function (allDt) {
    var sum = 0;
    var allDtLength = allDt.length;
    for (i = 0; i < allDtLength; i++) {
        sum += allDt[i];
    }
    sum = sum / 2;
    return sum;
}

//returns all numbers greater then average
var greaterThenAverage = function (allDt) {
    var average = calcAverage(filterNonNumber(allDt));
    var finalRes = [];
    var allDtLength = allDt.length;
    for (i = 0, j = 0; i < allDtLength; i++) {
        if (allDt[i] > average) {
            finalRes[j] = allDt[i];
            j++;
        }
    }
    return finalRes;
}
console.log(greaterThenAverage(allDt));
