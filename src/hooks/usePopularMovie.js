import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { popularMovieList } from "../utils/movieSlice";
import { options, TMDB_API_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const usePopularMovie = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const popularMovie = useSelector((store) => store?.movies?.popularMovie);

  useEffect(() => {
    !popularMovie && getPopularMovies();
  }, []);

  const getPopularMovies = async () => {

    try {
      const data = await fetch(
      TMDB_API_URL+"popular",
      options,
    );
    const json = await data.json();
    dispatch(popularMovieList(json?.results));
      
    } catch (error) {
      navigate("/error");
    }
    
  };
};
export default usePopularMovie;
