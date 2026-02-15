import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

function MovieCard({title,poster}) {
  return (
    <div className='w-48 '>
        
        <img src={IMG_CDN_URL+poster} alt={title} />
      
    </div>
  )
}

export default MovieCard
