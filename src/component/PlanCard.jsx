import React from "react";

function PlanCard({ data }) {
  return (
    <div className="w-full p-2">
      <div className="grid 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-4 
                      gap-6">

        {data.map((card) => (
          <div
            key={card?.title}
            className={`rounded-2xl p-6 sm:p-8 
                        text-white 
                        shadow-lg 
                        transition-transform duration-300 
                        hover:scale-105 
                        ${card?.gradient}`}
          >
            <h1 className="font-bold text-xl sm:text-2xl">
              {card?.title}
            </h1>

            <p className="font-semibold text-lg mt-2 text-gray-200">
              {card?.quality}
            </p>

            <ul className="mt-5 space-y-2 text-gray-200 text-sm sm:text-base">
              {card?.pros.map((pro, index) => (
                <li key={index}>✓ {pro}</li>
              ))}
            </ul>

            <p className="mt-6 font-bold text-base sm:text-lg">
              {card?.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanCard;