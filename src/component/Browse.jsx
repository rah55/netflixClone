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
import Footer from "./Footer";

const Browse = () => {
  const gpt = useSelector((store) => store?.gpt);
  
  useNowPlaying();
  usePopularMovie();
  useUpcomingMovie();
  useTopRatedMovie();
  

  return (
    <div className="min-h-screen flex flex-col " >
      {/* <div className="flex-grow"> */}

      <Header />
      {gpt?.showGptOption ? <GptSearch />:<div classname="flex-grow">
       <MainContainer />
      <SecondaryContainer />
      <Footer/>
      </div>}
      {/* </div> */}

     
    </div>
  );
};

export default Browse;
