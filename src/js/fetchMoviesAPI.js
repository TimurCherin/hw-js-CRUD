import { createMoviesMarkup } from "./createMoviesMarkup";
const movieList = document.querySelector(".movie_list");
const url = "http://localhost:3000/movies";

// export const fetchFruits = () =>
//   fetch(url)
//     .then((res) => {
//       if (!res.ok) {
//         console.log("!res.ok");
//       }
//       return res.json();
//     })
//     .then((data) => {
//       createProductsMarkUp(data, movieList);
//     })
//     .catch((err) => console.log(err));

export const getAllMovies = () =>
  fetch(url)
  .then(res => res.json())
  .catch((err) => console.log(err));

export const addMovie = (newMovie) =>
    fetch(url, {
    method: "POST",
    body: JSON.stringify(newMovie),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));