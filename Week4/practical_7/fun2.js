// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.

// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

function calculateDogAge(humansAge, dogsAge) {
    var dogAge = humansAge * 7;
    if (arguments.length > 1) {
        var humansAge = dogsAge / 7;
        return humansAge;
    }

    return dogAge;
}
console.log("Your doggie is " + calculateDogAge(7, 47) + " years old in dog years!");
