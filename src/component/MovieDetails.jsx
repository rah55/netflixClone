import React from "react";

function MovieDetails({ details }) {
  if (!details) return;
  const { title, release_date, overview, genres } = details?.data1;
  const { cast } = details?.data2;
  const castArray = cast.map((cs) => cs.name);
  const starcast = castArray.slice(0, 3);
  
  return (
    <div className="text-white  bg-gray-300 bg-opacity-15 p-5 md:p-10 mt-10 rounded-lg ">
      <h1 className="text-2xl font-bold py-2">{title}</h1>
      <div>
        <ul className="flex font-bold gap-2 py-2 ">
          <li>{release_date.split("-")[0]}</li>
          <li>⚫{genres[0].name}</li>
        </ul>
      </div>
      <div className="grid  md:grid-cols-12 md:items-center">
        <p className="py-2 pr-2 md:border-r-2 border-gray-400 md:col-span-9 w-[95%]">{overview}</p>

        <p className="md:pl-2 md:col-span-3 ">
          <b>Starring:</b> {starcast.join(",")}
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
/**
 * title
 * year of release certificate genre
 * description
 * star cast
 */
