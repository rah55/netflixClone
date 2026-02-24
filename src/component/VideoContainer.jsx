import React from "react";
import useNowMovieTrailer from "../hooks/useNowMovieTrailer";

function VideoContainer({ movieId }) {
 const trailerVideo= useNowMovieTrailer(movieId);
  
  if(!trailerVideo) return;

  return (
    <div className=" w-[100%]  ">
      <iframe
      title="Now playing movie trailer"
        className="w-[100%] aspect-video pointer-events-none  "
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
