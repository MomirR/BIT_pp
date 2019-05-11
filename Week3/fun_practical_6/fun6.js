// Write a function to input temperature in Centigrade and convert to Fahrenheit.

var temp = 24;
var centigradeToFahrenheit = function(temp){
    var res;
    var parsed = parseFloat(temp);
    res =(parsed-32)/1.8;
    return res;
}

console.log(centigradeToFahrenheit(temp));
