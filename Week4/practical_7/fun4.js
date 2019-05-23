
// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFahrenheit(celsius) {
    var parsed = parseFloat(celsius);
    var fahrenheit = (parsed - 32) / 1.8;
    var string = "";
    string += celsius + "°C is " + fahrenheit + "°F";
    return string;
}
console.log(celsiusToFahrenheit(50));

function fahrenheitToCelsius(fahrenheit) {
    var x = fahrenheit * 9 / 5 + 32;
    var celsius = Math.round(x);
    var string = "";
    string += fahrenheit + " °F is " + celsius + " °C.";
    return string;
}
console.log(fahrenheitToCelsius(10));
