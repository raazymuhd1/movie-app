import movies from "../features/movies"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        [movies.reducerPath]: movies.reducer
    }
})