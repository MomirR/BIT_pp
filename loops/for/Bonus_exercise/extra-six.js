// Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
var niz = [2, 4, -2, 7, -2, 4, 2];
var msg = "";
var a = true;

for (i = 0, j = niz.length -1; i < niz.length, j > i, a === true ;  i++, j--) {
    if (niz[i] === niz[j] ) {
        msg = "The array is symmetric.";  
        
     }else {
        msg = "The array is not symmetric."; 
        a = false;
       
     }
}
 console.log(msg);
