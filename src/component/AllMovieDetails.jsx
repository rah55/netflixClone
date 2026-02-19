import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";

function AllMovieDetails() {
    const {id }= useParams();
    console.log(id);
  return (
    <div className=''>
      <Header/>
        <p>id :{id}</p>
    </div>
  )
}


export default AllMovieDetails;
