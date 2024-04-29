import React from 'react'
import { useState } from 'react'
import './accout.css'
import { Link } from 'react-router-dom'

const Account = ({hidden=false, onClose}) => {
    const [loggined, setLogined] = useState(false)
    // const [view, setView] = useState(false)

    

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
      // do some magin here
    }

   


  return (
    <div className='fixed inset-0 backdrop-blur-sm ' onClick={handleBgClose} id="container">
    <div className='text-white fixed right-[60px] top-[50px] border-2  p-10 text-center cursor-pointer uppercase '>
          {loggined? <ul><li><Link to='dashboard'>Dashboard</Link></li><li onClick={handleLogOut}>LOG OUT</li></ul>:<ul><li> <Link to='/login'>LOGIN</Link></li><li><Link to='signup'>SIGN UP</Link></li></ul>}
    </div>
    </div>
  )
}

export default Account