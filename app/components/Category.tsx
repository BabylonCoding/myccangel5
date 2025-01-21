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
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Profileform } from './Profileform';
import S3UploadForm from './S3UploadForm';// './S3UploadForm';
import UpLtest from './UpLtest';// './S3UploadForm';



Amplify.configure(outputs);

const client = generateClient<Schema>();


export default function App() {
    const [cat, setCat]= useState("Select your category");
    const [warningMsg, setWarningMsg]=useState(false);
    const [comp, setComp]=useState("start");

 const closeMenue=(cat1: any)=> {
    // toggle();
    if(cat1=="IBD")
    setCat("I am IBD")
else  if(cat1=="not IBD")
    setCat("I am not IBD")
   
    

         setsubMenu(false);
 }
  /////////////////////////////////
   const [subMenu, setsubMenu]= useState(false);
 
   const toggle2=()=> {
     //  console.log({open});
     setWarningMsg(false);
     setsubMenu((prev)=> !prev);
     
   }
   ///////////////////////////////////////////
  async function createProfile(Category:any) {
    const r=client.models.Profile.create({
     // name: window.prompt("Name content"),
     name:"",
     address1:"",
     address2:"",
     tel:"",
     city:"",
     country:"",
     category: Category,
     status:"category"
    });
    
  }

  const checkCategory=async ()=>{
      if(cat=="Select your category")
        setWarningMsg(true)
     else
     {
   //  alert("Here Save Category")  //createProfile("", "", "", "", "", "")
     if (cat=="I am IBD")
    // // 
{
   await  createProfile( "IBD");
   setComp("patent")
  // alert("Upload file") 
}
       else if (cat=="I am not IBD")
      
       {
  //   alert("NontIBD"); //
    await     createProfile( "NontIBD");
    setComp("partners")
// Here go to non IBD Profile
}
     }
 }

  return (
    <div className="flex w-screen h-screen bg-[#0b0326] justify-center items-center">
     {comp=="start"&&
    <div className="flex flex-col justify-center items-center">

    
    <button className="  px-4 py-2 backdrop-blur-sm border  bg-gray-50/10 border-gray-100/20 text-white mx-auto text-center rounded-full relative "
        onClick={toggle2}>
            
          <div className='flex flex-row justify-between items-center '>
          <span className='mr-1'>{cat}</span>
          <span>
          { subMenu&&<FaAngleDown  className=' text-whie hover:text-gray-400  rounded-xl cursor-pointer   mr-4 font-semibold text-sm' />}
    {!subMenu&&<FaAngleRight className='  text-white hover:text-gray-400  rounded-xl cursor-pointer   mr-4 font-semibold text-sm' />}
 
          </span>
          </div>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-white to-transparent" />

      
    
      </button>

      {warningMsg&&<p className="flex text-orange-500 mt-2 font-thin">Select a category first</p>}


    { subMenu&&
    <ul className='absolute  ... flex flex-col justify-start items-start   bg-[#33265e] rounded-xl p-2 '>
    <li className='flex justify-end items-end  text-[#ecd6fb]  text-2xl  rounded-xl p-2'>
    
            </li>
        <li className='flex justify-center items-center  text-[#ecd6fb] gap-4 hover:bg-[#ecd6fb] hover:text-[#33265e]  rounded-xl p-2 '>
    <FaUserDoctor className='mr-2  [#ecd6fb]'/>
    <p  onClick={()=>closeMenue("IBD")} className='  mr-4 font-semibold text-sm'>I am IBD</p>
        </li>
        <li className='flex justify-center items-center gap-4  text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e]  rounded-xl p-2'>
    <LuApple className='mr-2  [#ecd6fb]'/>
    <p  onClick={()=>closeMenue("not IBD")} className='  mr-4 font-semibold text-sm'>I am not IBD</p>
        </li>
     
    </ul>
    }
    
    <button className=" mt-32 px-4 py-2 backdrop-blur-sm border bg-red-800/30 border-[#ff5722]/20 text-yellow-300/80 mx-auto text-center rounded-full relative "
     onClick={()=>checkCategory()}>
              <span>Ok →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-yellow-300 to-transparent" />
            </button>
    
    </div> 
}
    {comp=="partners"&&  <Profileform/>}
    {comp=="patent"&&  <UpLtest/>}
    </div>
  );
}

