import React from "react";
import Header from "./Header";

import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import { useParams } from "react-router-dom";

const Browse = () => {
  const gpt = useSelector((store) => store?.gpt);
  
  useNowPlaying();
  usePopularMovie();
  useUpcomingMovie();
  useTopRatedMovie();
  

  return (
    <div>
      <Header />
      {gpt?.showGptOption ? <GptSearch />:<>
       <MainContainer />
      <SecondaryContainer />
      </>}

     
    </div>
  );
};

export default Browse;
