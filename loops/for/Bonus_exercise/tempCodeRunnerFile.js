var niz = [2, 4, -2, 7, -2, 4, 2];
var msg = "";
var a = true;

for (i = 0, j = niz.length -1; i < niz.length, j > i, a === true ;  i++, j--) {
    if (niz[i] === niz[j] ) {
        msg = "The array is symmetric.";  
        console.log(msg);
     }else {
        msg = "The array is not symmetric."; 
        a = false;
        console.log(msg);
     }
}
// console.log(msg);
