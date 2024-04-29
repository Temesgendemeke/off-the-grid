import { useState } from 'react'
import React from 'react'
import ToDo from './ToDo'


const TodoWidget = ({clicked, showTodos}) => {
  const [todos, setTodos] = useState([])

  if (todos.length > 0 && showTodos && !clicked)
  {
    return (
      todos.map(todo => <ToDo name={todo}/>)
    )
  }
  
  if (!clicked )
  {
    return null
  }

  if (todos.length > 5)
  {
  document.getElementById('inputTodo').style.cursor = "not-allowed" 
  alert('you reached the limit please finish atleast on task')
  }
  
  const handleClick = (e)=>{
    try {
      e.preventDefault()
      
    } catch (error) {}

    let inputValue = document.getElementById('inputTodo').value.trim()
    document.getElementById('inputTodo').value = ""

    if (inputValue.length > 0 && todos.length <= 5)
    {
      setTodos((t)=> [...t, inputValue])
    }
  }


  const handleKeyDown = (e)=>{
    if (e.key == 'Enter')
    {
     handleClick() 
    }
  }
  
  return (
    <>
  {
    todos.map(todo => <ToDo name={todo}/>)
  }         
    {todos.length > 0  && <p className=' text-slate-100 fixed buttom-1 mt-3 text-center left-[50%]' >{todos.length}/5 </p>}
    
    <div className='flex justify-center items-center fixed buttom-1  mt-10 left-[40%] border-2 border-white '>

        <form action="" className=' py-5 px-2 ' >
            <input type="text" name="" id="inputTodo" className=' mr-2 p-2 rounded-md ' placeholder='write your todos' onKeyDown={handleKeyDown}/>
            <button id='' className=' border-white p-2 px-6 w-20 rounded-md text-white hover:bg-slate-950' onClick={handleClick}>ADD</button>
        </form>
    </div>
    </>
  )
}

export default TodoWidget;

