import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const API_KEY = "5b1e84d5abef5af38f2a11aaca87ee58"
const ACCESS_TOKEN = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjFlODRkNWFiZWY1YWYzOGYyYTExYWFjYTg3ZWU1OCIsInN1YiI6IjYwMWNmYjA5ZmIzZjYxMDA0MWNkZTAxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t0A7iu6_Eh51LYCjd2CcUQUnQgBCYF0rQ-5jQRYmhxY`

const TMDB_URL = 'https://api.themoviedb.org/3'
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500"


const moviesSlice = createApi({
    reducerPath: "movies",
    baseQuery: fetchBaseQuery({ baseUrl: TMDB_URL }),
    endpoints: (builder) => ({
            getMovies: builder.query({
                  query: (endpoint) => ({
                     url: `${endpoint}?api_key=${API_KEY}`,
                     method: "GET",
                     headers: {
                        authorization: `Bearer ${ACCESS_TOKEN}`
                     }
                  } ),
                  transformResponse: (response, meta, arg) => response.results
            }),
         })
})

export const { useGetMoviesQuery } = moviesSlice
export default moviesSlice;