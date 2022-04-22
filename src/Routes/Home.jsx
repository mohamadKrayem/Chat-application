import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='h-full flex gap-4 bg-orange-50 flex-col justify-center items-center'>
      <h1 className='text-6xl translate-y-32'>Welcome</h1>

      <Link to="/login" className='mt-auto'><button type="button" 
        style={{backgroundColor: '#006aff'}} 
        className="text-white font-semibold rounded-lg text-base px-6 py-4">
        Login
      </button></Link>
      <Link to="/signup" className='mb-auto'><button type="button" 
        style={{backgroundColor: '#006aff'}} 
        className="text-white font-semibold rounded-lg text-base px-6 py-4">
        Sign-Up
      </button></Link>
    </div>
  )
}

export default Home