import React, {useState, useContext} from 'react'
import { UserContext } from '../App';


const TimerWidget = ({show, onClickTimer}) => {
  const {setWork, setBreak} = useContext(UserContext);



  
  
  const handleWork = (e)=>{
    setWork(e.target.value * 60)
  }
  const handleBreak = (e)=>{
    setBreak(e.target.value * 60)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (e.target.id == "timerid" || e.target.id == 'btn-id' || e.target.id=="formid") 
    {
     
     onClickTimer()
    }
  }
  if (!show) return null;


  return (
    <div className='fixed inset-0  flex item-center justify-center backdrop-blur-xl backdrop-brightness-50' id="timerid" onClick={handleSubmit}>
    <form className='flex justify-center  flex-col items-center ' id="formid" onSubmit={handleSubmit} action="">
       <label htmlFor="" className='text-white text-left uppercase'>work time</label>
       <input type="number" name="" id="" className='mr-2 p-2 rounded-md mt-2 w-[300px] h-[50px] '  placeholder='enter in minute'   onChange={handleWork}/>
       <label htmlFor="" className='text-white uppercase mt-2'>break time</label>
       <input type="number" name="" id="" className='mr-2 p-2 rounded-md mt-2 w-[300px] h-[50px] ' placeholder='break in minute '  onChange={handleBreak}/>
       <button type="submit" className='bg-black border-2 border-white   rounded-md text-white hover:bg-slate-950 mt-2 w-[300px] h-[50px] mr-2 active:bg-slate-900' id='btn-id'>ADD</button>
    </form>    
    </div>
  )
}

export default TimerWidget;