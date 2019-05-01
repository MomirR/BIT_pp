//n=1
*

//n=2
**
**

//n=3
***
* *
***

//n=4
****
*  *
*  *
****

var n = 3
var stars = "";

//i = 1 stars = *
//i = 2 stars = **
//i = 3 stars = ***

for (var i = 0; i <= n; i++) {
    stars = stars + '*'
}


****
*  *
*  *
****

var n = 4;
for (var row = 1; row <= n; row++) {
    //prvi i poslednji red
    if (row == 1 || row == n) {
        //iscrtati n zvezdica
        var stars = '';
        for (var i = 1; i <= n; i++) {
            stars = stars + '*';
        }
        console.log(stars);
    } else {
        //jedna zvezda
        // n - 2 belina
        //jedna zvezda
        var line = '';
        line = line + '*'
        for (i = 1; i <= n - 2; i++) {
            line = line + ' ';
        }
        line = line + '*'
        console.log(line);
    }
}