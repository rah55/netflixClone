import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        movieTrailer:null,
        popularMovie:null,
        upcoming:null,
        topRated:null,
        allMovies:null,
        clearMovies:null,
        movieData:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
           state.nowPlayingMovies= action.payload;

        },
        addTrailer:(state,action)=>{
            state.movieTrailer=action.payload;
        },
        popularMovieList:(state,action)=>{
            state.popularMovie=action.payload;
        },
        upcomingMovieList:(state,action)=>{
            state.upcoming=action.payload;
        },
        topRatedMovieList:(state,action)=>{
            state.topRated=action.payload;
        },
        allMovieList:(state,action)=>{
            state.allMovies=action.payload;
        },
        clearMovieList:(state,action)=>{
            state.allMovies=[]
        },
        fullMovieData:(state,action)=>{
            state.movieData=action.payload;
        }
        
        

    }
})

export const {addNowPlayingMovies,addTrailer,popularMovieList,upcomingMovieList,topRatedMovieList,allMovieList,clearMovieList,fullMovieData}=movieSlice.actions;
export default movieSlice.reducer;