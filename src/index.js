import { addMovie,editMovie,updateMovie,removeMovie } from "./js/fetchMoviesAPI";
import { renderAllMovies } from "./js/renderAllMovies";
const addMovieBtn = document.querySelector(".add_movie__btn");
const addMovieForm = document.querySelector(".add-movie__form");
const movieList = document.querySelector(".movie_list");
const backdrop = document.querySelector(".backdrop")
const closeBtn = document.querySelector(".close-btn")
const submitForm = document.querySelector(".modal-form")
let titleInput = document.querySelector(".title")
const genreInput = document.querySelector(".genre")
const directorInput = document.querySelector(".director")
const yearInput = document.querySelector(".year")

movieList.addEventListener("click", changeMovie)
function changeMovie(e){
  if(e.target.nodeName === "BUTTON"){
    const movieId = e.target.dataset.id
    if(e.target.classList.contains("editBtn")){
      backdrop.classList.remove("hide")
      submitForm.addEventListener('submit',onEdit)
      
      function onEdit(e){
        e.preventDefault();
        const data = e.currentTarget.elements
        const changedMovie = {
          title: data.title.value,  
          genre: data.genre.value,
          director: data.director.value,
          year: data.year.value
        };  
        e.currentTarget.reset();
        backdrop.classList.add("hide")
        submitForm.removeEventListener('submit',onEdit)
        editMovie(movieId,changedMovie)
      }
    }
    if(e.target.classList.contains("updateBtn")){
      backdrop.classList.remove("hide")
      submitForm.addEventListener('submit',onUpdate)
      const parentEl = e.target.closest("li")
      titleInput.value = parentEl.children[0].textContent
      genreInput.value = parentEl.children[1].textContent
      directorInput.value = parentEl.children[2].textContent
      yearInput.value = parentEl.children[3].textContent
      const titleValue = titleInput.value
      const genreValue = genreInput.value
      const directorValue = directorInput.value
      const yearValue = yearInput.value

      function onUpdate(e){
        e.preventDefault();
        console.log(titleInput)
        const data = e.currentTarget.elements
        const changedMovie = {}
        titleValue === data.title.value ? "" : changedMovie.title=data.title.value
        genreValue === data.genre.value ? "" : changedMovie.genre=data.genre.value
        directorValue === data.director.value ? "" : changedMovie.director=data.director.value
        yearValue === data.year.value ? "" : changedMovie.year=data.year.value
        console.log(changedMovie)
        e.currentTarget.reset();
        backdrop.classList.add("hide")
        submitForm.removeEventListener('submit',onUpdate)
        updateMovie(movieId,changedMovie)
      }
    }
    if(e.target.classList.contains("removeBtn")){
      removeMovie(movieId)
    }
  }
}
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
  return newMovie;
});

closeBtn.addEventListener("click", () => {
  backdrop.classList.add("hide")
})