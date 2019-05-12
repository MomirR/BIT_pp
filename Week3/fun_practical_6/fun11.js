// Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. 
// If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.
var allDt = [3, 5, 24, "Hello", "World", undefined, NaN, 983];  //all data types;

//returns last element
var lastEle = function (allDt) {
    var allDtLength = allDt.length;
    var lastEle = allDt[allDtLength - 1];
    return lastEle;
}

// returns first element
var firstEle = function (allDt) {
    var firstEle = allDt[0];
    return firstEle;
}

// returns odd or even
var oddOrEven = function (allDt) {
    var allDtLength = allDt.length;
    var odd;
    var even;
    if (allDtLength % 2 !== 0) {
        odd = false;
        return odd;
    } else {
        even = true;
        return even;
    }
}

//returns middle element
var middleEle = function (allDt) {
    allDtLength = allDt.length;
    var index;
    if (oddOrEven(allDt) === true) {
        index = allDtLength / 2;
        return allDt[index];
    } else if (oddOrEven(allDt) === false) {
        index = (allDtLength - 1) / 2;
        return allDt[index];
    }
}

//MAIN FUNCTION
function finalTask(allDt) {
    allDtLength = allDt.length;
    var res = [];
    if (oddOrEven(allDt) === true) {
        //even
        res[0] = firstEle(allDt);
        res[1] = lastEle(allDt);
        return res;
    } else if (oddOrEven(allDt) === false) {
        //odd
        res[0] = firstEle(allDt);
        res[1] = middleEle(allDt);
        res[2] = lastEle(allDt);
        return res;
    } else {
        //empty string
        return res;
    }
}
console.log(finalTask(allDt));

