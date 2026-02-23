import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { options, TMDB_API_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";


const useNowPlaying = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const nowPlayingMovie = useSelector(store=>store?.movies?.nowPlayingMovie);

  useEffect(() => {
   !nowPlayingMovie && getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    try {

      
    const data = await fetch(TMDB_API_URL+'now_playing?page=2',options );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
      
    } catch (error) {
navigate("/error");
      
    }
  };
};
export default useNowPlaying;
