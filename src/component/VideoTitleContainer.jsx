import React from 'react'
import { Link } from 'react-router-dom'

function VideoTitleContainer({title,desc,id}) {
  
  
  return (
    <div className=' pt-20 sm:pt-[20%]  pr-40 pl-5 md:px-10 absolute text-white bg-gradient-to-r from-black w-[100%] aspect-video'>
      <h1 className='font-bold text-xl md:text-5xl '>{title}</h1>
      <p className='hidden sm:w-[50%] md:inline-block w-1/3 text-lg py-5 '>{desc}</p>
      <div className='my-5 flex md:block'>
        <button className='bg-white text-black px-2 md:px-10 py-2 rounded-sm mr-2 hover:bg-opacity-90'><Link to={`/movie/${id}`}> ▶️ Play</Link></button>
        <button className='bg-gray-500 text-white px-2 md:px-10 py-2 rounded-sm  bg-opacity-50 hover:bg-opacity-90'><Link to={`/movie/${id}`}> ℹ️ More Info </Link> </button>
      </div>
    </div>
  )
}

export default VideoTitleContainer
