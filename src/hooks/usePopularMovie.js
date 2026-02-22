import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { popularMovieList } from "../utils/movieSlice";
import { options } from "../utils/constants";

const usePopularMovie = () => {
  const dispatch = useDispatch();
  const popularMovie = useSelector((store) => store?.movies?.popularMovie);

  useEffect(() => {
    !popularMovie && getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      options,
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(popularMovieList(json?.results));
  };
};
export default usePopularMovie;
