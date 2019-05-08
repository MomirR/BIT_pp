// var dim = 4;
// for (var i = 0; i < dim; i++) {

//     var row = "";
//     for (var j = 0; j < dim; j++) {
//         if (i === 0 || i === dim - 1) {
//             row += '* ';
//             continue;
//         }
//         if (j === 0 || j === dim - 1) {
//             row += '* ';
//             continue;
//         }
//         row += "  ";
//     }
//     console.log(row);
// }


// var dim = 8;
// for (var i = 0; i < dim; i++) {

//     var row = "";
//     for (var j = 0; j < dim; j++) {
//         if (i === dim - 1 || j === 0 || j === i) {
//             row += '* ';
//             continue;
//         }
//         printingSpace();
//     }
//     console.log(row);
// }

// function printingSpace() {
//     row += "  ";
// }

var dimension = 37;
var length = (dimension + 1) / 2;
for (var i = 0; i < length; i++) {

    var row = "";
    for (j = 0; j < length; j++) {
        if (i > j || j > (length - 1 - i)) {
            row += "  ";
        } else {
            row += "* ";
        }
    }
    console.log(row);
}





