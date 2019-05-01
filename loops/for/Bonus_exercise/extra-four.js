// Write a program that finds the first element larger than minimum and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2
//pronaci prvi najblizi broj minimuma i printuj njegovu vrednost
var niz = [4, 2, 2, -1, 6];
var min = 0;
var max = 1000;
for (i = 0; i < niz.length; i++) {
    if (niz[i] < 0) {
        min = niz[i];
    }
}
for (i = 0; i < niz.length; i++) {
    if (niz[i] > min && niz[i] <= max) {
        max = niz[i];
    } 
}

console.log(max);
