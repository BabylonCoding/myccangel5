"use client";
import { button, Button } from "@material-tailwind/react";
import React, { useContext , useState, useEffect} from "react";
import { FaBars } from "react-icons/fa";
import { MenuContext } from "./context/MenuContext";
import Link from 'next/link'
import {useSideContext} from "./context/side-context";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { signOut } from "aws-amplify/auth";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { useRouter } from 'next/navigation';
import Image from "next/image";

const getText = (index: number) => {
  switch (index) {
   
    case 0:
      return "Early Diagnosis";
    case 1:
      return "Effective Treatment";
    default:
      return "Valuable Information";
      break;
  }
};

const NUMBER_OF_TEXT = 2;
const MainHeader = () => {
     // let   {navDir}=useSideContext();
  const {componentName,setComponentName}=useSideContext();
  const {userName,setUserName}=useSideContext();
  const {userId,setUserId}=useSideContext();
  const {Signed}=useSideContext();
  const {setSigned}=useSideContext();
  const {profMenue}=useSideContext();
  const {setProfMenue}=useSideContext();
  const {backButtonvisible}=useSideContext();
const {AuthFunction,setAuthFunction}=useSideContext();
  const {setBackButtonvisible}=useSideContext();
  if (Signed) {const { user, signOut } = useAuthenticator();

  setUserId(user?.signInDetails?.loginId);
     setUserName(user?.signInDetails?.loginId);
   }

  //typescript const { toggle } = useContext(MenuContext);
//typescript  const {open}=useContext(MenuContext);
  /////////////////////////////////////////
  const togelProMenue=()=> {
    // toggle();
    setProfMenue((prev)=> !prev);
   //  console.log("side",side);
// signOut();
 }
 //const { push } = useRouter();
 // function gotoProfile(){
 
 // useSideContext().navDir="Profile";

 // setComponentName("Profile");
 // setProfMenue((prev)=> !prev);
 // push("/",

   // );
 // href={"./profile"}
 //  console.log("side",side);
// signOut();
//}
{/*} 
const Logout=()=> {
  // toggle();
  setSigned(false);
  setProfMenue((prev)=> !prev);
  setUserId("");
  setUserName("");
 //  console.log("side",side);
 signOut();
}
*/}
const sginingIn=()=>{
setAuthFunction("signIn");
setSigned(true)
}
const sginingUp=()=>{
  setAuthFunction("signUp");
  setSigned(true)
  }
//typescript  const { toggle } = useContext(MenuContext);
  const [index, setIndex] = useState(0);
  
  //const [words, setWords] = useState("Early Diagnosis");
let words="Early Diagnosis";
  useEffect(() => {
  
    const timer = setInterval(() => {
      setIndex(prevIndex => (prevIndex == NUMBER_OF_TEXT ? 0 : prevIndex + 1));
      
    }, 3000);
    
    return () => {
    //  setBackButtonvisible(false)
      /* cleanup */
      clearInterval(timer);
    };
  /* on component render*/
  }, []);
  return (
    <div className="flex justify-between items-center m-2 mt-4 ">
     
  <div className="flex-1  "></div>
   
    <div className=" flex-1 justify-center text-[#7028a0] text-xs md:text-xl items-center text-center ">
    
    <p>{getText(index)} </p>      
    
      </div>  
<div className="flex-1 ">
        {userName==""? <div className="flex text-xs  justify-end items-end  gap-1 md:mr-10 ">

    <div className="bg-[#e7c0ff] rounded-md px-1  md:mr-2 md:px-2 md:py-1 md:font-semibold">
    <button onClick={()=>{setBackButtonvisible(true);sginingIn()}}>Sign in</button>

</div>
         <div className="bg-[#e7c0ff] px-1 md:px-2  md:mr-2 md:py-1 rounded-md md:font-semibold">

         <button onClick={()=>{setBackButtonvisible(true);sginingUp()}}>Sign up</button>

         </div>              
         </div> 
         :
          <div className="flex text-xs  justify-end items-end  gap-1 md:mr-12 ">
          <button onClick={togelProMenue} className="text-xl w-6 h-6 bg-green-600 rounded-full flex justify-center items-center  ">{userName.substring(-1,1)}</button> 
     
     
          { profMenue&&
<ul className='absolute flex  right-19 top-11 flex-col justify-start items-start   bg-[#ecd6fb] rounded-xl p-2 '>
<li className='flex justify-end items-end  text-[#33265e]  text-2xl  rounded-xl p-2'>
<IoMdClose className='mr-2  [#33265e] cursor-pointer hover:bg-[#33265e] hover:text-[#ecd6fb]   ' onClick={togelProMenue}/>

        </li>
        <li className='flex justify-center items-center  text-[#33265e]  '>
{userId}
    </li>
        <li className='flex justify-center items-center  text-[#33265e] gap-4 hover:bg-[#33265e] hover:text-[#ecd6fb]  rounded-xl p-2 '>
<CgProfile   />
<Link href={
  {
    pathname:"/",
    query:{
      cN:"Profile"
    }
  }
} onClick={togelProMenue} className='   font-bold text-sm '>Profile</Link>
    </li>
    <li className='flex justify-center items-center  text-[#33265e] gap-4 hover:bg-[#33265e] hover:text-[#ecd6fb]  rounded-xl p-2 '>
<MdLogout className='   text-[#33265e] gap-4 hover:bg-[#33265e] hover:text-[#ecd6fb] ' />
<Link href={
  {
    pathname:"/",
    query:{
      cN:"logout"
    }
  }
}  className='   font-bold text-sm' onClick={togelProMenue}>Log out</Link>
    </li>
  
</ul>
}
     
     
     
     </div>
     }  
     </div>           
{/*}

     <div className="flex-1 flex justify-end  gap-2  ">
     <Link href={"./signin"} >
      <button className="px-1 text-xs  backdrop-blur-sm border bg-[#7c64c9]/30 border-[#4d359d]/40 text-[#33265e] mx-auto text-center rounded-full  ">
          <span>Sign in</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[#33265e] to-transparent" />
        </button>


       </Link>
       <Link href={"./signup"}>
       <button className="px-1 text-xs mr-1 backdrop-blur-sm border bg-[#7c64c9]/30 border-[#4d359d]/40 text-[#33265e] mx-auto text-center rounded-full  ">
          <span>Sign up</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[#33265e] to-transparent" />
        </button>
         </Link>
          </div>
*/}


    <Link href="/"  className="absolute top-0 mt-2 md:ml-10 md:mt-3 ">
<Image 
      
      src={"/images/logo-1.png"}
      alt="Picture of the author"
       width={150} //automatically provided
       height={150} //automatically provided
       
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    /></Link>
   <div className="fixed top-24 right-0">
<div className='flex flex-col gap-2'>
 <Link href={"../pages/sponsors"}>
        <button className=" px-3  py-20 backdrop-blur-sm border bg-orange-900/60 border-orange-500/20 text-white mx-auto text-center rounded-full relative ">
       
          <div className="absolute inset-y-4   left-px w-6 bg-gradient-to-b mx-auto from-transparent via-orange-400 to-transparent" />
          <div className='absolute -right-10  pl-6   transform -rotate-90 text-white '>Sponsor_us</div> 
        </button>
        </Link>
      
 </div> 
 </div> 
<div className="fixed top-24 left-0">
<div className='flex flex-col gap-2'>
 
        <Link href={"../pages/donate"}>
        <button className=" px-3  py-20 backdrop-blur-sm border bg-green-900/60 border-green-500/20 text-white mx-auto text-center rounded-full relative ">
       
          <div className="absolute inset-y-5   left-px w-6 bg-gradient-to-b mx-auto from-transparent via-green-400 to-transparent" />
          <div className='absolute -left-4  pr-3   transform rotate-90 text-white '>Donate</div> 
        </button>
        </Link>
 </div> 
 </div> 
    </div>
  );
};

export default MainHeader;

