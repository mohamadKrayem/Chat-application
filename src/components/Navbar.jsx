import React from 'react';
import { BsChatFill } from 'react-icons/bs';
import { HiHome } from 'react-icons/hi';
import { MdGroups } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-white py-7 flex items-center justify-evenly h-12 shadow-[0_-5px_5px_-5px_rgba(0,0,0,0.3)]'>
      <Link to={"/home"}><HiHome color='#006aff' className='w-8 h-8'/></Link>
      <Link to={"/Chats"}><BsChatFill color='#006aff' className='w-8 h-8'/></Link>
      <Link to={"/groups"}><MdGroups color='#006aff' className='w-8 h-8'/></Link>
      <Link to={"/home"}><CgProfile color='#006aff' className='w-8 h-8'/></Link>
      
    </div>
  )
}

export default Navbar