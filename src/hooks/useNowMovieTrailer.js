import { useEffect, useState } from "react";
import { options, TMDB_API_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const useNowMovieTrailer = (movieId) => {
  const [trailerVideo, setTrailerVideo] = useState(null);
  const navigate= useNavigate();

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const data = await fetch(TMDB_API_URL + `${movieId}/videos`, options);
        const json = await data.json();

        const trailer = json.results.filter(
          (video) => video.type === "Trailer",
        );

        setTrailerVideo(trailer[0]);
      } catch (error) {
        navigate("/error");
      }
    };

    if (movieId) fetchTrailer();
  }, [movieId]);

  return trailerVideo;
};
export default useNowMovieTrailer;
