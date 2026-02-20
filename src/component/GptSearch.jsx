import React from "react";
import { BG_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

function GptSearch() {
  return (
    <>
    <div className="  fixed -z-10 ">
      <img className="h-screen w-screen object-cover  " src={BG_IMG} alt="" />
    </div>
    <div>
       <GptSearchBar/>
   <GptMovieSuggestion/>

    </div>
  
    </>
   
  );
}

export default GptSearch;
