import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies, fetchMoviesDetails } from "./movieAction";

const initialState = {
    data: {},
    status: "",
    error: {},
    detail:{}
}

export const movieSlice = createSlice({
    name: "movie",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchMovies.pending, (state, action) => {
                // TODO
                state.status = "PENDING"
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                // TODO
                state.status = "SUCCEED"

                console.log('payload ', action.payload)

                state.data = action.payload // Payload From API
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                // TODO
                state.status = "ERROR"
                
                console.log(action.error)
                state.error = action.error
            })
            .addCase(fetchMoviesDetails.fulfilled, (state, action) => {
                state.detail = action.payload
                state.status = "SUCCEED"
            })

    }

})

export default movieSlice.reducer