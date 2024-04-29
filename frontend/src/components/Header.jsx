import { MdAccountCircle } from "react-icons/md";
import { useState } from "react";
import SignUp from '../pages/SignUp';
import Account from "./Account";

const Header = ()=>{
    const [loggined, setLoggined] = useState(false)
    const [hide, setHide] = useState(true)

    return (
        
        <div className="flex justify-center relative p-5 items-center ">
            <Account hidden={hide} onClose={()=>setHide(true)}/>
           <div><h1 className="text-white pt-5 text-3xl mb-0 ">OFF THE GRID</h1> </div>
            <div className="bg-gray-400 w-12 rounded-full absolute right-2 h-12">
            <button onClick={()=>setHide(!hide)}><MdAccountCircle className="size-12 cursor-pointer hover:scale-110" />
            </button>
            </div>
            
        </div>
    );
}

export default Header;