import React from "react";
import MovieDetailCard from "./MovieDetailCard";

function MoreDetailsCard({ details }) {
  if (!details) return;
  console.log(details?.data2);
  const {  genres, spoken_languages } = details?.data1;
  const allGenres = genres.map((genre) => genre.name).join(",");
  const { cast } = details?.data2;
  const castArray = cast.map((cs) => cs?.name);
  const languages = spoken_languages
    .map((language) => language?.name)
    .join(",");

    

  const card1 = [
    {
      heading: "Watch Offline",
      paragraph: "Available to download",
    },
    {
      heading: "Genres",
      paragraph: allGenres,
    },
  ];
  const card2 = [
    {
      heading: "Audio",
      paragraph:
        languages + "- Audio Description ," + languages + "[Original]",
    },
    {
      heading: "Subtitles",
      paragraph: languages
    },
  ];
  const card3 = [
    {
      heading: "Cast",
      paragraph: castArray.join(","),
    },
  ];

  return (
    <div className="text-white bg-opacity-15  mt-10 ">
      <h1 className="text-2xl font-extrabold">More Details</h1>
      <div className=" mt-2 grid md:grid-cols-3 gap-3 py-5">
        <MovieDetailCard card={card1} />
        <MovieDetailCard card={card2} />
        <MovieDetailCard card={card3} />
      </div>
    </div>
  );
}

export default MoreDetailsCard;

/**
 * watch offline (heading)
 * <p>
 *
 * genre(heading)
 *
 *
 *
 *
 */
