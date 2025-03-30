import { createSlice } from "@reduxjs/toolkit";
import { fetchPeople } from "./peopleAction";

const initialState = {
    data: {},
    status: "",
    error: {}
}

export const peopleSlice = createSlice({
    name: "people",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPeople.pending, (state, action) => {
                // TODO
                state.status = "PENDING"
            })
            .addCase(fetchPeople.fulfilled, (state, action) => {
                // TODO
                state.status = "SUCCEED"

                console.log('payload ', action.payload)

                state.data = action.payload // Payload From API
            })
            .addCase(fetchPeople.rejected, (state, action) => {
                // TODO
                state.status = "ERROR"
                
                console.log(action.error)
                state.error = action.error
            })

    }

})

export default peopleSlice.reducer