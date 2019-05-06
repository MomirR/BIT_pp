// Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. 
// The result should then be multiplied by 12.5 and displayed in console.
// Output: 2350000

function calculating() {
    var even = 0;
    var odd = 0;
    var sum = 0;
    for (i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            even += i;

        }
    }
    for (i = 1; i <= 500; i++) {
        if (i % 2 !== 0) {
            odd += i;
        }
    }
    sum = (even - odd) * 12.5;

    return sum;
}

var res = calculating();
console.log(res);
