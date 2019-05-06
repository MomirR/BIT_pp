// Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) 
// in the array and create a new string from them. Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

// Output: AnStJoJoDaMa

var array = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];

function concatenation(array) {
    var text = [];
    var finalText = "";
    for (i = 0, j = 0; i < array.length; i++) {
        if (typeof array[i] === "string") {
            if (array[i].length >= 2) {
                text[j] = array[i][0] && array[i][1];
                j++;
            }
        }
        // console.log(array);
    }
    return finalText;
}
var res = concatenation(array);
console.log(res);

