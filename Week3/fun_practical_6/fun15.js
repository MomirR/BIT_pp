// Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

//  i === 0 || i === lastIndex || j === 0 || j === lastIndex || TRUE res += "*"; 
//  FALSE res +=  " " + strings[k] + " ";

var strings = ["Hello", "World", "in", "a", "frame"];

var printStrings = function (strings) {
    var k = 0; //counter for array
    var res = "";
    var star = "*";
    var stringsLength = strings.length;
    var lastIndex = stringsLength - 1;
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (i !== 0 || i !== 8 || j !== 0 || j !== 8) {
                res += " " + strings[k] + " ";
                k++;
                continue;
            }else{
                res += star;
                if (j === 8) {
                    res += "\n";
                }
            }
        }
    }
    return res;
}
console.log(printStrings(strings));