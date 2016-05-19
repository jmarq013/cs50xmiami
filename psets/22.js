/*
The Reading List

Keep track of which books you read and which books you want to read!

- Create an array of objects, where each object describes a book and has
  properties for the title (a string), author (a string),
  and alreadyRead (a boolean indicating if you read it yet).

- Iterate through the array of books. For each book, log the book title
  and book author like so: "The Hobbit by J.R.R. Tolkien".

- Now use an if/else statement to change the output depending on whether you
  read it yet or not. If you read it, log a string like
  'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string
  like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
*/

// write your solution here...
var book1 = {
  title: "The Age of Spiritual Machines",
  author: "Ray Kurzweil",
  alreadyRead: false
};

var book2 = {
  title: "The Man in the High Castle",
  author: "Philip K. Dick",
  alreadyRead: true
};

var book3 = {
  title: "The Hero with a Thousand Faces",
  author: "Joseph Campbell",
  alreadyRead: true
};

var books = [book1, book2, book3];

for (var i = 0; i < books.length; i++) {
  console.log(books[i].title + " by " + books[i].author);
  if (books[i].alreadyRead == true) {
    console.log("You already read \"" + books[i].title + "\" by " + books[i].author);
  } else {
    console.log("You still need to read \"" + books[i].title + "\" by " + books[i].author);
  }
}
