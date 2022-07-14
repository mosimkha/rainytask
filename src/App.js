// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Main1 />
//     </div>
//   );
// }

// export default App;

import React from "react";
// import NavBar1 from "./Movies1/NavBar1";
import Main1 from "./Movies1/Main1";

function App() {
  return (
    <div>
      {/* <NavBar1 /> */}
      <Main1 />
      {/* <Home /> */}
      {/* <PaginationBasic /> */}
      {/* <Blank /> */}
    </div>
  );
}

export default App;
// https://api.themoviedb.org/3/movie/550?api_key=65322bde6241b3b6874ace20d05f9d22
// 65322bde6241b3b6874ace20d05f9d22
// https://api.themoviedb.org/3/movie/popular?api_key=65322bde6241b3b6874ace20d05f9d22&language=en-US&page=1

// export const imgUrl = {
//     backdrop_sizes: {
//         w300: 'https://image.tmdb.org/t/p/w300',
//         w780: 'https://image.tmdb.org/t/p/w780',
//         w1280: 'https://image.tmdb.org/t/p/w1280',
//         original: 'https://image.tmdb.org/t/p/original',
//     },
//     logo_sizes: {
//         w45: 'https://image.tmdb.org/t/p/w45',
//         w92: 'https://image.tmdb.org/t/p/w92',
//         w154: 'https://image.tmdb.org/t/p/w154',
//         w185: 'https://image.tmdb.org/t/p/w185',
//         w300: 'https://image.tmdb.org/t/p/w300',
//         w500: 'https://image.tmdb.org/t/p/w500',
//         original: 'https://image.tmdb.org/t/p/original',
//     },
//     poster_sizes:{
//         w92: 'https://image.tmdb.org/t/p/w92',
//         w154: 'https://image.tmdb.org/t/p/w154',
//         w185: 'https://image.tmdb.org/t/p/w185',
//         w342: 'https://image.tmdb.org/t/p/w342',
//         w500: 'https://image.tmdb.org/t/p/w500',
//         w780: 'https://image.tmdb.org/t/p/w780',
//         original: 'https://image.tmdb.org/t/p/original'
//     },
//     profile_sizes: {
//         w45: 'https://image.tmdb.org/t/p/w45',
//         w185: 'https://image.tmdb.org/t/p/w185',
//         h632: 'https://image.tmdb.org/t/p/h632',
//         original: 'https://image.tmdb.org/t/p/original',
//     },
//     still_sizes:{
//         w92: 'https://image.tmdb.org/t/p/w92',
//         w185: 'https://image.tmdb.org/t/p/w185',
//         w300: 'https://image.tmdb.org/t/p/w300',
//         original: 'https://image.tmdb.org/t/p/original',
//     }
