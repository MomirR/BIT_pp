//FOURTH EXERCISE
//Write a program which prints the elements of the following array as a single string.
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var rez = "";
for (var i = 0; i < x.length; i++) {
    rez += x[i];
}
console.log(rez);
