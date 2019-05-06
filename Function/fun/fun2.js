// Write a program that checks if a given number is odd.
// Input: 56
// Result: No
function calculates(a) {
    var rez;
    if (a % 2 === 0) {
        rez = "Even"
    } else {
        rez = "Odd"
    }
    return rez;
}
console.log(calculates(56));
