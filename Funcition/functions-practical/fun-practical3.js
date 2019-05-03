// Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).
// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"
var str = "My random string";
var str2 = "JS";
var n = 10;
function printing(str, str2, n) {
    var newText = "";
    var strLength = str.length;
    for (i = 0; i < n; i++) {
        newText = str;
        newText = str2;
        console.log(str2);
    }
    return str;
}
var rez = printing(str, str2, n);
console.log(rez);
