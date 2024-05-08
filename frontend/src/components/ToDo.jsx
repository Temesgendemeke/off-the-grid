import axios from 'axios';
import '../index.css'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';


function ToDo(props){
    const [hide, setHide] = useState(false)
    const {marked, setMarked} = useContext(UserContext)
    const [todos, setTodos] = useEffect([])


    useEffect(()=>{
        axios.post('', {'taskname':props.name, 'is_completed':marked})
        // axios.get(url).then((reponse)=>{
        //     reponse.data.forEach(element => {
        //         if (element in todos)
        //     });
        //     setTodos(t => [...t, reponse.data.taskname])
        // })
    },[])


    const checkboxhandler = (e)=>{
       setHide(true)
       setMarked(e.target.checked)
    }
    
    let vis = marked && "hidden"
    let styles = "flex justify-center " + vis
    
    
   

    return (
        <div className={styles} >
            <div className='bg-slate-200  text-black w-1/4 flex justify-between mb-1 p-2 border rounded-md hover:bg-slate-300 size-10'
                           >
                <div className='flex'>
                <input className='ml-1 mr-1 ' type="checkbox" name="todos" id=""  onChange={checkboxhandler}   checked={marked} />
               <label  >{props.name}</label>
                </div>
                <div className='flex gap-1'>
                </div>
            </div>
        </div>
    );
}

export default ToDo;
