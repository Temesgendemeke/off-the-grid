import React, {useState} from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

export const SignUp = () => {

   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   

const handleName = (e)=>{
    setName(e.target.value)
}
const handleEmail = (e)=>{
    setEmail(e.target.value)
}
const handlePassword = (e)=>{
    setPassword(e.target.value)
}

const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("name: " + name + '\n' + "email: " + email + '\n' + "password: " + password)
}



  return (
    <>
    <div className='flex m-4 items-center justify-between'>
    <h1 className='text-white text-2xl  max:text-center md-lg:text-red-700 cursor-pointer'>OFF THE GRID</h1>
    <NavBar page="signup"/>
    </div>
    <div className='h-screen flex justify-center '> 
        <form action="" method="post" className='flex flex-col items-center mt-10' onSubmit={handleSubmit}>
        <h2 className='text-white text-4xl'>SIGN UP</h2>
        <input type="text" name="" id="2" placeholder='name' className='p-2 rounded-md outline-none w-[300px] h-[50px] mt-2' onChange={handleName}/>
        <input type="email" name="" id="3" placeholder='email address' className='p-2 rounded-md outline-none w-[300px] h-[50px] mt-2' onChange={handleEmail}/>
        <input type="password" name="" id="1" placeholder='password'  className='p-2 mt-2 rounded-md outline-none w-[300px] h-[50px]' onChange={handlePassword}/>
        <button type='submit' className='bg-black w-[300px] mt-2 border-white border-2 rounded-md text-white h-[50px] active:bg-slate-90 hover:bg-slate-900'>Sign up</button>
        <p className='text-white mt-2'>if you aleady have an account <Link to='/login' className='hover:underline active:text-gray-300'>Login</Link></p>
        </form>
       
    </div>
    </>
  )
}

export default SignUp;
