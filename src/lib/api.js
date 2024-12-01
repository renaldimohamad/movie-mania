import axios from "axios"

const apiKey = process.env.REACT_APP_APIKEY
const base_url = process.env.REACT_APP_BASEURL

export const getMovieList = async () => {
   const movie = await axios.get(`${base_url}/movie/popular?api_key=${apiKey}`)

   console.log({movie: movie})
   return movie.data.results
}

export const searchMovie = async (q) => {
   const search = await axios.get(
      `${base_url}/search/movie?query=${q}&api_key=${apiKey}`
   )
   return search.data
}
