import React, { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";

function VideoContainer({ movieId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    getTrailer();
  }, []);
  const getTrailer = async (movieId) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/840464/videos?language=en-US",
      options,
    );
    const json = await data.json();
    const filterData = json?.results?.filter(
      (result) => result.type === "Trailer",
    );
    const trailer = filterData.length ? filterData[0] : json?.results[0];

    console.log(filterData);
  };

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/hiD3zk0ZRFg?si=VP1D2LhBlKV1lW03"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoContainer;
