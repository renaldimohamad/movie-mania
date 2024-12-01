import {useEffect, useState} from "react"
import "./App.css"
import {getMovieList, searchMovie} from "./lib/api"

function App() {
   const [popularMovies, setPopularMovies] = useState([])
   useEffect(() => {
      getMovieList().then((result) => {
         setPopularMovies(result)
      })
   }, [])

   const PopularMoviesList = () => {
      return popularMovies.map((movie, i) => {
         return (
            <div className="movie-wrapper" key={i}>
               <div className="movie-title">{movie.title}</div>
               <img
                  className="movie-poster"
                  src={`${process.env.REACT_APP_BASEIMAGEURL}/${movie.poster_path}`}
                  alt="movie-poster"
               />
               <div className="movie-info">
                  <div className="movie-date">
                     release : {movie.release_date}
                  </div>
                  <div className="movie-rate">{movie.vote_average}</div>
               </div>
            </div>
         )
      })
   }
   const search = async (q) => {
      if (q.length > 3) {
         const query = await searchMovie(q)
         setPopularMovies(query.results)
      }
   }

   console.log({popularMovies: popularMovies})

   return (
      <div className="App">
         <header className="App-header">
            <h1>Aldybala Movies Mania</h1>
            <input
               type="text"
               placeholder="Search for a movie"
               className="movie-search"
               onChange={(e) => search(e.target.value)}
            />
            <div className="movie-container">
               <PopularMoviesList />
            </div>
         </header>
      </div>
   )
}

export default App
