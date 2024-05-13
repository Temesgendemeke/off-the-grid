import React from 'react'
import { useNavigate} from 'react-router'
import { Link } from "react-router-dom";
const Test = () => {
    const navigate = useNavigate()


  return (
    <div>
    <Link to={'/user/' + 1} className='bg-white w-20 '>login</Link>
    
   
    </div>
  )
}

export default Test