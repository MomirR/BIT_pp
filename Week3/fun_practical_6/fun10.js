// Write a function to find the element that occurs most frequently.
var numbers = [2, 45, 8, 2, 11, 97, 5, 5, 5, 5, 5, 2];

var mostFreqElement = function (numbers) {
    var mostFreqEle = numbers[0];
    var numberOfOccurrences = 1;
    var counter = 0;
    for (i = 0; i < numbers.length; i++) {
        counter = 0;
        for (j = 0; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                value = numbers[i];
                counter ++;
            }
            if (numberOfOccurrences < counter) {
                numberOfOccurrences = counter;
                mostFreqEle = numbers[i];
            }
        }
    }
    return mostFreqEle;
}

console.log(mostFreqElement(numbers));