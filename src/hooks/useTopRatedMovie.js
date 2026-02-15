import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { topRatedMovieList } from "../utils/movieSlice";
import { options } from "../utils/constants";

const useTopRatedMovie = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      options,
    );
    const json = await data.json();
    dispatch(topRatedMovieList(json?.results));
  };
};
export default useTopRatedMovie;
