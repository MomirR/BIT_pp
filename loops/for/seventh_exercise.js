//SEVENTH EXERCISE
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
} else if (avg => 60 && avg < 70 ) {
    console.log("D");
} else if (avg => 70 && avg < 80 ) {
    console.log("C");
} else if (avg => 80 && avg < 90 ) {
    console.log("B");
} else if (avg => 90 && avg <= 100) {
    console.log("A");
}


