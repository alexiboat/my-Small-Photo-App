import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './styles/home.css'
import axios from 'axios'
import getUserID from '../hooks/useGetUserId'
import {useCookies} from 'react-cookie'



const Home = () => {
  const [savePhotos, setSavePhotos]= useState([])
  const [isLoading, setIsLoading]= useState(false)
  const [savedPhotos, setSavedPhotos]=useState([])
  const [cookies, _]=useCookies(["access_token"])

  
  const userID =getUserID()

  
useEffect(()=>{

const fetchUserPhoto = async()=>{
  setIsLoading(true)
try {
  const response = await axios.get("http://localhost:9000/api/getphoto" )
  
  setSavePhotos(response.data)
  setIsLoading(false)
  
} catch (error) {
  console.error (error)
}

}
const fetchsavedPhoto = async()=>{
  
try {
  const response = await axios.get(`http://localhost:9000/api/getsavephotoids/id/${userID}` )
  
 setSavedPhotos(response.data.savePhoto)
 
  //console.log(response.data)
} catch (error) {
  console.error (error)
}

}

fetchUserPhoto()
if(cookies.access_token){fetchsavedPhoto()}

},[])

    
const saveUserPhoto = async (photoID)=>{
  try {
    
      const response = await axios.put("http://localhost:9000/api/savephoto",
       {photoID,userID}, {headers: {authorization: cookies.access_token}})
      
      setSavedPhotos(response.data.savePhoto)
    
      //console.log(response.data.savePhoto)
    
     
  } catch (error) {
     console.error(error)
    
  }

}

const isPhotoSaved = (id)=>savedPhotos.includes(id)

  return (<div>
     <Navbar/>
    <h1 className='heading'>your photos</h1>
   
       <ul>
        {isLoading? (<h3>Loading....</h3>) :(savePhotos.map((p)=>(
        <li key={p._id}>
                <div>
                  <h2>{p.imagename}</h2>
                </div>
                <button onClick={()=>saveUserPhoto(p._id)} disabled={isPhotoSaved(p._id)}>
                  {isPhotoSaved(p._id) ? "saved":"save"}</button>
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
        </li>)))}
        
       
      
    </ul>

  </div>
  )
}

export default Home