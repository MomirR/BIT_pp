// Write a program that concatenates a given string given number of times. 
// For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 
var string = "abc";
var howMuch = 4;
function calculates(string, howMuch) {
    var rez = "";
    for (i = 0; i < howMuch; i++) {
        rez += string;
    }
    return rez;
}
var rez = calculates(string, howMuch);
console.log(rez);
