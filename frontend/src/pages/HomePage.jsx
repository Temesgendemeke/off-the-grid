import '../index.css';
import AllBtn from '../components/AllBtn.jsx';
import Header from '../components/Header.jsx';
import { useState, useContext } from 'react';
import {UserContext}  from '../App.jsx';


const formatcounter = (current)=>{
  let minute = Math.floor(current / 60)
  let second = Math.floor(current - minute * 60)

  if (minute < 10) minute = '0' + minute
  if (second < 10) second = '0' + second
  
  return minute + ':' + second;
    
}

function HomePage(){
  const {work, breaktime} = useContext(UserContext)
  

  

return (
         <> 
          <Header/>
          <div className=' flex item-center justify-center'>
          <p className="min-timer text-9xl  text-white text-center  ">{formatcounter(work)}</p>
          </div>
          
          <AllBtn/>

        </>
        );
};

export default HomePage;