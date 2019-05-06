// Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) 
// in the array and create a new string from them. Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

// Output: AnStJoJoDaMa

var array = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];

function concatenation(array) {
    var text = [];
    var finalText;
    for (i = 0; i < array.length; i++) {
        if (typeof array[i] === "string") {
            text[i] += array[i];
            if (text[i] >= 2) {
                finalText += text;
            }
        }
    }
    return finalText;
}

var res = concatenation(array);

