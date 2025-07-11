function getRating(watchList) {
  // Only change code below this line
  
  const nolanMovies = watchList.filter(movie => movie.Director === "Christopher Nolan")

  const totalRating = nolanMovies.reduce((sum,movie) => sum + Number(movie.imdbRating),0)

  let averageRating = totalRating/nolanMovies.length;
  // Only change code above this line
  return averageRating;
}

console.log(getRating(watchList));