import React, { useRef } from "react";

import { useDispatch } from "react-redux";
import { allMovieList } from "../utils/movieSlice";
import { options, SEARCH_API_URL } from "../utils/constants";

function GptSearchBar() {
  const searchInput = useRef();
  const dispatch = useDispatch();

  const searchMovies = async (name) => {
    const data = await fetch(
      SEARCH_API_URL + name ,
      options,
    );
    const json = await data?.json();
    const filterMovies = json?.results.filter(
      (movie) => movie?.poster_path !== null,
    );
    
    dispatch(allMovieList(filterMovies));
  };

  const formHandleClick = () => {
    const searchResult = searchInput.current.value;
    searchMovies(searchResult);
  };

  return (
    <div className="pt-52 md:pt-40 flex justify-center ">
      <form
        className="w-full md:w-1/2 grid grid-cols-12 gap-2 bg-black p-2 mx-2 md:mx-0 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchInput}
          type="text"
          placeholder="What would you like to watch ?"
          className=" bg-white px-2  md:px-6 rounded col-span-9 "
        />
        <button
          onClick={formHandleClick}
          className="bg-red-700 px-4 py-2  text-white col-span-3 rounded"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
