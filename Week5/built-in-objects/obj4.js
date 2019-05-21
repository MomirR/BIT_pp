// Write a function to alphabetize words of a given string.
// Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"

var string = new String("Republic Of Serbia");

function alphabetize(newString) {
    var k = 1;
    var result = [];
    newString = newString.split(" ");
    for (i = 0; i < newString.length; i++) {
        for (j = 1; j < newString[i].length;) {
            result[j] = newString[i][j];

        }
        newString[i][k] = result.sort();
        k++;
    }
    console.log(newString);

}

console.log(alphabetize(string));

