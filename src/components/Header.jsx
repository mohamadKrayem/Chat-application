import React from 'react'

const Header = (props) => {
  return (
    <h1 className='shadow-md text-4xl p-4  w-full bg-white'>{props.title}</h1>
    
  )
}

export default Header