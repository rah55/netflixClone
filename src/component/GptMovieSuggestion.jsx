import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
import MovieCard from './MovieCard';

function GptMovieSuggestion() {
  const moviesList = useSelector(store=>store?.movies?.allMovies);
  if(!moviesList) return null;
  
  return moviesList.length!==0 && (
    <div className='bg-black z-20  text-white mx-auto w-1/2 my-5 p-20 bg-opacity-70'>
     <h1 className='text-xl font-bold pb-6'>Search Result</h1>
     <div className='flex flex-wrap gap-3 shadow-white '>
      {moviesList?.map((movie)=><MovieCard  key={movie?.id} title={movie?.title} poster={movie?.poster_path}/>)}
     </div>
      
    </div>
  )
}

export default GptMovieSuggestion
