import { createSlice } from "@reduxjs/toolkit";
import { fetchPopular } from "./popularAction";


const initialState = {
    data: {},
    status: "",
    error: {}
}

export const popularSlice = createSlice({
    name: "popular",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPopular.pending, (state, action) => {
                // TODO
                state.status = "PENDING"
            })
            .addCase(fetchPopular.fulfilled, (state, action) => {
                // TODO
                state.status = "SUCCEED"

                console.log('payload ', action.payload)

                state.data = action.payload // Payload From API
            })
            .addCase(fetchPopular.rejected, (state, action) => {
                // TODO
                state.status = "ERROR"
                
                console.log(action.error)
                state.error = action.error
            })

    }

})

export default popularSlice.reducer