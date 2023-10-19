import React from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import Home from './screens/Home';
import Auth from './screens/Auth';
import CreatePhoto from './screens/CreatePhoto';
import SavedPhoto from './screens/SavedPhoto';



const router = createBrowserRouter([

  
  
{ path:'/' , element:<Home></Home>},
{ path:'/auth' , element:<Auth></Auth>},
{ path:'/save' , element:<SavedPhoto></SavedPhoto>},
{ path:'/create' , element:<CreatePhoto></CreatePhoto>}

])

function App() {
  return ( < div className='app'>
    <RouterProvider router={router}/>
  </div>)
   
  
}

export default App;
