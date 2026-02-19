import React from 'react'
import VideoContainer from './VideoContainer'
import VideoTitleContainer from './VideoTitleContainer'
import { useSelector } from 'react-redux'



const MainContainer = () => {
    const movies = useSelector((store)=>store?.movies?.nowPlayingMovies);
    // const trailer = useSelector((store)=>store?.movies?.nowPlayingMovies);
  
   
    if(!movies) return ;
    const mainMovie = movies[3];
    
    const {original_title,overview,id}=mainMovie;
  return (
    <div className='relative z-0' >
        <VideoTitleContainer title={original_title} desc={overview}/>
        <VideoContainer movieId={id}/>
      
    </div>
  )
}

export default MainContainer
