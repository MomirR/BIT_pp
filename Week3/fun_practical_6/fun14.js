// The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). 
// Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// Starvation: less than 15
// Anorexic: less than 17.5
// Underweight: less than 18.5
// Ideal: greater than or equal to 18.5 but less than 25
// Overweight: greater than or equal to 25 but less than 30
// Obese: greater than or equal to 30 but less than 40
// Morbidly obese: greater than or equal to 40

var weight = 133.3;
var height = 1.9;

function bmi(weight, height) {
    var BodyMI = weight / (height * height);
    if (BodyMI < 15) {
        console.log("Starvation: less than 15");
    } else if (BodyMI >= 15 && BodyMI < 17.5) {
        console.log("Anorexic: less than 17.5");
    } else if (BodyMI >= 17.5 && BodyMI < 18.5) {
        console.log("Underweight: less than 18.5");
    } else if (BodyMI >= 18.5 && BodyMI < 25) {
        console.log("Ideal: greater than or equal to 18.5 but less than 25");
    } else if (BodyMI >= 25 && BodyMI < 30) {
        console.log("Overweight: greater than or equal to 25 but less than 30");
    } else if (BodyMI >= 30 && BodyMI < 40) {
        console.log("Obese: greater than or equal to 30 but less than 40");
    } else if (BodyMI >= 40) {
        console.log("Morbidly obese: greater than or equal to 40");
    }
}

bmi(weight, height);
