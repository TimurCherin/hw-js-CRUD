export const createMoviesMarkup = (movies, list) => {
  const movieList = movies.map(({id,title,genre,director,year}) => {
         return `<li class="movie__item">
          <h2>${title}</h2>
          <h3>${genre}</h3>
          <p>${director}</p>
          <p>${year}</p>  
          <button type="button" data-id="${id}" class="editBtn">Edit</button>
          <button type="button" data-id="${id}" class="updateBtn">Update</button>
          <button type="button" data-id="${id}" class="removeBtn">Remove</button>  
          </li>`
    }).join("")
    list.innerHTML = movieList
}