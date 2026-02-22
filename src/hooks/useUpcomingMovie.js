import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { upcomingMovieList } from "../utils/movieSlice";
import { options } from "../utils/constants";

const useUpcomingMovie = () => {
  const dispatch = useDispatch();
  const upcomingMovie = useSelector((store) => store?.movies?.upcomingMovie);

  useEffect(() => {
    !upcomingMovie && getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2 ",
      options,
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(upcomingMovieList(json?.results));
  };
};
export default useUpcomingMovie;
