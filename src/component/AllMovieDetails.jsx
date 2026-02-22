import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {  NETFLIX_LOGO_URL, options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { fullMovieData } from "../utils/movieSlice";
import VideoContainer from "./VideoContainer";
import MovieDetails from "./MovieDetails";
import MoreDetailsCard from "./MoreDetailsCard";

function AllMovieDetails() {
    const {id }= useParams();
    const dispatch = useDispatch();
    const movie = useSelector(store=>store?.movies?.movieData);

    

    const getMovieDetails = async()=>{
      try{
           const [movieDetails, movieCredits, movieTrailer] = await Promise.all([
          fetch("https://api.themoviedb.org/3/movie/"+id,options),
          fetch("https://api.themoviedb.org/3/movie/"+id+"/credits",options),
          fetch("https://api.themoviedb.org/3/movie/"+id+"/videos",options),
          
         
        ]);
        if (!movieDetails.ok || !movieCredits.ok || !movieTrailer.ok) {
          throw new Error("One of the APIs failed");
        }

        const data1 = await movieDetails?.json();
        const data2 = await movieCredits?.json();
        console.log(data1);
        console.log(data2);

        dispatch(fullMovieData({data1,data2}))
        
      }catch(error){
        console.log(error);
      }

    }
    useEffect(()=>{
      getMovieDetails();
    },[])





  return (
    <div className='bg-black'>
      <img
              className=" w-52 mx-auto md:mx-10 pt-5"
              src={NETFLIX_LOGO_URL}
              alt="netflix logo "
            />
        <div className="w-[80%] mx-auto -mt-5 ">
          <VideoContainer movieId={id}/>
          <MovieDetails details={movie}/>
          <MoreDetailsCard details={movie}/>
          
          
        </div>
    </div>
  )
}


export default AllMovieDetails;
