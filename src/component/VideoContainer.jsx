import React from "react";

import { useSelector } from "react-redux";

import useNowMovieTrailer from "../hooks/useNowMovieTrailer";

function VideoContainer({ movieId }) {
  useNowMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store?.movies?.movieTrailer);

  return (
    <div className=" w-[100%] ">
      <iframe
        className="w-[100%] aspect-video bg-opacity-80 object-cover"
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
