import { createSlice } from "@reduxjs/toolkit";
import { fetchToprated } from "./topratedAction";


const initialState = {
    data: {},
    status: "",
    error: {}
}

export const topratedSlice = createSlice({
    name: "toprated",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchToprated.pending, (state, action) => {
                // TODO
                state.status = "PENDING"
            })
            .addCase(fetchToprated.fulfilled, (state, action) => {
                // TODO
                state.status = "SUCCEED"

                console.log('payload ', action.payload)

                state.data = action.payload // Payload From API
            })
            .addCase(fetchToprated.rejected, (state, action) => {
                // TODO
                state.status = "ERROR"
                
                console.log(action.error)
                state.error = action.error
            })

    }

})

export default topratedSlice.reducer