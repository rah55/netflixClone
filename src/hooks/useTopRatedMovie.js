import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { topRatedMovieList } from "../utils/movieSlice";
import { options } from "../utils/constants";

const useTopRatedMovie = () => {
  const dispatch = useDispatch();
  const topRateMovie = useSelector((store) => store?.movies?.topRateMovie);

  useEffect(() => {
    !topRateMovie && getTopRatedMovies();
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
