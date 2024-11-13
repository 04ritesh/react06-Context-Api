import React, { useState } from 'react'
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {
    const [username,setusername]=useState(null);
  return (
    <UserContext.Provider value={{username,setusername}}>
    {children}
</UserContext.Provider>
  )
}

export default UserContextProvider



