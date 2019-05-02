// Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3
var niz = [2, 4, 7, 8, 7, 7, 1];
var e = 7;
function calculates(niz, e) {
    var rez = [];
    var j = 0;
    for (i = 0; i < niz.length; i++) {
        if (niz[i] === e) {
            rez[j] = niz[i]
            j++;
        }
    }
    return rez.length;
}
var rez = calculates(niz, e);
console.log(rez);
