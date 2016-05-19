/*
Your top choices

Create an array to hold your top choices (colors, presidents, whatever).
- For each choice, log to the screen a string like: "My #1 choice is blue."

- Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
  picking the right suffix for the number based on what it is.
*/

// write your solution here...
var colors = ["red", "black", "white", "orange", "blue", "purple", "green", "turquoise", "pink", "brown", "lime", "magenta", "teal"];

for (var i = 0; i < colors.length; i++) {
  var counter = i + 1;
  var string = counter.toString();
  var length = string.length;
  var lastDigit = string[length - 1];
  var suffix = "";

  if ((lastDigit == "1") && (string != "11")) {
    suffix = "st";
  } else if ((lastDigit == "2") && (string != "12")) {
    suffix = "nd";
  } else if ((lastDigit == "3") && (string != "13")) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  console.log("My " + counter + suffix + " choice is " + colors[i]);
}
