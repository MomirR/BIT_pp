// Write a program that draws a horizontal chart representing three given values. 
//For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *
function write(a, b, c) {
    var star = "*";
    var rez = "";
    for (i = 0; i < a; i++) {
        rez += star;
    }
    rez += "\n";
    for (i = 0; i < b; i++) {
        rez += star;
    }
    rez += "\n";
    for (i = 0; i < c; i++) {
        rez += star;
    }
    return rez;
}
var test = write(5, 3, 7);
console.log(test);

