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
// 
var strings = ["Hello", "World", "in", "a", "frame"];
var figure = "";
var star = "*";

function stringMaxLength(strings) {
    var maxLength = strings[0].length;
    for (i = 0; i < strings.length; i++) {
        for (j = 0; j < strings[i].length; j++) {
            if (maxLength < strings[i].length) {
                maxLength = strings[i].length;
            }
        }
    }
    return maxLength; //5
}

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
    for (i = 0; i < lineLength; i++) {
        figure += star;
    }
    figure += "\n";
    return figure;
}
//console.log(printingStars(findingLength(strings)));

function finalFigure(lineLength) {
    var j = 0
    var final = "";
    var emptyString = " ";
    var spacing;
    final += printingStars(findingLength(strings));

    for (i = 0; i < (strings.length - 1); i++) {
        for (j = 0; j < strings[j].length; j++) {
            spacing = stringMaxLength(strings) - strings[j].length;
            for (k = 0; k < spacing; k++) {
                final += emptyString;
            }
        }
        final += + strings[j] +
        if (i === 0 || i === strings.length - 1) {
            final += printingStars(findingLength(strings));
        } else {
            final += "* " + strings[j] + " *" + "\n";
            j++;
        }
    }
    return final;
}
console.log(finalFigure(findingLength(strings)));
//maxDuzina reci - trenutna duzina reci;
// //
//  if (i === 0 || i === strings.length + 1) {
//             final += printingStars(findingLength(strings));
//         } else {
//             final += "* " + strings[j] + " *" + "\n";
//             j++;
//         }