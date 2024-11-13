import React, { createContext, useContext } from 'react'
import UserContext from '../context/UserContext'


const Profile = () => {
    const {username}=useContext(UserContext)
    
console.log({username})
if(!username){
    return(
        <h1>User does not exist</h1>
    )
}
  return (
    <div>
      In Profile of <span className='text-orange-500 text-6xl'>{username.user}</span>
    </div>
  )
}

export default Profile
