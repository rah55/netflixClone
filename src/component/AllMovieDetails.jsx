import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NETFLIX_LOGO_URL, options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { fullMovieData } from "../utils/movieSlice";
import VideoContainer from "./VideoContainer";
import MovieDetails from "./MovieDetails";
import MoreDetailsCard from "./MoreDetailsCard";
import useAllMovieDetails from "../hooks/useAllMovieDetails";
import MovieList from "./MovieList";

function AllMovieDetails() {
  const { id } = useParams();
  const movies = useSelector((store) => store?.movies);
  useAllMovieDetails(id);

  return (
    <div className="bg-black">
      <img
        className=" w-52 mx-auto md:mx-10 pt-5"
        src={NETFLIX_LOGO_URL}
        alt="netflix logo "
      />
      <div className="w-[80%] mx-auto -mt-5 ">
        <VideoContainer movieId={id} />
        <MovieDetails details={movies?.movieData} />
        <MoreDetailsCard details={movies?.movieData} />
      </div>
      {/* <div>
     <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upcoming} />

        <MovieList title={"Top Rated"} movies={movies?.topRated} />

        <MovieList title={"Trending"} movies={movies?.popularMovie} />
      </div> */}
    </div>
  );
}

export default AllMovieDetails;
