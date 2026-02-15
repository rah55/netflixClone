import { useDispatch} from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const useNowMovieTrailer = (movieId)=>{
     
  const dispatch = useDispatch();

  useEffect(() => {
    getTrailer();
  }, []);
  const getTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options,
    );
    const json = await data?.json();
    const filterData = json?.results?.filter(
      (result) => result?.type === "Trailer",
    );

    const trailer = filterData?.length ? filterData[0] : json?.results[0];

    dispatch(addTrailer(trailer));
  };
  
    
}
export default useNowMovieTrailer;