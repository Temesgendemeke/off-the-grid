import HomePage from './pages/HomePage.jsx';
import { Routes, Route} from "react-router-dom";
import  SignUp from './pages/SignUp.jsx';
import { Login } from './pages/Login.jsx';
import FullScreen from './pages/FullScreen.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { useState} from 'react';
import { createContext } from 'react';
import LandingPage from './pages/LandingPage.jsx';
import AboutUs from './pages/AboutUs.jsx';

export const UserContext = createContext(null);

function App(){
  const [work, setWork] = useState(45 * 60)
  const [breaktime, setBreak] = useState(5 * 60)
  const [signed, setSignedX] = useState(false)
  const [id, setId] = useState()
  const [total, setTotal] = useState()
  return (
  <>
  <UserContext.Provider value={{work,setWork,breaktime,setBreak, signed, setSignedX, id,setId, total, setTotal}}>
  <Routes>
    <Route path='/' element={<LandingPage/>}></Route>
    <Route path='/homepage' element={<HomePage />}></Route>
    <Route path='/user/:id' element={<HomePage />} ></Route>
    <Route path='/user/:id/timer' element={<FullScreen />}></Route>
    <Route path='/user/:id/Dashboard' element={<Dashboard />}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/timer' element={<FullScreen />}></Route>
    <Route path='/Dashboard' element={<Dashboard />}></Route>
    <Route path='/aboutus' element={<AboutUs/>}></Route>
  </Routes>
  </UserContext.Provider>
  </>
  
);
}

export default App;