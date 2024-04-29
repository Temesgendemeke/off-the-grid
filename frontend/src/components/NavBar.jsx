import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({page}) => {
    const linkpage = "/" + (page == 'signup'? 'login':'signup')
  

  return (
    <div>
        <ul className=' flex  uppercase  text-slate-100 items-center gap-4'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>about us</Link></li>
            <li className='bg-slate-100 text-black  rounded py-1 px-2 hover:bg-slate-200'><Link to={linkpage}>{page == 'signup'? 'login':'signup'}</Link></li>
        </ul>
    </div>
  )
}

export default NavBar