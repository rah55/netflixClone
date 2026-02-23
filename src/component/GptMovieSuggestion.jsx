import React from "react";
import { useSelector } from "react-redux";

import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

function GptMovieSuggestion() {
  const moviesList = useSelector((store) => store?.movies?.allMovies);
  if (!moviesList) return null;

  return (
    moviesList.length !== 0 && (
      <div className="bg-black z-20 w-[80%] text-white mx-auto md:w-1/2 my-5 p-5 md:p-20 bg-opacity-90">
        <h1 className="text-xl font-bold pb-6">Search Result</h1>
        <div className="flex flex-wrap gap-3 shadow-white ">
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
