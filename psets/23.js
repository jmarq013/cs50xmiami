/*
The Movie Database

It's like IMDB, but much much smaller!

- Create an object to store the following information about your favorite movie:
  title (a string), duration (a number), and stars (an array of strings).

- Create a function to print out the movie information like so:
  "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

// write your solution here...
var favMovie = {
  title: "Blade Runner",
  durationMin: 117,
  stars: ["Harrison Ford", "Rutger Hauer", "Sean Young"]
};

function movieInfo(movie)
{
  console.log(movie.title + " lasts for " + movie.durationMin + " minutes. Stars: " + movie.stars[0] + ", " + movie.stars[1] + ", " + movie.stars[2] + ".");
}

movieInfo(favMovie);
