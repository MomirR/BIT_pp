// Write a program that checks if a given number is a three digit long number.
// Input: 567
// Result: Yes
function calculates(a) {
    var rez;
    if (a <= 999 && a >= 100) {
        rez = "Yes"
    } else {
        rez = "No"
    }
    return rez;
}

console.log(calculates(567));
