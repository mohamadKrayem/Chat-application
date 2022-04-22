import React from 'react';
import Chat from '../components/Chat';
import Header from '../components/Header';

const Groups = () => {
  return (
    <div className=' overflow-auto h-full flex bg-orange-50 flex-col' style={{color: "#121213"}}>
      <Header title="Groups"/>
      <div className='p-3 pt-0 overflow-auto'>
        <Chat image="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" name="George Gates"/>
        <Chat image="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" name="Olivia rodrigo"/>
        <Chat image="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" name="Alan Jonsohn"/>
      </div>
    </div>
  )
}

export default Groups