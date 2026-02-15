import React from "react";
import MovieCard from "./MovieCard";


function MovieList({ title,movies }) {
  
 return   (movies &&
    <div className=" flex flex-col p-6">
      <h1 className="text-3xl font-bold text-white p-4">{title}</h1>
      <div className="flex overflow-x-scroll p-4 ">
         <div className=" flex">
        {movies?.map((movie) => (
          <div className="" key={movie?.id}>
            <MovieCard title={movie?.title} poster={movie?.poster_path} />
          </div>
        ))}
      </div>

      </div>
     
    </div>
  );
  
}

export default MovieList;
