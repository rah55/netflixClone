import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options, TMDB_API_URL } from "../utils/constants";
import { fullMovieData } from "../utils/movieSlice";

const useAllMovieDetails = (id) => {
    const dispatch = useDispatch();
  const getMovieDetails = async () => {
    try {
      const [movieDetails, movieCredits] = await Promise.all([
        fetch(TMDB_API_URL + id, options),
        fetch(TMDB_API_URL + id + "/credits", options),
      ]);
      if (!movieDetails.ok || !movieCredits.ok) {
        throw new Error("One of the APIs failed");
      }

      const data1 = await movieDetails?.json();
      const data2 = await movieCredits?.json();
      // const data3 = await movieCredits?.json();

      dispatch(fullMovieData({ data1, data2 }));
    } catch (error) {
      
    }
  };

  
  useEffect(() => {
    getMovieDetails();
  }, [id]);
};
export default useAllMovieDetails;
