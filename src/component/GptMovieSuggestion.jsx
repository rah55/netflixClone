import React from "react";
import { useSelector } from "react-redux";

import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

function GptMovieSuggestion() {
  const moviesList = useSelector((store) => store?.movies?.allMovies);
  if (!moviesList) return null;

  return (
    moviesList.length !== 0 && (
      <div className="bg-black z-20 w-[90%]  text-white mx-auto  my-5 p-5 md:px-10 bg-opacity-90">
        <h1 className="text-xl font-bold pb-6 ">Search Result</h1>
        <div className="flex flex-wrap px-5 gap-3 md:gap-1 shadow-white ">
          {moviesList?.map((movie) => (
           
            <MovieCard
              key={movie?.id}
              id={movie?.id}
              title={movie?.title}
              poster={movie?.poster_path}
            />
            
           
            
          ))}
        </div>
      </div>
    )
  );
}

export default GptMovieSuggestion;
