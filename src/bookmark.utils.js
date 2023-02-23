export const addBookmarkedMovie = (movie) => {
  let movies = JSON.parse(localStorage.getItem('movies')) || [];
  movie.bookmarkedDate = new Date().toISOString();
  movies.push(movie);
  localStorage.setItem('movies', JSON.stringify(movies));
};

export const isBookmarkedMovie = (id) => {
  let movies = JSON.parse(localStorage.getItem('movies')) || [];
  return movies.some((movie) => movie.imdbID === id);
};

export const removeBookmarkedMovie = (id) => {
  let movies = JSON.parse(localStorage.getItem('movies')) || [];
  movies = movies.filter((movie) => movie.imdbID !== id);
  localStorage.setItem('movies', JSON.stringify(movies));
};

export const getBookmarkedMovies = () => {
  let movies = JSON.parse(localStorage.getItem('movies')) || [];
  movies.sort(
    (a, b) => new Date(b.bookmarkedDate) - new Date(a.bookmarkedDate)
  );
  return movies;
};
