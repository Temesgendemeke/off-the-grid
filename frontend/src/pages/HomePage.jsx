import '../index.css';
import AllBtn from '../components/AllBtn.jsx';
import Header from '../components/Header.jsx';
import { useState, useContext } from 'react';
import {UserContext}  from '../App.jsx';



function HomePage({}){
  const {work, breaktime} = useContext(UserContext)

  

return (
         <> 
          <Header/>
          <div className=' flex item-center justify-center'>
          <p className="min-timer text-9xl  text-white text-center  ">{work}:00</p>
          </div>
          
          <AllBtn/>

        </>
        );
};

export default HomePage;