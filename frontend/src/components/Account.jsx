import React from 'react'
import { useState, useContext } from 'react'
import './accout.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../App'
import axios from 'axios'


const Account = ({hidden=false, onClose}) => {
    const {signed, setSignedX} = useContext(UserContext)
    const navigate = useNavigate()

    if (hidden)
    {
      return null;
    }

    const handleBgClose = (e)=>{
      e.preventDefault()
      if (e.target.id == 'container')
      {
        onClose();
      }
    }

    const handleLogOut = ()=>{
      e.preventDefault()
      axios.get('https://off-the-grid.onrender.com/logout').then((respone)=>{
        navigate('/homepage')
      })
      setSignedX(false)
    }

   


  return (
    <div className='fixed inset-0 backdrop-blur-sm ' onClick={handleBgClose} id="container">
    <div className='text-white fixed right-[60px] top-[50px] border-2  p-10 text-center cursor-pointer uppercase '>
          {signed? <ul><li><Link to='dashboard'>Dashboard</Link></li> <Link><li onClick={handleLogOut}><Link to='homepage'>LOG OUT</Link></li></Link></ul>:<ul><li> <Link to='/login'>LOGIN</Link></li><li><Link to='/signup'>SIGN UP</Link></li></ul>}
    </div>
    </div>
  )
}

export default Account