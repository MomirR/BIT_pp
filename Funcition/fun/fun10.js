// Write a program that calculates the number of appearances of a letter a in a given string. 
// Modify the program so it calculates the number of both letters a and A.
// Input: appearance
// Result: 3
var string = "appearance";
function calculates(string) {
    var rez = "";
    for (i = 0; i < string.length; i++)
        if (string[i] === "a" || string[i] === "A") {
            rez += string[i];
        }
    return rez.length;
}

var rez = calculates(string);
console.log(rez);
