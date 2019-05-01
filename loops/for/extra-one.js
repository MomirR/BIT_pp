// Write a program that checks if a given element e is in the array a. 

var e = 3; // Input:
var a = [5, -4.2, 3, 7];
var y = "";
var n = "";
// Output: yes

for (var i = 0; i < a.length; i++) {
    if (e === a[i]) {
        y = "Yes";
    } else {
        n = "No";
    }
}
if (y === "Yes") {
    console.log(y);
} else {
    console.log(n);
}


