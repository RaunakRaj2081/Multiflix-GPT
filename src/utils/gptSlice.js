import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt", 
    initialState : {
        showGptSearch : false,
        movieResluts : null,
        movieNames : null,
    },
    reducers : {
        toggleGptSearchview : (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult : (state,action) => {
            const {movieNames ,movieResluts} = action.payload;
            state.movieNames = movieNames;
            state.movieResluts = movieResluts;
        }

    },
});

export const {toggleGptSearchview , addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer;