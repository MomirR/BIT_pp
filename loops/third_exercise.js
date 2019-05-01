//THIRD EXERCISE
//Write a program to compute (racuna zbir i proizvod niza koji sadrzi cele brojeve) the sum and product of an array of integers.
var a = [3, 5, 7, 8, 12, 54];
var sum = 0;
var product = 1;
for (var i = 0; i < a.length; i++) {
    sum += a[i];
    product = product * a[i];
}
console.log(sum, product);

//Napisi program koji racuna zbir i proizvod od niza brojeva