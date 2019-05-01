// Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3
//trazi minimum iz niza i printuje njenu vrednosti i indexni broj
var niz = [4, 2, 2,-1, 6];
for (i = 0; i < niz.length; i++) {
        if (niz[i] < 0) {
            console.log(niz[i]);            
        }
}