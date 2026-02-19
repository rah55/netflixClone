import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const movies = useSelector((store) => store?.movies);

  return (
    <div className="bg-black  ">
      <div className="-mt-64 relative z-20 ">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upcoming} />

        <MovieList title={"Top Rated"} movies={movies?.topRated} />

        <MovieList title={"Trending"} movies={movies?.popularMovie} />
      </div>
    </div>
  );
}

export default SecondaryContainer;

