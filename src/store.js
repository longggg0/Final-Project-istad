import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import movieReducer from './features/movie/movieSlice'
import authReducer from './features/auth/authSlice'
import peopleReducer from './features/people/peopleSlice'
import upcommingReducer from './features/upcomming/upcommingSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movie: movieReducer,
    auth: authReducer,
    people: peopleReducer,
    upcomming: upcommingReducer
  },
})