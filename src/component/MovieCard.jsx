import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

function MovieCard({ title, poster, id }) {
  

  return (
    <div className=" w-20 md:w-48 hover:scale-105 transition duration-300 text-white text-sm">
      <Link to={`/movie/${id}`}>
        <img
          className="rounded-lg cursor-pointer"
          src={IMG_CDN_URL + poster}
          alt={title}
        />
        <p className="px-2">{title}</p>
      </Link>
    </div>
  );
}

export default MovieCard;
