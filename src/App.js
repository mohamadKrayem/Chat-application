import './App.css';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {

  return(
    <div className='flex flex-col h-screen'>
      <Outlet />
      <Navbar />
    </div>
  )
}

export default App;
