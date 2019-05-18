// Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

// i[0] --> ********* duzina reci + 4charactera = maxLength. 
// i[maxLength - 1] --> lastLine

var strings = ["Hello", "World", "in", "a", "frame"];
var figure = "";
var star = "*";

function findingLength(strings) {
    var maxLength = strings[0].length;
    for (i = 0; i < strings.length; i++) {
        for (j = 0; j < strings[i].length; j++) {
            if (maxLength < strings[i].length) {
                maxLength = strings[i].length;
            }
        }
    }
    var lineLength = (maxLength + 4);
    return lineLength; //9
}

function printingStars(lineLength) {
    var figure = "";
    var star = "*";
    for (i = 0; i < lineLength; i++) {
        figure += star;
    }
    figure += "\n";
    return figure;
}

function finalFigure(lineLength, printStars) {
    var final = "";
    //prvi red zvezdica
    final += printStars(lineLength);

    for (i = 0; i < strings.length; i++) {
        final += "* " + strings[i] + " *" + "\n";
    }
    //poslednji red zvezdica
    final += printStars(lineLength);

    return final;
}
console.log(finalFigure(findingLength(strings), printingStars));
// var strings = ["Hello", "World", "in", "a", "frame"];
function stringLength(strings) {
    var maxLength = [];
    stringLength(strings);

    for (i = 0; i < strings.length; i++) {
        for (j = 0; j < strings[i].length; j++) {
            
            maxLength[i] = strings[i].length;
        }
    }
    return maxLength;
}
// console.log(stringLength(strings));

// 9 - maxLength = sum; / 2;

function calculating(stringLength) {
    var sum;
    sum = (stringLength - ) / 2;
    sum = Math.floor(sum);
    return sum;
}
calculating(findingLength(strings), stringLength(strings), );

