import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'
import APIKEY from '../../common/apis/MovieApiKey'


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (movieTerm) => {
    

    const response = await movieApi.get(`?apikey=${APIKEY}&s=${movieTerm}&type=movie`)

    return response.data

});


export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (movieTerm) => {


    const response = await movieApi.get(`?apikey=${APIKEY}&s=${movieTerm}&type=series`)

    return response.data

});

export const fetchAsyncMoviseOrShows = createAsyncThunk('movies/fetchAsyncMoviseOrShows', 
 async (id) => {
    const response = await movieApi.get(`?apikey=${APIKEY}&i=${id}&Plot=full`)
    return response.data
});

const initialState = {
    movies: {},
    shows: {},
    selectedMoviesOrShows:{},

}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
      removeSelectedMoviesOrShow:(state)=>{
        state.selectedMoviesOrShows={}
      }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: (state, action) => {
            console.log("loading")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('fetch successfully');
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('fetch rejected');

        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log('fetch successfully');
            return { ...state, shows: payload }
        },  [fetchAsyncMoviseOrShows.fulfilled]: (state, { payload }) => {
            console.log('fetch successfully');
            return { ...state, selectedMoviesOrShows: payload }
        },
    }
})

export const { removeSelectedMoviesOrShow} = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getAllMoviesOrShows = (state) => state.movies.selectedMoviesOrShows

export default movieSlice.reducer;