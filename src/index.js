import { addMovie,editMovie,updateMovie,removeMovie } from "./js/fetchMoviesAPI";
import { renderAllMovies } from "./js/renderAllMovies";
const addMovieBtn = document.querySelector(".add_movie__btn");
const addMovieForm = document.querySelector(".add-movie__form");
const movieList = document.querySelector(".movie_list");
const backdrop = document.querySelector(".backdrop")
const closeBtn = document.querySelector(".close-btn")
const submitBtn = document.querySelector(".submit-btn")

movieList.addEventListener("click", changeMovie)
function changeMovie(e){
  if(e.target.nodeName === "BUTTON"){
    const movieId = e.target.dataset.id
    if(e.target.classList.contains("editBtn")){
      backdrop.classList.remove("hide")
      submitBtn.addEventListener('submit',onEdit)
      
      function onEdit(e){
        console.log(1)
        e.preventDefault();
        const data = e.currentTarget.elements
        const changedMovie = {
          title: data.title.value,  
          genre: data.genre.value,
          director: data.director.value,
          year: data.year.value
        };
        
        // evt.currentTarget.reset();
      }
    }
    if(e.target.classList.contains("updateBtn")){
      console.log(111)
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