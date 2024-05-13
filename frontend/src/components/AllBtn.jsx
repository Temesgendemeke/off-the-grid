import { AiTwotonePlayCircle } from "react-icons/ai";
import { CgAdd } from "react-icons/cg";
import { CgAddR } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import { useState} from "react";
import TimerWidget from "./TimerWidget";
import { Link } from "react-router-dom";


const AllBtn = ({})=> {
    const [view, setView] = useState(false)
    const [showSetting, setShowSetting] = useState(false)
    const [showtodos, setShowTodos] = useState(true)
   


    const handleTodo = (e)=> {
        e.preventDefault()
        setView(!view)
        if (!view) setShowSetting(false)
    }

    const handleSetting = (e)=>{
        e.preventDefault()
        setShowSetting(!showSetting)
        if (!showSetting) setView(false)
    }


return (
    <>
    <TimerWidget show={showSetting} onClickTimer={()=>setShowSetting(false)}/>
    

    <div className="flex justify-center items-center relative">
        <div className="bg-transparent  flex justify-around items-center w-1/4 rounded-lg border-lg border-white border-2 
                             hover:shadow-md shadow-white p-2  fixed bottom-2 ">

            <Link to='/timer'><AiTwotonePlayCircle  className="hover:scale-125 w-10 h-10 text-white cursor-pointer"/></Link>

           <button><AiOutlineSetting  className="text-white w-10 h-10 hover:scale-125 cursor-pointer active:shadow-slate-600"
                                      onClick={handleSetting}/></button> 
        </div>

    </div>
    </>
)
}

export default AllBtn;