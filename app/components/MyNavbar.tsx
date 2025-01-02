"use client";
import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { FaBars } from "react-icons/fa";
import { MenuContext } from "./context/MenuContext";
import { GrResources } from "react-icons/gr";
import {FaAngleRight,FaAngleDown} from "react-icons/fa"
////////////
import { FaUserDoctor } from "react-icons/fa6";
import { LuApple } from "react-icons/lu";
import { IoNavigateCircleOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineArticle } from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import {useSideContext} from "./context/side-context";
import { useAuthenticator } from '@aws-amplify/ui-react';
/////////

const MyNavbar = () => {
 
const {side,setSide}=useSideContext();
console.log("side",side);
  //typescript const { toggle } = useContext(MenuContext);
//typescript  const {open}=useContext(MenuContext);
  /////////////////////////////////////////
  const togelSide=()=> {
    // toggle();
     setSide((prev)=> !prev);
     console.log("side",side);

 }
  const closeMenue=()=> {
     // toggle();
      setsubMenu(false);
     
  }
  /////////////////////////////////
  const [subMenu, setsubMenu]= useState(false);

  const toggle2=()=> {
    //  console.log({open});
    setsubMenu((prev)=> !prev);
    
  }
  ///////////////////////////////////////////
    const [isOpen,setIsopen]=useState(false)
  return (
    
   <nav  className='  justify-end  mb-2 md:mr-10 '>
   <div className='md:hidden flex justify-end items-center  mr-3'>
    {/*<button  onClick={()=>{ setIsopen(!isOpen)}}>  */}
    
    <div onClick={togelSide} className='p-1'> {/*trypescript convert toggle2 to toggle */} 
     <FaBars className="cursor-pointer  text-[#0b0326] hover:text-black" />
     </div>
   {/*}    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="currentColor"
        //class="bi bi-google"
        viewBox="0 0 16 16"
      >
        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
      </svg>
*/}
    {/*</button>*/}
</div> 
  
<div className={"hidden  md:flex md:justify-end md:items-center "}>
<Link href="/" className='text-[#0b0326] hover:text-gray-400  mr-4 font-semibold text-sm' onClick={closeMenue}>
Home
</Link>
<Link href="../pages/aboutibd" className='  text-[#0b0326] hover:text-gray-400  mr-4 font-semibold text-sm'  onClick={closeMenue}>
About IBD
</Link>
<Link href="../pages/aihelp" className=' text-[#0b0326] hover:text-gray-400 mr-4 font-semibold text-sm'  onClick={closeMenue}>
AI Help
</Link>
<div className=' flex  flex-row   justify-between items-center'>
<h3 className=' text-[#0b0326] hover:text-gray-400  cursor-pointer  font-semibold text-sm'  onClick={toggle2}>Gutpedia</h3>

<div className='flex flex-col  justify-start items-center'>

{ subMenu&&<FaAngleDown  className=' text-[#0b0326] hover:text-gray-400  rounded-xl cursor-pointer   mr-4 font-semibold text-sm' onClick={toggle2}/>}
{!subMenu&&<FaAngleRight className='  text-[#0b0326] hover:text-gray-400  rounded-xl cursor-pointer   mr-4 font-semibold text-sm' onClick={toggle2}/>}

{ subMenu&&
<ul className='absolute top-14  ... flex flex-col justify-start items-start  mt-8 bg-[#33265e] rounded-xl p-2 '>
<li className='flex justify-end items-end  text-[#ecd6fb]  text-2xl  rounded-xl p-2'>
<IoMdClose className='mr-2  [#ecd6fb] cursor-pointer hover:bg-[#ecd6fb] hover:text-black   ' onClick={closeMenue}/>

        </li>
    <li className='flex justify-center items-center  text-[#ecd6fb] gap-4 hover:bg-[#ecd6fb] hover:text-[#33265e]  rounded-xl p-2 '>
<FaUserDoctor className='mr-2  [#ecd6fb]'/>
<Link href={"../pages/doctors"} onClick={closeMenue} className='  mr-4 font-semibold text-sm'>Doctors</Link>
    </li>
    <li className='flex justify-center items-center gap-4  text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e]  rounded-xl p-2'>
<LuApple className='mr-2  [#ecd6fb]'/>
<Link href={"../pages/dietitian"} onClick={closeMenue} className='  mr-4 font-semibold text-sm'>⁠Dietitian</Link>
    </li>
    <li className='flex justify-center items-center gap-4 text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e]  rounded-xl p-2'>
<IoNavigateCircleOutline className='mr-2  [#ecd6fb]'/>
<Link href={"../pages/toiletnavigator"} onClick={closeMenue} className='  mr-4 font-semibold text-sm'>⁠Toilet Navigator</Link>
    </li>
    <li className='flex justify-center items-center gap-4  text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e]  rounded-xl p-2'>
<MdOutlineManageAccounts className='mr-2  [#ecd6fb]'/>
<Link href={"../pages/manageibd"} onClick={closeMenue} className='  mr-4 font-semibold text-sm'>⁠Manage IBD</Link>
    </li>
    <li className='flex justify-center items-center gap-4  text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e]  blue-800 rounded-xl p-2'>
<MdOutlineArticle className='mr-2  [#ecd6fb]'/>
<Link href={"../pages/articles"} onClick={closeMenue} className='  mr-4 font-semibold text-sm'>⁠Articles</Link>
    </li>
    <li className='flex justify-center items-center gap-4  text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e]  rounded-xl p-2'>
<GoOrganization className='mr-2  [#ecd6fb]'/>
<Link href={"../pages/organizations"} onClick={closeMenue} className='  mr-4 font-semibold text-sm'>⁠Organizations</Link>
    </li>
</ul>
}
</div>
</div>
<Link href="../pages/aboutus" className='  text-[#0b0326] hover:text-gray-400  mr-4 font-semibold text-sm'  onClick={closeMenue}>
About Us
</Link>
<Link href="../pages/contact-us" className='  text-[#0b0326] hover:text-gray-400  mr-4 font-semibold text-sm'  onClick={closeMenue}>
Contact Us
</Link>
</div>



       

      
        </nav>
  )
}

export default MyNavbar