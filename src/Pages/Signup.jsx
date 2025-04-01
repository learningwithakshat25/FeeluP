import React, { useState } from 'react'
import Hero4 from '../assets/Hero-Asset/Signup.jpg';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Signup = () => {
  const [name, setname] = useState('');
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  const submitHandler =async (e)=>{
    e.preventDefault();
    setname('');
    setusername('');
    setemail('');
    setpassword('')
    console.log(name, username, email, password);
    await axios.post('http://localhost:3000/register', {name, username, email,password})
    .then((result) =>{
      // localStorage.setItem('token', result.data)
      console.log(result.data)})
    navigate('/login')
    .catch(err => console.log(err)
    )
  }

  return (
    <div className='main w-screen bg-[#EBC399] flex flex-row items-center justify-center'>
        <div className="left w-1/2">
            <img src={Hero4} alt="hero-4_img" />
        </div>
        <div className="right w-1/2 flex flex-col gap-10 items-center justify-center bg-[#EBC399]">
        <h1 className='text-4xl font-semibold text-black'>Signup to FeeluP</h1>
        <form
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col gap-5 items-center justify-center w-96'>
            <input
            value={name}
            onChange={(e)=>{
              setname(e.target.value)
            }}
            className='p-3 w-full rounded-lg bg-white text-black' type="text" placeholder='Full name' name='name' />
            <input
            value={username}
            onChange={(e)=>{
              setusername(e.target.value)
            }}
            className='p-3 w-full rounded-lg bg-white text-black' type="text" placeholder='Username' name='username' />
            <input
            value={email}
            onChange={(e)=>{
              setemail(e.target.value)
            }}
            className='p-3 w-full rounded-lg bg-white text-black' type="email" name="email" placeholder='Email' />
            <input
            value={password}
            onChange={(e)=>{
              setpassword(e.target.value)
            }}
            className='p-3 w-full rounded-lg bg-white text-black' type="password" name="password" placeholder='Password' />
            <input className='p-3 w-full text-white font-semibold text-md rounded-md bg-[#B60000] cursor-pointer' type="submit" value="Submit" />
        </form>
        </div>
    </div>
  )
}

export default Signup