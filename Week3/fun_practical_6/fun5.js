// Write a program that prints a multiplication table for numbers up to 12.

var multiplicationTableUpTo12 = function () {
    var res = "";
    for (i = 1; i < 13; i++) {
        for (j = 1; j < 13; j++) {
            res += "-"+ i * j;
        }
        res += "\n";
    }
    return res;
}
console.log(multiplicationTableUpTo12());