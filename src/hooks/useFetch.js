import {useState, useEffect} from 'react'
import { TMDB_URL, API_KEY, ACCESS_TOKEN } from "../api"

const useFetch = () => {
     const [movies, setMovies] = useState(null)

     useEffect(() => {
        const fetchMovies = async() => {
            const res = await fetch(`${TMDB_URL}/trending/movie/day?api_key=${API_KEY}`, {
                method: "GET",
                headers: {
                    authorization: `${ACCESS_TOKEN}`
                }
            })
            const result = await res.json()

            setMovies(result.results)
        }

        fetchMovies()
     }, [])

  return movies
}

export default useFetch