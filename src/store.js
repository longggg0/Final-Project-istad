import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import movieReducer from './features/movie/movieSlice'
import authReducer from './features/auth/authSlice'
import peopleReducer from './features/people/peopleSlice'
import upcommingReducer from './features/upcomming/upcommingSlice'
import popularReducer from './features/popular/popularSlice'
import nowplayingReducer from './features/nowplaying/nowplayingSlice'
import topratedReducer from './features/toprated/topratedSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movie: movieReducer,
    auth: authReducer,
    people: peopleReducer,
    upcomming: upcommingReducer,
    popular: popularReducer,
    nowplaying: nowplayingReducer,
    toprated: topratedReducer
  },
})