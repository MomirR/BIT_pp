/* --------------------------- */

/* original code */

var x;
console.log(x);


/* the interpreter's way */
var x;

console.log(x);
x = 10;

/* --------------------------- */

/* original code */

var x = 11;
var y = 5;
console.log(x + y);

/* the interpreter's way */

var x;
var y;

x = 11;
y = 5;
console.log(x + y);


/* --------------------------- */

/* original code */
var x = 10;
console.log(x + y);
var y = 5;
console.log(x + y);


/* the interpreter's way */
var x;
var y;

x = 10;
console.log(x + y);
y = 5;


/* --------------------------- */


/* original code */
console.log(x + y);
var x = 10;
var y = 5;
console.log(x + y);


/* the interpreter's way */
var x;
var y;

console.log(x + y);
x = 10;
y = 5;
console.log(x + y);


/* --------------------------- */

var x = 'abc';
//'abc' + undefined = 'abcundefined'
console.log(x + y);
var y = 'efg';


/* --------------------------- */

console.log(x + y);
var x = 'abc';
var y = 'efg';



/* --------------------------- */
/* hoisting and function declaration */

/* original code */
var x = 10;
var y = 5;

sum(x, y);

function sum(a, b) {
    console.log(a + b);
}

/* the interpreter's way */
function sum(a, b) {
    console.log(a + b);
}

var x;
var y;

x = 10;
y = 5;

sum(x, y);



/* --------------------------- */
/* The hoisting happens in the local scope as well.  */

/* original code */
function test(x, y) {

    var result = x + y + z;
    var z = 10;

    console.log(result);
}

test(5, 11);


/* the interpreter's way */
function test(x, y) {
    var result;
    var z;

    result = x + y + z;
    z = 10;

    console.log(result);
}


test(5, 11);