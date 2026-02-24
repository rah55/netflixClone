import React from "react";

function PlanCard({ data  }) {
  
  return (
    
      
      <div  className="grid grid-cols-1  mt-2 p-2 md:grid-cols-2 gap-3 xl:grid-cols-4  ">
        {data.map((card)=>(
            <div key={card?.title} className={`bg-gray-800 rounded-lg p-8 ${card?.gradient}`}>
                 <h1 className="font-bold text-2xl text-white">{card?.title}</h1>
            <p className="font-bold text-xl mt-2 text-gray-300">{card?.quality}</p>
            <div className="font-semibold mt-5 text-gray-300">
                <ul>
                    {
                        card?.pros.map((pro,index)=><li key={index}>✓ {pro}</li>)
                    }
                </ul>
            </div>
            <p className="mt-8 font-bold text-gray-300">{card?.price}</p>
            </div>
           

        ))}
        
      </div>
    
  );
}

export default PlanCard;
