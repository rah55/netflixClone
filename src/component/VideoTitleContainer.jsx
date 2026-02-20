import React from 'react'

function VideoTitleContainer({title,desc}) {
  
  
  return (
    <div className=' pt-[10%] md:pt-[20%] pr-40 pl-5 md:px-10 absolute text-white bg-gradient-to-r from-black w-[100%] aspect-video'>
      <h1 className='font-bold text-xl md:text-5xl '>{title}</h1>
      <p className='hidden md:inline-block w-1/3 text-lg py-5 '>{desc}</p>
      <div className='my-5 flex md:block'>
        <button className='bg-white text-black px-2 md:px-10 py-2 rounded-sm mr-2 hover:bg-opacity-90'> ▶️ Play</button>
        <button className='bg-gray-500 text-white px-2 md:px-10 py-2 rounded-sm  bg-opacity-50 hover:bg-opacity-90'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitleContainer
