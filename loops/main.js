//PRVI ZADATAK
//Write a for loop that will iterate from 0 to 15. For each iteration, 
//it will check if the current number is odd or even, and display a message to the screen.

// for (var i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " Even");
//     } else {
//         console.log(i + " Odd");
//     }
// }
//DRUGI ZADATAK
//Write a program to sum the multiples of 3 and 5 under 1000.
// var sum = 0;
// for (var i = 0; i < 1000; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         sum += i;
//     }
// }
// console.log(sum);
//TRECI ZADATAK
//Write a program to compute(racuna zbir i proizvod niza koji sadrzi cele brojeve)the sum and product of an array of integers.
// var a = [3, 5, 7, 8, 12, 54]
// var sum = 0;
// var product = 1;
// for (var i = 0; i < a.length; i++) {
//     sum += a[i];
//     product = product * a[i];

// } console.log(sum, product);
//CETVRTI ZADATAK
//Write a program which prints the elements of the following array as a single string.
// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
// var rez = "";
// for (var i = 0; i < x.length; i++) {
//     rez = rez + x[i];
// }
// console.log(rez);
//ZADATAK SEST
//Write a program that outputs the sum of squares of the first 20 numbers. 
// var rez = 1;
// for (var i = 1; i < 20; i++) {
//     rez += i * i;
// }
// console.log(rez);
//ZADATAK SEDAM
// Write a program that computes average marks of the following students. 
// Then use this average to determine the corresponding grade. 
var niz = [80, 77, 88, 95, 68];
var sum = 0;
var avg;
for (var i = 0; i < niz.length; i++) {
    sum += niz[i];
}
avg = sum / niz.length;
if (avg < 60) {
    console.log("F");
} else if (avg < 70 && avg > 60) {
    console.log("D");
} else if (avg < 80 && avg > 70) {
    console.log("C");
} else if (avg < 90 && avg > 80) {
    console.log("B");
} else if (avg <= 100 && avg > 90) {
    console.log("A");
}





















//3.zbir + proizvod
//4.
//8.broj/fizz -- broj/vaz