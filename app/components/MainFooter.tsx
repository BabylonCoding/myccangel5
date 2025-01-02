"use client";
import { Button } from "@material-tailwind/react";
import { FaBars } from "react-icons/fa";
import { MenuContext } from "./context/MenuContext";
import Link from 'next/link'
import React, { useState, useContext } from 'react'
import { GrResources } from "react-icons/gr";
import {FaAngleLeft,FaAngleDown} from "react-icons/fa"
import { FaUserDoctor } from "react-icons/fa6";
import { LuApple } from "react-icons/lu";
import { IoNavigateCircleOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineArticle } from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import { FaYoutube } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

////
const MainFooter = () => {
 //typrscript const { toggle } = useContext(MenuContext);
//typrscript   const {open}=useContext(MenuContext);
  /////////////////////////////////////////
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
  return (
  
    
 <div className=" relative flex flex-row justify-between items-center  bg-[#ecd6fb]">
<div className="flex flex-1  mt-1 flex-col justify-start items-start  ">


<Image className="md:ml-10 ml-2"
      src={"/images/mycronns.png"}
      alt="Picture of the author"
       width={200} //automatically provided
       height={200} //automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
   
<p className="font-serif text-[#474545] text-xs mt-1 md:ml-12 ml-4">  &copy; COPYRIGHT 2024 MyCCAngel</p>
<TbGridDots className=' text-[#dcc6f0]  text-9xl md:ml-10 ml-2 ' />

</div>

<div className="flex  flex-1 flex-col justify-center items-center mt-16 ">
<div className="flex flex-row mb-2">

<Link href={"https://www.youtube.com/@MyCCAngel/"}>
<FaYoutube className='mr-2   text-[#0b0326] hover:text-gray-400  cursor-pointer '  />
</Link>
<Link href={"https://www.linkedin.com/in/my-crohn-s-and-colitis-angel/"}>
<IoLogoLinkedin className='mr-2   text-[#0b0326] hover:text-gray-400  cursor-pointer '  />
</Link>

<Link href={"https://www.facebook.com/groups/1062597935342143"}>
<IoLogoFacebook className='mr-2   text-[#0b0326] hover:text-gray-400  cursor-pointer '  />
</Link>

<Link href={"https://x.com/MyCCAngel"}>
<FaXTwitter className='mr-2   text-[#0b0326] hover:text-gray-400  cursor-pointer '  />
</Link>
<Link href={"https://www.instagram.com/myccangel/"}>
<FaInstagram className='mr-2   text-[#0b0326] hover:text-gray-400  cursor-pointer '  />
</Link>
</div>
<p>Support us in our journey</p>
<Link href={"/"} className="mt-4 mb-4" >
       <button  className=" text-[#ecd6fb] bg-lime-500 p-1 hover:bg-gray-200 hover:text-[#33265e] min-w-32" >Support now</button>
       </Link>
<p className="flex font-serif text-[#474545] text-xs mb-2"> assistant@myccangel.org </p>





</div>

<div className="flex flex-1 justify-end items-end">
<div className="hidden md:flex flex-col justify-end items-end mb-14 mr-10 ">


<Link href="/" className='text-[#0b0326] hover:text-gray-400   font-thin text-sm' onClick={closeMenue}>
Home
</Link>
<Link href="../pages/aboutibd" className='  text-[#0b0326] hover:text-gray-400   font-thin text-sm'  onClick={closeMenue}>
About IBD
</Link>
<Link href="../pages/aihelp" className=' text-[#0b0326] hover:text-gray-400  font-thin text-sm'  onClick={closeMenue}>
AI Help
</Link>
<div className=' flex  flex-row   justify-between items-center'>
{ subMenu&&<FaAngleDown  className=' text-[#0b0326] hover:text-gray-400  rounded-xl cursor-pointer  font-thin text-sm' onClick={toggle2}/>}
{!subMenu&&<FaAngleLeft className='  text-[#0b0326] hover:text-gray-400  rounded-xl cursor-pointer    font-thin text-sm' onClick={toggle2}/>}

<h3 className=' text-[#0b0326] hover:text-gray-400  cursor-pointer   font-thin text-sm'  onClick={toggle2}>Gutpedia</h3>

<div className='flex flex-col  justify-start items-center'>


{ subMenu&&
<ul className='absolute flex bottom-1 right-28 flex-col justify-start items-start   bg-[#33265e] rounded-xl p-2 '>
<li className='flex justify-end items-end  text-[#ecd6fb]  text-2xl  rounded-xl p-2'>
<IoMdClose className='mr-2  [#ecd6fb] cursor-pointer hover:bg-[#ecd6fb] hover:text-black   ' onClick={closeMenue}/>

        </li>
    <li className='flex justify-center items-center  text-[#ecd6fb] gap-4 hover:bg-[#ecd6fb] hover:text-[#33265e]  rounded-xl p-2 '>
<FaUserDoctor className='mr-2  [#ecd6fb]'/>
<Link href={"../pages/doctors"} onClick={closeMenue} className='  mr-4 font-thin text-sm'>Doctors</Link>
    </li>
    <li className='flex justify-center items-center gap-4  text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e]  rounded-xl p-2'>
<LuApple className='mr-2  [#ecd6fb]'/>
<Link href={"../pages/dietitian"} onClick={closeMenue} className='  mr-4 font-thin text-sm'>⁠Dietitian</Link>
    </li>
    <li className='flex justify-center items-center gap-4 text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e]  rounded-xl p-2'>
<IoNavigateCircleOutline className='mr-2  [#ecd6fb]'/>
<Link href={"../pages/toiletnavigator"} onClick={closeMenue} className='  mr-4 font-thin text-sm'>⁠Toilet Navigator</Link>
    </li>
    <li className='flex justify-center items-center gap-4  text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e]  rounded-xl p-2'>
<MdOutlineManageAccounts className='mr-2  [#ecd6fb]'/>
<Link href={"../pages/manageibd"} onClick={closeMenue} className='  mr-4 font-thin text-sm'>⁠Manage IBD</Link>
    </li>
    <li className='flex justify-center items-center gap-4  text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e]  blue-800 rounded-xl p-2'>
<MdOutlineArticle className='mr-2  [#ecd6fb]'/>
<Link href={"../pages/articles"} onClick={closeMenue} className='  mr-4 font-thin text-sm'>⁠Articles</Link>
    </li>
    <li className='flex justify-center items-center gap-4  text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e]  rounded-xl p-2'>
<GoOrganization className='mr-2  [#ecd6fb]'/>
<Link href={"../pages/organizations"} onClick={closeMenue} className='  mr-4 font-thin text-sm'>⁠Organizations</Link>
    </li>
</ul>
}
</div>
</div>
<Link href="../pages/aboutus" className='  text-[#0b0326] hover:text-gray-400   font-thin text-sm'  onClick={closeMenue}>
About Us
</Link>
<Link href="../pages/contact-us" className='  text-[#0b0326] hover:text-gray-400   font-thin text-sm'  onClick={closeMenue}>
Contact Us
</Link>
</div>
</div>
</div>
  
    
  
  );
};

export default MainFooter;
