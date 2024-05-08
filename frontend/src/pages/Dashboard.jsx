import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { UserContext } from '../App';


const Dashboard = () => {
  const {id, total, setTotal} = useContext(UserContext)
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  
  const [todo_count, setTodoCount] = useState(0)
  
  const temp_id = id
  let count;

  useEffect(()=>{
    axios.get('https://off-the-grid.onrender.com/dashboard/'+ temp_id).then((response)=> {
      for (let data in response.data)
        {
          setName(response.data[data].name)
          setEmail(response.data[data].email)
          setTotal(response.data[data].totaltime)
          setTodoCount(response.data[data].totaltime)
        }

        for (count in response.data)
          {
            if (1){count++}
          }
        setTodoCount(count)
    }
    )
  })


  return (

    
   
    <div>
      <div className='nav flex items-center justify-between px-4 py-2 mb-5 '>
        <div>
        <Link to='/'><h1 className='text-white text-2xl  max:text-center md-lg:text-red-700 cursor-pointer uppercase hover:text-slate-100 font-bold'>OFF THE GRID</h1></Link>
        </div>
      <div className='text-white text-2xl m-4 max:text-center md-lg:text-red-700 cursor-pointer text-right hover:scale-100'>
      <Link className='hover:text-red-700 hover:translate-x-5 font-bold' to={'/user/'+id}>X</Link>
      </div>
      </div > 
    


      <div className="main flex text-white justify-around mt-10">
        <div className=' '>
          <h2 className='text-7xl'>{name}</h2>
          <p className=' text-slate-100'>{email}</p>
        </div>

        <div className='total '>
          <h2 className='flex items-center  justify-center border-[1px] rounded-md  border-white size-64 text-center text-7xl hover:bg-slate-950 cursor-pointer'>{total}</h2>
          <p className='text-center mt-2'>TOTAL SPENT</p>
        </div>

        <div className='compeletedtodos '>
        <h2 className='border-[1px] rounded-s-md  border-white size-64 text-7xl text-center  flex items-center  justify-center hover:bg-slate-950 cursor-pointer'>{todo_count} </h2>
          <p className='text-center mt-2 uppercase'>Completed tasks</p>
        </div>
      </div>    
    </div>

  )
}

export default Dashboard;