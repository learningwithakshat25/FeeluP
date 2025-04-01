import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleserver =async ()=>{
        await axios.get('http://localhost:3000/logout').then((result)=> {
          console.log(result);
        }).catch((err)=> console.log(err));

        console.log('click');
        navigate('/login');
    }
  return (
    <div>
      <button className='bg-red-700 text-white font-semibold p-2 rounded-md' onClick={handleserver}>Logout</button>
    </div>
  )
}

export default Logout