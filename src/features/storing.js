import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './movie/movieSlice'
const store = configureStore({
    reducer:{
        movies: moviesReducer
    },

});

export default store