import React from 'react';
import Header from '../components/Header';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <div className=' overflow-auto h-full flex bg-orange-50 flex-col'>
      <Header title="Login" />
      <form className='p-4 flex flex-col gap-4 mt-auto' onSubmit={handleSubmit}>
        <label>
          <span className='mr-2 text-3xl'>Email: </span>
          <input 
            className="h-8 p-2 border border-[#121213] rounded-lg" 
            type='email' 
            name='email' 
            value={email} 
            onChange={e=>setEmail(e.target.value)}
            placeholder="username@example.com"
            required
          />
        </label>
        <label>
          <span className='mr-2 text-3xl'>Password:</span>
          <input 
            className="h-8 p-2 border border-[#121213] rounded-lg" 
            type='password' 
            name='password' 
            value={password} 
            onChange={e=>setPassword(e.target.value)} 
            placeholder="***************" 
            required
          />
        </label>

        <button type="submit" className='py-2.5 mt-3 px-4 bg-[#006aff] w-min self-center text-xl rounded-lg text-white'>Submit</button>
      </form>

      <p className='mb-auto self-center p-4'>Don't have an accout? <Link to='/signup'><a className='text-[#006aff]'>Create-Account</a></Link></p>
    </div>
  )
}

export default Login