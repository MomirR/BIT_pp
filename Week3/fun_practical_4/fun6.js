// Write a program that checks if a given array is symmetric.
// An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

var numbers = [2, 4, -2, 7, -2, 4, 2];

function checkingIfIsSymmetric(numbers) {
    var numbersLength = numbers.length;
    var lastIndex = numbersLength - 1;
    var res = "";

    for (i = 0; i < numbersLength; i++) {
        for (j = lastIndex; j > 0; j--) {
            if (numbers[i] === numbers[j]) {
                res = "The array is symmetric";
            } else {
                break;
            }

            if (numbers[0] !== numbers[lastIndex]) {
                res = "he array is not symmetric";
                break;
            }
        }

    }
    return res;
}
console.log(checkingIfIsSymmetric(numbers));
