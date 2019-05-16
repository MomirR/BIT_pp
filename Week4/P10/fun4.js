// Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
// Input: pera peric
// 	Output: pera.peric@gmail.com
var name = "Milica";
var surname = "Manojlovic";


var input = (function (name, surname) {

    (function sug() {
        var suggests = "";
        suggests = name + "." + surname + "@gmail.com";
        console.log(suggests);

    })();

})(name, surname);

