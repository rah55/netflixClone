import React from 'react'
import { Link } from 'react-router-dom';

function Error() {
   return (
    <div className='text-center mt-[25%]  '>
      <h1 className='text-4xl font-extrabold'>Error 404 - Page Not Found😑</h1>
      <p className='text-xl font-extrabold '>The page you're looking for does not exist.</p>
      <Link to="/">
      <button  className='bg-red-500 px-5 py-2 rounded-lg text-white font-bold'>Go Home</button></Link>
    </div>
  );
}

export default Error
