import HomePage from './pages/HomePage.jsx';
import { Routes, Route} from "react-router-dom";
import  SignUp from './pages/SignUp.jsx';
import { Login } from './pages/Login.jsx';
import FullScreen from './pages/FullScreen.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { useState } from 'react';
import { createContext } from 'react';

export const UserContext = createContext(null);

function App(){
  const [work, setWork] = useState(45)
  const [breaktime, setBreak] = useState(5)


  return (
  <>
  <UserContext.Provider value={{work,setWork,breaktime,setBreak}}>
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/homepage' element={<HomePage />}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/timer' element={<FullScreen />}></Route>
    <Route path='/Dashboard' element={<Dashboard/>}></Route>
  </Routes>
  </UserContext.Provider>
  </>
  
);
}

export default App;