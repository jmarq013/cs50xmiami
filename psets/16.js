/*
The World Translator

Write a function named helloWorld that:
- takes 1 argument, a language code (e.g. "es", "de", "en")
- returns "Hello, World" for the given language, for at least 3 languages.
  It should default to returning English.

Call that function for each of the supported languages
and log the result to make sure it works.
*/

// write your solution here...
function helloWorld(language)
{
  switch (language ) {
    case "es": return "Hola, Mundo";
    case "de": return "Hallo, Welt";
    case "ch": return "你好，世界"
    default: return "Hello, World";
  }
}

console.log(helloWorld("es"));
console.log(helloWorld("de"));
console.log(helloWorld("ch"));
console.log(helloWorld("en"));
