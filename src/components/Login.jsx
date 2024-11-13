import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [user,suser]=useState('')
    const [pass,spass]=useState('')

    const {setusername}=useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault();
        setusername({user,pass})
    }
  return (
    <div>
      <input
        type='text'
        placeholder='username'
        onChange={(e)=>suser(e.target.value)}
      />
      <input
        type='text'
        placeholder='password'
        onChange={(e)=>spass(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
