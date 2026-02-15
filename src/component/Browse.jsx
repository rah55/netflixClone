import React from "react";
import Header from "./Header";

import useNowPlaying  from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";



const Browse = () => {
  useNowPlaying();
  usePopularMovie();
  useUpcomingMovie();
  useTopRatedMovie();
  

 
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
