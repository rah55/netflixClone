import React from "react";
import PlanCard from "./PlanCard";

function Plans() {
  const cardData = [
    {
      title: "Mobile",
      quality: "480p",
      pros: ["Fair video quality","For your phone or tablet"],
      price: "₹149 /mo",
      gradient:"bg-gradient-to-br from-blue-900"
    },
    {
      title: "Basic",
      quality: "720p",
      pros: ["Good video quality","For your phone, tablet, laptop and TV "],
      price: "₹199 /mo",
      gradient:"bg-gradient-to-br from-blue-900"
    },
    {
      title: "Standard",
      quality: "1080p",
      pros: ["Great video quality","For your phone, laptop and TV"],
      price: "₹499 /mo",
       gradient: "bg-gradient-to-br from-purple-900"
    },
    {
      title: "Premium",
      quality: "4K + HDR",
      pros: ["Best video quality","Immersive sound (spatial audio) ","For your phone, tablet, laptop and TV"],
      price: "₹649 /mo",
       gradient: "bg-gradient-to-br from-purple-900"
    }
  ];

  return <div className="px-4 bg-black ">
    <h1 className="text-xl md:text-3xl font-bold text-white p-4">A plan to suit your needs</h1>
    

     <PlanCard data={cardData} />
    
  </div>;
}

export default Plans;
