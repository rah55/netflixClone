import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { upcomingMovieList } from "../utils/movieSlice";
import { options } from "../utils/constants";

const useUpcomingMovie = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2 ',options );
    const json = await data.json();
    console.log(json.results);
    dispatch(upcomingMovieList(json?.results));
  };
};
export default useUpcomingMovie;