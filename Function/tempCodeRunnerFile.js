var star = "*";
var space = "";
function write(star, space, size) {
    var rez = "";
    /*STAMPANJE PRVOG REDA*/
    for (i = 0; i < size; i++) {
        rez += star;
    }
    rez = rez + '\n';
    /*STAMPANJE REDOVA SA PRAZNINAMA*/
    for (i = 0; i < size - 2; i++) {
        for (i = 0; i < size - 3; i++) {
            rez += star;
            for (j = 0; j < size - 2; i++) {
                rez += space;
            }
        }
        rez = rez + '\n';
    }
    /*STAMPANJE ZADNJEG REDA*/
    for (i = 0; i < size; i++) {
        rez += star;
    }
    return rez;
}
var rez = write(star, space, 5);
console.log(rez);