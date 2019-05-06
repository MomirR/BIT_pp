// Find the min and max element in the following array and switch their places. Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
var array = [3, 500, 12, 149, 53, 414, 1, 19];

function switchingMinMax(array) {
    var maxElement = 0;
    var minElement = array[0];
    var positionMax;
    var positionMin;
    var newArray = [];
    //Searching for max element and position
    for (i = 0; i < array.length; i++) {
        if (array[i] > maxElement) {
            maxElement = array[i];
            positionMax = i;
        }
    }
    //Searching for min element and position
    for (k = 0; k < array.length; k++) {
        if (array[k] < minElement) {
            minElement = array[k];
            positionMin = k;
        }
    }
    //Making new array
    for (p = 0, m = 0; p < array.length; p++, m++) {
        newArray[m] = array[p]
        if (p === positionMax) {
            newArray[m] = minElement;
        }else if(p === positionMin){
            newArray[m] = maxElement;
        }
    }
    // console.log(newArray);
    return newArray;
}
var rez = switchingMinMax(array);
console.log(rez);
