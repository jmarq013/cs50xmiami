/*
The Age Calculator

Forgot how old someone is? Calculate it!

- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

// write your solution here...
var currentYear = 2016;
var birthYear = 1989;
var ages = [currentYear - birthYear - 1, currentYear - birthYear];

console.log("They are either " + ages[0] + " or " + ages[1]);
