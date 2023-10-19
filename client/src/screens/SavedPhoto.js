import React from 'react'
import './styles/save.css'
import { useState, useEffect } from 'react'
import getUserID from '../hooks/useGetUserId'
import Navbar from './components/Navbar'
import axios from 'axios'

const SavedPhoto = () => {
const [savedPhotos, setSavedPhotos]=useState([])
const [isLoading, setIsLoading]= useState(false)
  
  const userID =getUserID()
  
useEffect(()=>{
const fetchsavedPhoto = async()=>{
  setIsLoading(true)
try {
  const response = await axios.get(`http://localhost:9000/api/getallsavephotos/${userID}` )
  
 setSavedPhotos(response.data.savePhoto)
 setIsLoading(false)
//console.log(response.data.savePhoto)
} catch (error) {
  console.error (error)
}

}
fetchsavedPhoto()

},[])

    const delePhoto = async(id)=>{

      try {
       await axios.delete(`http://localhost:9000/api/delete/${id}`)

       
       
      } catch (error) {
         console.error(error)
      }

      
       
    }
 

  return (<div>
     <Navbar/>
    <h1 className='heading'>your saved photos</h1>
   
       <ul>
         {isLoading ? (<h3>Loading....</h3>): ( savedPhotos.map((p)=>(
            <li key={p._id}>
                <div>
                  <h2>{p.imagename}</h2>
                </div>
                <div>
                   <p>{p.instructions}</p>
                </div>
                < div>
                  <p>{p.description}</p>
                 </div>
                <div>
                  <p>{p.ingredients}</p>
                </div>

               <img  src={p.imageurl} alt={p.imagename}/>
               <button onClick={ (e)=>delePhoto(p._id)}>remove</button>
        </li>)))}
        
       
      
    </ul>
   
  </div>
  )
}


export default SavedPhoto