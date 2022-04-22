import React from 'react';
import Header from '../components/Header';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {HiPlusCircle} from 'react-icons/hi';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState();
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  function handleSubmit(e){
    e.preventDefault();
  }

  function validateImage(event){
    let file = event.target.files[0];
    if(file.size >= 1048576) return alert("the images's size must be 1mb or less");
    else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }

  return (
    <div className=' overflow-auto h-full flex bg-orange-50 flex-col'>
      <Header title="Sign-Up" />
      <form className='p-4 flex flex-col gap-4 mt-auto' onSubmit={handleSubmit}>
        
        <label htmlFor='image' className='self-center'>
          <img className="inline border-[#006aff] border object-cover w-20 h-20 mr-2 rounded-full" src={imagePreview ||"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} alt="Profile image"/>
          <span><HiPlusCircle className='w-6 h-6 translate-x-14 -translate-y-4 text-[#006aff]' /></span>
        </label>
        <input type="file" id="image" hidden accept='image/png, image/jpg, image/jpeg' onChange={validateImage} />

        <label>
          <span className='mr-2 text-2xl'>Name: </span>
          <input 
            className="h-8 p-2 border border-[#121213] rounded-lg" 
            type='text' 
            name='Name' 
            value={name} 
            onChange={e=>setName(e.target.value)}
            placeholder="Your Name"
            required
          />
        </label>
        <label>
          <span className='mr-2 text-2xl'>Email: </span>
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
          <span className='mr-2 text-2xl'>Password:</span>
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

      <p className='self-center mb-auto p-4'>Already have an accout? <Link to='/login'><a className='text-[#006aff]'>Sign-in</a></Link></p>
    </div>
  )
}

export default Signup