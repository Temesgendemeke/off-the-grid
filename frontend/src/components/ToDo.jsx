import axios from 'axios';
import '../index.css'
import { useEffect, useState } from 'react';

function ToDo(props){
    const [mark, setMark] = useState(false)
    const [hide, setHide] = useState(false)


    useEffect(()=>{
        axios.post('')
    }, [])

    const checkboxhandler = (e)=>{
       setMark(e.target.checked)
       setHide(true)
    }

    let vis = mark && "line-through "
    let styles = "flex justify-center " + vis
    
    
   

    return (
        <div className={styles} >
            <div className='bg-slate-200  text-black w-1/4 flex justify-between mb-1 p-2 border rounded-md hover:bg-slate-300 size-10'
                           >
                <div className='flex'>
                <input className='ml-1 mr-1 ' type="checkbox" name="todos" id=""  onChange={checkboxhandler}   checked={mark} />
               <label  >{props.name}</label>
                </div>
                <div className='flex gap-1'>
                </div>
            </div>
        </div>
    );
}

export default ToDo;