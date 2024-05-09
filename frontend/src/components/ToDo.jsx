import axios from 'axios';
import '../index.css'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';


function ToDo(props){
    const [hide, setHide] = useState(false)
    const {marked, setMark} = useContext(UserContext)
    // const [mark, setMark] = useState()


    const checkboxhandler = (e)=>{
        console.log(e)
       setHide(true)
       console.log(e.target.checked)
       setMark(e.target.checked)
       document.getElementById('todoid').style.display = 'hidden'
     
    }
    
    let vis = marked && "hidden"
    let styles = "flex justify-center " + vis
    
    
   

    return (
        <div className={styles} >
            <div className='bg-slate-200  text-black w-1/4 flex justify-between mb-1 p-2 border rounded-md hover:bg-slate-300 size-10' id="todoid">
                <div className='flex'>
                <input className='ml-1 mr-1 ' type="checkbox" name="todos"  onChange={checkboxhandler}   checked={marked} />
               <label  >{props.name}</label>
                </div>
                <div className='flex gap-1'>
                </div>
            </div>
        </div>
    );
}

export default ToDo;
