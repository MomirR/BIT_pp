// Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

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
    var emptySpaces;
    var space = "";
    
    //prvi red zvezdica
    final += printStars(lineLength);

    //ostali redovi
    for (i = 0; i < strings.length; i++) {
        emptySpaces = lineLength - strings[i].length - 4;
        for (j = 0; j < emptySpaces; j++) {
            space += " ";            
        }
        final += "* " + strings[i] + space + " *" + "\n";
        space = "";
    }
    
    //poslednji red zvezdica
    final += printStars(lineLength);

    return final;
}
console.log(finalFigure(findingLength(strings), printingStars));

