import React from "react";
import { BG_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

function GptSearch() {
  return (
    <>
    <div className="absolute -z-10">
      <img src={BG_IMG} alt="" />
    </div>
   <GptSearchBar/>
   <GptMovieSuggestion/>
    </>
   
  );
}

export default GptSearch;
