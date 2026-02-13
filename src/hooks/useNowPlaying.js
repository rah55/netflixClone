import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";


const useNowPlaying = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',options );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
  };
};
export default useNowPlaying;
