// Write a program that calculates the maximum of two given numbers. 
// Input: 4 8
// Result: 8
function calculates(a, b) {
    var rez;
    if (a > b) {
        rez = a;
    } else {
        rez = b;
    }
    return rez;
}
var rez = calculates(4, 8);
console.log(rez);

