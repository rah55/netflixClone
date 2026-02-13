import React from 'react'

function VideoTitleContainer({title,desc}) {
  
  
  return (
    <div className='py-36 px-10'>
      <h1 className='font-bold text-5xl '>{title}</h1>
      <p className='w-1/2 text-lg py-5'>{desc}</p>
      <div className='my-5'>
        <button className='bg-gray-300 px-10 py-2 rounded-sm mr-2 bg-opacity-100 font-bold'> ▶️ Play</button>
        <button className='bg-black text-white px-10 py-2 rounded-sm font-bold bg-opacity-40'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitleContainer
