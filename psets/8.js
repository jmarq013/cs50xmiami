/*
Verbing

Create a function called verbing.

It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged.

For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'

*/

function verbing(word) {
  // write your solution here...
  var string = word;
  var length = word.length;
  var slice = word.slice(-3);

  if (slice == "ing") {
    string += "ly";
  }
  else if (word.length >= 3) {
    string += word[length - 1];
    string += "ing";
  }
  else if (word.length < 3) {
    return string;
  }

  return string;
}

console.log(verbing("swim"));
console.log(verbing("swimming"));
console.log(verbing("go"));
