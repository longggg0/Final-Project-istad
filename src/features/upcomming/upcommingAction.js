import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUpcomming = createAsyncThunk('/upcomming/fetch',
    async() => {
        try{
            let response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=958d6a01f70bdd2609e4e773318aa457`)

            return response.json()

        }catch(error){
            return Promise.reject(error)
        }
    }
)