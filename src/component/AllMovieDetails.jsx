import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { NETFLIX_LOGO_URL, options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { fullMovieData } from "../utils/movieSlice";
import VideoContainer from "./VideoContainer";
import MovieDetails from "./MovieDetails";
import MoreDetailsCard from "./MoreDetailsCard";
import useAllMovieDetails from "../hooks/useAllMovieDetails";
import MovieList from "./MovieList";
import Plans from "./Plans";
import Footer from "./Footer";

function AllMovieDetails() {
  const { id } = useParams();
  const movies = useSelector((store) => store?.movies);
  console.log(movies);
  useAllMovieDetails(id);

  return (
    <div className="bg-black">
      <div className="flex justify-between px-32 items-center">
        <img
          className=" w-52  md: pt-5"
          src={NETFLIX_LOGO_URL}
          alt="netflix logo "
        />
        <div className="text-white bg-purple-500 rounded-lg px-5 py-2 mr-5">
          <Link to={"/"}>
            {" "}
            <button>Homepage</button>
          </Link>
        </div>
      </div>

      <div className="w-[80%] mx-auto -mt-5 ">
        <VideoContainer movieId={id} />
        <MovieDetails details={movies?.movieData} />
        <MoreDetailsCard details={movies?.movieData} />
      </div>
      <div className="w-[100%] sm:px-10 md:px-auto lg:px-20">
        <div>
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Upcoming"} movies={movies?.upcoming} />

          <MovieList title={"Top Rated"} movies={movies?.topRated} />

          <MovieList title={"Trending"} movies={movies?.popularMovie} />
        </div>
        <Plans />
        <Footer/>
      </div>
    </div>
  );
}

export default AllMovieDetails;
