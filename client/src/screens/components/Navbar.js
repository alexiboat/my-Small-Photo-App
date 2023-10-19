import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/nav.css'
import { useCookies } from 'react-cookie';
import getUserName from '../../hooks/useGetUserName';

const Navbar = () => {
    const [cookies, setCookies]=useCookies(["access_token"])

    const navigate = useNavigate()
    const username= getUserName()

    const logout = ()=>{
        setCookies("access_token", "")
        localStorage.removeItem("userID")
        navigate('/auth')

    }
  return (
    <div className='nav'>
        <Link className='link' to={'/'}>Home</Link>
        <Link className='link' to={'/create'}>Create Photo</Link>
        
        {!cookies.access_token?(
                <Link className='link' to={'/auth'}>Login/Register</Link>):
            (<>
               <Link className='link' to={'/save'}>Saved Photo</Link>
              <button onClick={logout}> Logout :{username}</button>
            </>)}
        
    </div>
  )
}

export default Navbar