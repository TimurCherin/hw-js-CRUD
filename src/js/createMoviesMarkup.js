export const createMoviesMarkup = (movies, list) => {
  const movieList = movies.map(({title,genre,director,year}) => {
         return `<li class="movie__item">
          <h2>${title}</h2>
          <h3>Genre: ${genre}</h3>
          <p>Director: ${director}</p>
          <p>Year: ${year}</p>    
          </li>`
    }).join("")
    list.innerHTML = movieList
}
  
  // export const createMoviesMarkup = (movies, list) => {
  //   movies.forEach((movie) => {
  //     list.insertAdjacentHTML(
  //       "beforeend",
  //       `<li class="movie__item">
  //         <h2>${movie.title}</h2>
  //         <h3>Genre: ${movie.genre}</h3>
  //         <p>Director: ${movie.director}</p>
  //         <p>Year: ${movie.year}</p>    
  //         </li>`
  //     );
  //   });
  // };
  