// // const button = document.querySelector('#click-me')

// // button.addEventListener('click', (event) => {
// //   // fetch('//api.github.com/users/ilrock')
// //   // .then((response) => {
// //   //   console.log(response)
// //   //   return response.json()
// //   // })
// //   // .then((data) => {
// //   //   const username = document.querySelector('#github-username')
// //   //   username.innerText = data.login
// //   // });

// //   fetch("http://www.omdbapi.com/?s=The lord&apikey=adf1f2d7")
// //   .then(response => response.json())
// //   .then((data) => {
// //     console.log(data)
// //     // const movies = data.Search
// //     // // console.log(movies)
// //     // const moviesList = movies.map(movie => `<li> ${movie.Title} </li>`)
// //     // // console.log(moviesList)
// //     // const ul = document.querySelector('#movie-list')
// //     // ul.innerHTML = moviesList.join('')
// //   });
// // })

// const form = document.querySelector('#search-movies');
// const results = document.querySelector('#movie-list')

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // <-- to prevent <form>'s native behaviour
//   const input = event.currentTarget.querySelector('.form-control');
//   results.innerHTML = '';
//   searchMovies(input.value);
// });

// const searchMovies = (query) => {
//   fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
//     .then(response => response.json())
//     .then((data) => {
//       data.Search.forEach((result) => {
//         const movie = `<li class="list-inline-item">
//           <img src="${result.Poster}" alt="">
//           <p>${result.Title}</p>
//         </li>`;
//         results.insertAdjacentHTML("beforeend", movie);
//       });
//     });
// }

const searchAlgoliaPlaces = (event) => {
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: { query: event.currentTarget.value }
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data.hits); // Look at local_names.default
    });
};

const input = document.querySelector("#search");
input.addEventListener("keyup", searchAlgoliaPlaces);
