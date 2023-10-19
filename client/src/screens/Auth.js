import React from 'react'
import './styles/auth.css'
import Register from './components/Register'
import Login from './components/Login'
import Navbar from './components/Navbar'

const Auth = () => {

   
  return (

    <div>
       <Navbar/>
      <div className='auth'>
        <div className='login'> 
          <Login/>
        </div>
      
        <div className='register'> 
          <Register/>
        </div>

    </div>
    </div>
  )
}


export default Auth