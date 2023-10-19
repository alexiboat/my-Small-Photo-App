import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {

    const [ username, setUsername]=useState("")
    const [ password, setPassword]= useState("")


    const onSubmit = async (e)=>{

        e.preventDefault()
        try {
        await axios.post("http://localhost:9000/api/register", {username,password})
         alert('User Registered successfully. Please proceed to login') 
         setPassword('')
         setUsername('')
        } catch (error) {
            console.log(error)
        }

     
    }

  return (
    <div>
         <form onSubmit={onSubmit} className='form'>
            <h1>Register</h1>
            <div className='form-group'>
                <label htmlFor='username'> User Name:</label>
                <input type='text' id='username'placeholder='Name' 
                value={username} onChange={(e)=>setUsername(e.target.value)} required/>   
            </div>
            <div className='form-group'>
                <label htmlFor='password'> Password:</label>
                <input type='password' id='password'placeholder='Password' 
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Register