import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk('/movie/fetch',
    async () => {
        try {
            let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=aacdbe83dedab8fc913bd72adf3fdbad`)
            let json = await response.json()
            console.log(json)
            return json
        } catch (error) {
            return Promise.reject(error)
        }
    }
)

export const fetchMoviesDetails = createAsyncThunk('/movie/fetchDetail',
    async (movieId) => {
        try {
            let response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=958d6a01f70bdd2609e4e773318aa457`)
            let json = await response.json()
            console.log(json)
            return json
        } catch (error) {
            return Promise.reject(error)
        }
    }
)