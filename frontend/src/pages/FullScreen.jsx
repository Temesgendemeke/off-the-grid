import React, { useRef } from 'react'
import axios from 'axios';
import { useState, useEffect, useContext, useref} from 'react';
import { Link } from 'react-router-dom';
import { FaRegStopCircle } from "react-icons/fa";
import { UserContext } from '../App';
import BreakTime from '../components/BreakTime';



const formatcounter = (current)=>{
  let minute = Math.floor(current / 60)
  let second = Math.floor(current - minute * 60)

  if (minute < 10) minute = '0' + minute
  if (second < 10) second = '0' + second
  
  return minute + ':' + second;
    
}


const FullScreen = () => {
  const {work, breaktime, setWork, id, total} = useContext(UserContext)
  const [quotes, setQuote] = useState([])
  const [current, setCurrent] = useState(work)
  const timerid = useRef()
  

  

  useEffect(()=>{
    axios.get('https://api.adviceslip.com/advice').then((response)=>{
      setQuote((q) => [...q, response.data.slip.advice])
    })
  }, [])

  useEffect(()=>{
    timerid.current = setInterval(()=>{
      setCurrent(prev => prev - 1)
    }, 1020)
    return ()=> clearInterval(timerid.current)
  }
  
  
  ,[])

  useEffect(()=>{
    if (current <= 0)
    {
      clearInterval(timerid.current)
      return;
    }
  },[current])


  


  
 
   const handlePause = (e)=>{
       e.preventDefault()
       setWork(current)
       axios.post('https://off-the-grid.onrender.com/updatetotal'+ id, {
        totaltime: (work + (current- work))
       })
   }


  return (
    <div >
        {current == 0 && (breaktime != 0 && <BreakTime format={formatcounter}/>)}
        <div><h1 className="text-white text-sm text-center pt-5 md:text-3xl">OFF THE GRID</h1> </div>
        <div className='mt-5'>
        <p className="full-timer text-9xl text-white text-center text-[300px] ">{formatcounter(current)}</p>
        </div>
        <div className='flex items-end  justify-between gap-2  h-32 px-2'>
        
            <div className=' w-11/12 ml-10'>
            <p className='quote text-slate-100 text-sm'>{
              quotes[0]
            }</p>
            </div>
            <Link to='/homepage' className='text-white mr-5 hover:scale-105' ><FaRegStopCircle  className='text-white size-10'/></Link>
        </div>
    </div>

  )
}

export default FullScreen;