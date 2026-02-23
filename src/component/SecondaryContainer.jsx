import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import Plans from "./Plans";

function SecondaryContainer() {
  const movies = useSelector((store) => store?.movies);

  return (
    <div className="bg-black  ">
      <div className="mt-0 md:-mt-64 relative z-20 ">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upcoming} />

        <MovieList title={"Top Rated"} movies={movies?.topRated} />

        <MovieList title={"Trending"} movies={movies?.popularMovie} />
      </div>
      <Plans></Plans>
    </div>
  );
}

export default SecondaryContainer;

