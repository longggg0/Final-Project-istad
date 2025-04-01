import { createSlice } from "@reduxjs/toolkit";
import { fetchNowplaying } from "./nowplayingAction";


const initialState = {
    data: {},
    status: "",
    error: {}
}

export const nowplayingSlice = createSlice({
    name: "nowplaying",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchNowplaying.pending, (state, action) => {
                // TODO
                state.status = "PENDING"
            })
            .addCase(fetchNowplaying.fulfilled, (state, action) => {
                // TODO
                state.status = "SUCCEED"

                console.log('payload ', action.payload)

                state.data = action.payload // Payload From API
            })
            .addCase(fetchNowplaying.rejected, (state, action) => {
                // TODO
                state.status = "ERROR"
                
                console.log(action.error)
                state.error = action.error
            })

    }

})

export default nowplayingSlice.reducer