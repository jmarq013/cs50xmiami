/*
The Pluralizer

Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".

Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

// write your solution here...
function pluralize(noun, number)
{
  var noun;

  if (number != 1)
  {
    if (noun == "goose") {
      noun = "geese";
    }
    else if (noun == "sheep") {
      noun = "sheep";
    }
    else if (noun == "mouse") {
      noun = "mice";
    }
    else {
      noun += 's';
    }
  }

  var string = number + " " + noun;
  return string;
}

console.log(pluralize("cat", 5));
console.log(pluralize("dog", 1));
console.log(pluralize("computer", 10));
console.log(pluralize("goose", 1));
console.log(pluralize("goose", 4));
console.log(pluralize("sheep", 2));
console.log(pluralize("mouse", 20));
