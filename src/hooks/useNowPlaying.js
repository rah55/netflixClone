import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";


const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlayingMovie = useSelector(store=>store?.movies?.nowPlayingMovie);

  useEffect(() => {
   !nowPlayingMovie && getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=2',options );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
  };
};
export default useNowPlaying;
