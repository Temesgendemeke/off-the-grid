import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Dashboard = () => {
  return (
   
    <div>
      <div className='nav flex items-center justify-between px-4 py-2 mb-5 '>
        <div>
        <Link to='/'><h1 className='text-white text-2xl  max:text-center md-lg:text-red-700 cursor-pointer uppercase hover:text-slate-100 font-bold'>OFF THE GRID</h1></Link>
        </div>
      <div className='text-white text-2xl m-4 max:text-center md-lg:text-red-700 cursor-pointer text-right hover:scale-100'>
      <Link className='hover:text-red-700 hover:translate-x-5 font-bold' to='/'>X</Link>
      </div>
      </div > 
    


      <div className="main flex text-white justify-around mt-10">
        <div className=' '>
          <h2 className='text-7xl'>name</h2>
          <p className=' text-slate-100'>email@gmil.com</p>
          <p className='mt-2 text-slate-200 text-[16px] hover:underline cursor-pointer'>edit your profile</p>
        </div>

        <div className='total '>
          <h2 className='flex items-center  justify-center border-[1px] rounded-md  border-white size-64 text-center text-7xl hover:bg-slate-950 cursor-pointer'>0:00</h2>
          <p className='text-center mt-2'>TOTAL SPENT</p>
        </div>

        <div className='compeletedtodos '>
        <h2 className='border-[1px] rounded-s-md  border-white size-64 text-7xl text-center  flex items-center  justify-center hover:bg-slate-950 cursor-pointer'>0/0 </h2>
          <p className='text-center mt-2 uppercase'>Completed tasks</p>
        </div>
      </div>    
    </div>

  )
}

export default Dashboard;