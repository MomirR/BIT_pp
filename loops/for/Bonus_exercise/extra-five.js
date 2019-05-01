// Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16
//sabira zbir pozitivnih brojeva
var niz = [3, 11, -5, -3, 2];
var sum = 0;
for (i = 0; i < niz.length; i++) {
    if (niz[i] > 0 ) {
        sum += niz[i];
    }
}
console.log(sum);
