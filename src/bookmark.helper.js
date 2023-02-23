export const addBookmarkedMovie = (movie) => {
  let movies = JSON.parse(localStorage.getItem('movies')) || [];
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
  return JSON.parse(localStorage.getItem('movies')) || [];
};
