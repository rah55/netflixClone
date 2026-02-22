import React from "react";

function MovieDetailCard({ card }) {
  return (
    <div className="bg-gray-300 bg-opacity-15 p-5 rounded-lg font-semibold ">
      {card.map((c) => (
        <div key={c.heading} className="mt-2">
          <h1>{c.heading}</h1>
          <p className="text-gray-300">{c.paragraph}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieDetailCard;
