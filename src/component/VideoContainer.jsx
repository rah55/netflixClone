import React from "react";

import { useSelector } from "react-redux";

import useNowMovieTrailer from "../hooks/useNowMovieTrailer";

function VideoContainer({ movieId }) {
  useNowMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store?.movies?.movieTrailer);

  return (
    <div className=" w-[100%] ">
      <iframe
      title="Now playing movie trailer"
        className="w-[100%] aspect-video  "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1"
        }
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoContainer;
