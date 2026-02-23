import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { upcomingMovieList } from "../utils/movieSlice";
import { options, TMDB_API_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const useUpcomingMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const upcomingMovie = useSelector((store) => store?.movies?.upcomingMovie);

  useEffect(() => {
    !upcomingMovie && getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(TMDB_API_URL + "upcoming?&page=2 ", options);
      const json = await data.json();

      dispatch(upcomingMovieList(json?.results));
    } catch (error) {
      navigate("/error");
    }
  };
};
export default useUpcomingMovie;
