import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../App'

const BreakTime = ({format}) => {
    const {breaktime, setBreak} = useContext(UserContext)
    const timerid = useRef()

    useEffect(()=>{
        timer()
        return ()=> clearInterval(timerid.current)
      }
      ,[])
    
    const timer = ()=>{
        timerid.current = setInterval(()=>{
            setBreak(prev => prev - 1)
          }, 1000) 
    }


    useEffect(()=>{
        if (breaktime <= 0)
        {
          clearInterval(timerid.current)
          return;
        }
      },[breaktime])

  return (

    <div className='fixed inset-0 flex items-center justify-center backdrop-blur-xl backdrop-brightness-50 '>
        <div className=' flex justify-center  flex-col items-center border-2  bg-slate-50 p-5 rounded-lg shadow-lg shadow-slate-800'>
           <p className='text-center font-semibold font-sans uppercase'>break time</p>
           <h1 className='text-9xl'>{format(breaktime)}</h1>
        </div>
       
    </div>
  )
}

export default BreakTime