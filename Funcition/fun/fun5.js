// Write a program that draws a square of a given size. For example,  
//if the size of square is 5 the program should draw: 
// *****
// *    *
// *    *
// *    *
// *****
function write(size) {
    var star = "*";
    var space = " ";
    var rez = "";
    /*STAMPANJE PRVOG REDA*/
    for (i = 0; i < size; i++) {
        rez += star;
    }
    rez = rez + '\n';
    /*STAMPANJE REDOVA SA PRAZNINAMA*/
    for (i = 0; i < size - 2; i++) {
        //for (i = 0; i < size - 3; i++) {
        rez += star;
        for (j = 0; j < size - 2; j++) {
            rez += space;
        }
        rez += star;

        //}
        rez = rez + '\n';
    }
    /*STAMPANJE ZADNJEG REDA*/
    for (i = 0; i < size; i++) {
        rez += star;
    }
    // console.log(rez);
    return rez;
}
var rez = write(10);
console.log(rez);

