import { getAllMovies,addMovie } from "./js/fetchMoviesAPI";
import { renderAllMovies } from "./js/renderAllMovies";
const addMovieBtn = document.querySelector(".add_movie__btn");
const addMovieForm = document.querySelector(".add-movie__form");

renderAllMovies()

addMovieForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const formData = evt.currentTarget.elements
  const newMovie = {
    title: formData.title.value,  
    genre: formData.genre.value,
    director: formData.director.value,
    year: formData.year.value,
  };
  addMovie(newMovie);
  evt.currentTarget.reset();
  renderAllMovies()
  return newMovie;
});