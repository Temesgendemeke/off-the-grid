import React, {useContext} from 'react'
import { Link } from 'react-router-dom'


const NavBar = ({page}) => {
    
    const linkpage = "/" + (page == 'signup'? 'login':'signup')
    
  

  return (
    <div className='flex justify-between'>
       <Link to='/homepage'><h1 className="text-white pt-5 text-3xl mb-0  ml-2 cursor-pointer">OFF THE GRID</h1></Link> 
        <ul className=' flex  uppercase  text-slate-100 items-center gap-4 p-2'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/aboutus'>about us</Link></li>
            <li className='bg-slate-100 text-black  rounded py-1 px-2 hover:bg-slate-200'><Link to={linkpage}>{page == 'signup'? 'login':'signup'}</Link></li>
        </ul>
    </div>
  )
}

export default NavBar