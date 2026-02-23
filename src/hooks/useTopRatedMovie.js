import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { topRatedMovieList } from "../utils/movieSlice";
import { options, TMDB_API_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const useTopRatedMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const topRateMovie = useSelector((store) => store?.movies?.topRateMovie);

  useEffect(() => {
    !topRateMovie && getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {

    try{
const data = await fetch(
      TMDB_API_URL+"top_rated",
      options,
    );
    const json = await data.json();
    dispatch(topRatedMovieList(json?.results));
    }catch(error){
      navigate("/error");
    }
    
  };
};
export default useTopRatedMovie;
