import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { popularMovieList } from "../utils/movieSlice";
import { options } from "../utils/constants";

const usePopularMovie = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular',options );
    const json = await data.json();
    console.log(json.results);
    dispatch(popularMovieList(json?.results));
  };
};
export default usePopularMovie;