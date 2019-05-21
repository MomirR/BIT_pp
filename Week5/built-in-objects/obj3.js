// Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

// “Webmaster” -> “abeemrstw”

var someString = new String("Webmaster");

function lettersInAlphabeticalOrder(string) {
    string = string.toLowerCase().split('').sort().join();
    console.log(string);
    return string;
}
console.log(lettersInAlphabeticalOrder(someString));