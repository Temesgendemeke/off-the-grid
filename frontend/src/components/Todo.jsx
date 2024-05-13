import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../App'


const TestTodo = () => {
    const [checked, setChecked] = useState(false)
    const [noofdone, setDone] = useState(0)
    const {list, setList} = useContext(UserContext)



    useEffect(()=>{
        if (list.length  == 5)
            {
                document.getElementById('userform').style.display = 'none'
            }
        else{
            document.getElementById('userform').style.display = 'flex'
        }
    },[list])

    
   const handleCheck = (e, index)=>{
    setChecked(e.target.checked)
    if (e.target.checked)
    {
        setList(list.filter((element, i) => i != index))
        setDone(noofdone + 1)
    }
   }
   

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        const taskname = document.getElementById('inputz').value
        document.getElementById('inputz').value = ''
        setList(prev => [...prev, taskname])
    }



    

  return (
    <div >

    <div className='flex justify-center items-center flex-col'>
    <ul>
       {list.map((element, index)=>(<li className=' bg-slate-50 p-2 w-60 mt-1  rounded-lg hover:no-underline' key={index} onChange={(e) => handleCheck(e, index)}>
                <input type="checkbox" className='mr-2'  value={element} />
                <label htmlFor="">{element}</label>
            </li>))
        }
    
     </ul>
     {list.length > 0 && <p className='text-white '>{list.length}/5 </p>}
     
        <form className="userinput bg-white mt-4 border-2 rounded-xl" id="userform" onSubmit={handleSubmit}>
            <input type="text" name="" id="inputz"  className='w-40 p-2 outline-none rounded-xl' placeholder='add your todos here'/>
            <button type='submit' className='bg-black text-white w-20  rounded-xl'>ADD</button>
        </form>
    </div>

    
    {list.length >= 5 && <p className='uppercase w-96 text-white p-2 bg-red-950 font-bold'>todos limit is reached <br/>please completed atleast one task</p>}


    

    

        
    </div>
  )
}

export default TestTodo