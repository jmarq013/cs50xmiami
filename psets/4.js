/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...
var celsius = 40;
var fahrenheit = celsius * 1.8 + 32;
console.log(celsius + "°C is " + fahrenheit + "°F");

var fahrenheit = 40;
var celsius = (fahrenheit - 32) / 1.8;
console.log(fahrenheit + "°F is " + celsius.toFixed(2) + "°C");
