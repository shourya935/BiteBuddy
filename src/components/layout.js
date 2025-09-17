import React, { useEffect, useState } from 'react'
import Header from './Header'

import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import UserContext from '../Utils/useContext';
import { Provider } from 'react-redux';
import appStore from '../Utils/appStore';


function Layout() {
  const [username,setUsername] = useState("")
useEffect(() => 
{

   const data = {
      name:"shourya"
  }
  setUsername(data.name)
 
 
},[])
//with UserContext.provider we can provide diffrent context like for example inside compelete app loggedin
//  user is shourya and in header component loggedinUser is batman 
  return (
   
    <>
    <Provider store={appStore}>
     <UserContext.Provider value={{loggedInUser:username,setUsername}}> 
      {/* <UserContext.Provider value={{loggedInUser:"batman"}}> */}
    <Header/>
    {/* </UserContext.Provider> */}
    
    <Outlet/>
    <Navbar/>
    </UserContext.Provider>
    </Provider>
    </>
  )
}

export default Layout