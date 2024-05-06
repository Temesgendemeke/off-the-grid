import React, {useState} from 'react'
import NavBar from '../components/NavBar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import { UserContext } from '../App'

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const {setSignedX, id,setId} = useContext(UserContext)

  const handleEmail = (e)=>{
    setEmail(e.target.value)}
 const handlePassword = (e)=>{
    setPassword(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("email: " + email + '\n' + "password: " + password)
    axios.post('http://127.0.0.1:5000/login', {'email':email, 'password':password}).then(
      (response) =>{
        setId(response.data.id)
        navigate('/user/'+ response.data.id)
        setSignedX(true)
      }
    ).catch(
      (error)=>
        {
          if (error.response?.status == 401)  alert("enter correct email or password")

        }
    )
}
  return (
    <>
    <div className='flex m-4 items-center justify-between'>
    <h1 className='text-white text-2xl  max:text-center md-lg:text-red-700 cursor-pointer font-sans'>OFF THE GRID</h1>
    <NavBar page="login"/>
    </div>
    <div className='flex mt-10 justify-center h-screen'>
    <form action="" method="post" className='flex flex-col' onSubmit={handleSubmit}>
    <h2 className='text-white text-center font-bold text-4xl'>LOGIN</h2>

    <input type="email" name=""  placeholder='email address'  className='text-black mt-2 p-2 rounded-md w-[350px]' onChange={handleEmail}/>
    <input type="password" name=""  placeholder='password' className=' mt-2 p-2 rounded-md w-[350px]'  onChange={handlePassword}/>
    <button type='submit' className='text-white border-2 border-white rounded-md p-2 mt-2 hover:bg-slate-950 active:text-black-400'>LOGIN</button>
    <p className='text-white text-[15px] mt-1'>create an account <Link to='/signup' className='hover:underline font-bold'>here</Link></p>
    </form>
    
    </div>
    </>
  )
}
