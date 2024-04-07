import { getAllMovies } from "./fetchMoviesAPI";
import { createMoviesMarkup } from "./createMoviesMarkup";

const list = document.querySelector(".movie_list")
export const renderAllMovies = () => {
    getAllMovies()
    .then(res => {
        createMoviesMarkup(res, list)})
}    