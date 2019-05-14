// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(x, y, z, n) {
    console.log("You will be a " + x + " in " + y + " , and married to " + z + " with " + n + " kids.");
}
tellFortune("doctor", "Maldivi", "Pera", 3);
tellFortune("model", "Belgrade", "Momir", 2);
tellFortune("dentist", "Helena", "Germany", 1);


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
        return humansAge
    }

    return dogAge;
}
console.log("Your doggie is " + calculateDogAge(7, 47) + " years old in dog years!");

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.

// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amountPerDay) {
    var theEnd = 85;
    var amountLifetimeSupply = (theEnd - age) * amountPerDay * 365;
    return amountLifetimeSupply;

}
console.log(calculateSupply(30, 100));