import React from 'react'
import Logout from './Logout'
import axios from 'axios';

const Profile = () => {
  const handle =async ()=>{
    await  axios.get('http://localhost:3000/profile').then((result)=> {
      console.log('Profile success');
    }).catch((err)=> {
      console.log(err);
    })
  }

  return (
    <div>
      profile
      <Logout />
    </div>
  )
}

export default Profile