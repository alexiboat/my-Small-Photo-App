import React, { useState } from 'react'
import axios from 'axios'
import {useCookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [password, setPassword]= useState("")
    const [username, setUsername]=useState("")
    const [_, setCookies]=useCookies(["access_token"])

    const navigate = useNavigate()

 const handleSubmit= async(e)=>{
    e.preventDefault()
    
    try {
        const response = await axios.post("http://localhost:9000/api/login", {username,password})
        
        setCookies("access_token", response.data.token)
       localStorage.setItem("userID",response.data.userID)
       localStorage.setItem("username", response.data.username)
        navigate('/')
    } catch (error) {
        console.log(error)
    }
} 
    
  return (
    <div>
        <form onSubmit={handleSubmit} className='form'>
            <h1>Login</h1>
        
        <div className='form-group'>
                <label htmlFor='username'> User Name:</label>
                <input type='text' id='username'placeholder='Name' 
                value={username} onChange={(e)=>setUsername(e.target.value)}/>   
        </div>
        <div className='form-group'>
                <label htmlFor='password'> Password:</label>
                <input type='password' id='password'placeholder='Password' 
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
            <button type='submit'>Login</button>
        </form>
        
    </div>
  )
}

export default Login