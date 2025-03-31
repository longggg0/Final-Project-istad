import { createSlice } from "@reduxjs/toolkit";
import { fetchUpcomming } from "./upcommingAction";


const initialState = {
    data: {},
    status: "",
    error: {}
}

export const upcommingSlice = createSlice({
    name: "upcomming",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUpcomming.pending, (state, action) => {
                // TODO
                state.status = "PENDING"
            })
            .addCase(fetchUpcomming.fulfilled, (state, action) => {
                // TODO
                state.status = "SUCCEED"

                console.log('payload ', action.payload)

                state.data = action.payload // Payload From API
            })
            .addCase(fetchUpcomming.rejected, (state, action) => {
                // TODO
                state.status = "ERROR"
                
                console.log(action.error)
                state.error = action.error
            })

    }

})

export default upcommingSlice.reducer