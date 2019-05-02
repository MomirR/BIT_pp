// Write a program that calculates the sum of odd elements of a given array. 
// Input: [5, 6, 1, 2, 3, 12]
// Result: 9
//racuna zbir neparnih od niza

function calculates(niz) {
    var rez = 0;
    for (i = 0; i < niz.length; i++) {
        if (niz[i] % 2 !== 0) {
            rez += niz[i];
        }
    }
    return rez;
}
var niz = [5, 6, 1, 2, 3, 12];
var rez = calculates(niz);
console.log(rez);
