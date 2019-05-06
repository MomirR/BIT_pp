// (skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
var array = [13, 11, 15, 5, 6, 1, 8, 12];

function sortingMultipliedBy2(array) {
    var multipliedArray = [];
    var sortedArray = [];
    for (i = 0; i < array.length; i++) {
        multipliedArray[i] = array[i] * 2;
        sortedArray[i] = multipliedArray[i];
    }
    // console.log(sortedArray);
    // multipliedArray = [ 26, 22, 30, 10, 12, 2, 16, 24 ];
    // sortedArray = [ 26, 22, 30, 10, 12, 2, 16, 24 ];
    // sortedArray = [ 22, 22, 30, 10, 12, 2, 16, 24 ];
    for (i = 0, j = 1; i < multipliedArray.length; i++,j++) {
        if ( sortedArray[j] < multipliedArray[i]) {
            // 22 < 26     i - 0
            sortedArray[i] = sortedArray[j];
        }else {
            
        }
    }
    console.log(sortedArray);
    // for (j = 0, k = 1; j < multipliedArray.length; j++ , k++) {
    //     if (sortedArray[j] < multipliedArray[k]) {
    //         sortedArray[j] = multipliedArray[k];
    //     }
    // }
}

var rez = sortingMultipliedBy2(array);
console.log(rez);
