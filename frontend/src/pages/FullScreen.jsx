import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegStopCircle } from "react-icons/fa";


const FullScreen = () => {
  const [quotes, setQuote] = useState([])
  useEffect(()=>{
    axios.get('https://api.adviceslip.com/advice').then((response)=>{
      console.log(response)
      console.log(response.data.slip)
      setQuote((q) => [...q, response.data.slip])

    })
  }, [])


  return (
    <div>
        <div><h1 className="text-white text-sm text-center pt-5 md:text-3xl">OFF THE GRID</h1> </div>
        <div className='mt-5'>
        <p className="full-timer text-9xl text-white text-center text-[450px] ">0:00</p>
        </div>
        
        
        <div className='flex items-end  justify-between gap-2  h-32 px-2'>
            
            <div className=' w-11/12 ml-10'>
            <p className='quote text-slate-100 text-sm'>{
              quotes.map(qoute => qoute.advice)
            }</p>
            </div>
            <Link to='/' className='text-white mr-5 hover:scale-105'><FaRegStopCircle  className='text-white size-10'/></Link>
        </div>
    </div>

  )
}

export default FullScreen;