import React from 'react'
import './styles/create.css'
import { useState } from 'react'
import axios from 'axios'
import useGetUserId from '../hooks/useGetUserId'
import { useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useCookies } from 'react-cookie'


const CreatePhoto = () => {
  const [cookies, _]=useCookies(["access_token"])
  const navigate = useNavigate()
  const userID =useGetUserId()

  const [photo, setPhoto]=useState({
    imagename:"",
    ingredients:[],
    description:"",
    instructions: "",
    imageurl:"",
    userOwner:userID
  })

  const handleChange = (e)=>{
    const {name, value} = e.target
   setPhoto({...photo, [name]:value})
  }

  const addImpressions = ( )=>{
   setPhoto({...photo, ingredients:[...photo.ingredients,"" ]})
  }
  
  const handleIngredients = ( e, indx)=>{
    const {value}= e.target
    const ingredients=photo.ingredients
     ingredients[indx]=value
    setPhoto({...photo, ingredients})
   }

   
  const handleSubmit = async (e)=>{
    e.preventDefault()
   try {
    await axios.post("http://localhost:9000/api/postphoto", photo, {headers: {authorization: cookies.access_token}})
    alert('Photo created successfully')
    navigate('/')
   } catch (error) {
     console.log(error)
   }
  }
//console.log(photo)

  return (

    <div>
       <Navbar/>

       <div className='create-photo'>
        
        <h1>create your photo</h1>
        <form  onSubmit={handleSubmit}>
          <div className='flex'>
               <label htmlFor='imagename'> Photo Name:</label>
               <input type='text' id='imagename'name='imagename' onChange={handleChange}/>
          </div>
          
           <div className='flex'>
                     <label htmlFor='ingredients'> Ingredients:</label>

                      {photo.ingredients.map((ingredient,indx)=>(

                      <input key={indx} type='text'
                       onChange={ (e)=>(handleIngredients(e,indx))}
                       name='ingredients'
                      value={ingredient}/>

                    ))}
           </div>
          
           <button className='button' type='button' onClick={addImpressions}>add your impressions</button>
            <div className='flex'>
                <label htmlFor='description'> description:</label>
               <textarea id='description'name='description' onChange={handleChange}></textarea>

            </div>
            <div className='flex'>
               <label htmlFor='instructions'> Image Instructions:</label>
                <input type='text' id='instructions'name='instructions' onChange={handleChange}/>
            </div>
           
            <div className='flex'>
                <label htmlFor='imageurl'> Put Image URL:</label>
                <input type='text' id='imageurl'name='imageurl' onChange={handleChange}/>
             </div>
           
        </form>
        <button className='submit' type='submit' onClick={handleSubmit}>submit</button>
      </div>
    </div>
    
      

    
    
  )
}

export default CreatePhoto