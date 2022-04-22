import React from 'react'

const Chat = (props) => {
  return (
    <div className='mt-4'>
      <img style={{borderColor:"#006aff"}} className="inline border-2 object-cover w-12 h-12 mr-2 rounded-full" src={props.image} alt="Profile image"/>
      <span className='font-semibold text-lg'>{props.name}</span>
    </div>
  )
}

export default Chat