"use client";
import React, { useContext, useState, createContext } from 'react'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import {AiOutlineHome} from "react-icons/ai"
import {FaAngleRight,FaAngleDown} from "react-icons/fa"
import Link from 'next/link'
import {SiHelpscout,SiSinglestore} from "react-icons/si"
import {FiPhoneCall} from "react-icons/fi"
import { MenuContext } from './context/MenuContext'
import { MdOutlineContactSupport } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { BsInfoSquare } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { LuApple } from "react-icons/lu";
import { IoNavigateCircleOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlineArticle } from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import MyNavbar from "./MyNavbar"
import Image from "next/image";
//import { Spotlight } from "../ui/Spotlight";
import { IoMdClose } from "react-icons/io";
import { DefaultValue } from 'aws-cdk-lib/aws-cloudwatch';
import {useSideContext} from "./context/side-context";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from "aws-amplify";
import { generateClient } from 'aws-amplify/api';
import type { Schema } from "@/amplify/data/resource";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import Category from './Category';

Amplify.configure(outputs);

const client = generateClient<Schema>();


const MainLayout = ({children}:{
  
    children: React.ReactNode;
  }) => {
    
    const {layout,setLayout}=useSideContext();
    const {Signed}=useSideContext();
    const {setSigned}=useSideContext();
    const {backButtonvisible}=useSideContext();
    const {AuthFunction}=useSideContext();
    const {setBackButtonvisible}=useSideContext();

    const {side,setSide}=useSideContext();
   // const { toggle } = useContext(MenuContext);
//let open:boolean=false;
   // const {open}=useContext(MenuContext);
    /////////////////////////////////////////
    const closeMenue=()=> {
      //  toggle();
        setsubMenu(false);
       setSide(false);
    }
    /////////////////////////////////
    const [subMenu, setsubMenu]= useState(false);
    const [open, setOpen]= useState(true);

    const toggleOpen=(prev:boolean)=> {
        //  console.log({open});
        setOpen((prev)=> !prev);
      }
    const toggle2=()=> {
      //  console.log({open});
      setsubMenu((prev)=> !prev);
    }
    ///////////////////////////////////////////
     function listProfile(){
      client.models.Profile.observeQuery().subscribe({
        next: (data_1) =>   data_1.items.length == 0?
    setLayout(false): setLayout(false)
      })
      return <></>
    }
  
/////////////////////////////////////////////
  return (
  //  <div className='bg-gray-100 w-screen min-h-screen'>
 
        <div className='relative  w-screen min-h-screen  '>

   


 
   
<div className='  justify-center items-center'>

{/*<aside className='bg-white rounded-lg w-60 p-4'>*/}
<main className=' relative flex-col '> 
<div className='absolute'>
    
</div>

{Signed? 
<>
<React.StrictMode>
                                      {/*socialProviders={['amazon', 'apple', 'facebook', 'google']}*/}
<Authenticator initialState={AuthFunction} hideSignUp={AuthFunction=="signUp"?false:true}  className='pt-44 bg-gradient-to-b  mx-auto from-transparent via-[#33265e] to-transparent'> 

<div>
<div  className={'absolute top-20 flex  flex-col w-full  '}>
{!layout&&<Category/>}

{layout&&children}

{layout&&<MainFooter  />}

  
</div>
<div  className={'absolute top-0  flex-col w-full '}>
{layout&&<MainHeader/>}
{layout&&<MyNavbar />}
</div>

</div>
</Authenticator>
</React.StrictMode>
  
    </>
:
<div>
<div  className={'absolute top-20 flex  flex-col w-full '}>

{children}

<MainFooter  />
 
  
</div>
<div  className={'absolute top-0  flex-col w-full '}>
<MainHeader/>
<MyNavbar />
</div>

</div>

}






<aside className={`md:hidden absolute top-20 left-0 bg-opacity-80 bg-[#33265e] ml-2 rounded-lg overflow-hidden transition-all duration-500 ${side? "w-60 p-4":"w-0"} position-absolute`}>
    <ul>
    <li className='flex justify-end items-end  text-[#ecd6fb]  text-2xl  rounded-xl p-2'>
<IoMdClose className='mr-2  [#ecd6fb] cursor-pointer hover:bg-[#ecd6fb] hover:text-black   ' onClick={closeMenue}/>

        </li>
        <li className='flex justify-start items-center  text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e] rounded-xl p-2'>
<AiOutlineHome className='mr-2  [#ecd6fb]'/>
<Link href="/" onClick={closeMenue}>Home</Link>
        </li>

        <li className='flex justify-start items-center  text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e] rounded-xl p-2'>
<BsInfoSquare className='mr-2 [#ecd6fb]'/>
<Link href="../pages/aboutibd"  onClick={closeMenue}>⁠About IBD</Link>
        </li> <li className='flex justify-start items-center  text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e] rounded-xl p-2'>
<MdOutlineContactSupport className='mr-2 [#ecd6fb]'/>
<Link href="../pages/aihelp" onClick={closeMenue}>⁠AI Help</Link>
        </li>   
    
        <li className='flex flex-col justify-start items-start rounded-xl p-2'>
<div className='w-full flex flex-row  text-[#ecd6fb] justify-start items-center'>
<GrResources className='mr-2  [#ecd6fb]'/>
<h3 className='flex-1  text-[#ecd6fb]'>Gutpedia</h3>
{ subMenu&&<FaAngleDown  className='  hover:bg-[#ecd6fb] hover:text-[#33265e] rounded-xl cursor-pointer  ' onClick={toggle2}/>}
{ !subMenu&& <FaAngleRight className='  hover:bg-[#ecd6fb] hover:text-[#33265e] rounded-xl cursor-pointer  ' onClick={toggle2}/>}
</div>

{ subMenu&&
<ul className='flex flex-col justify-start items-start ml-4 mt-4 '>
    <li className='flex justify-center items-center  text-[#ecd6fb] gap-4 hover:bg-[#ecd6fb] hover:text-[#33265e] rounded-xl p-2 '>
<FaUserDoctor className='mr-2  [#ecd6fb]'/>
<Link href={"../pages/doctors"} onClick={closeMenue}>Doctors</Link>
    </li>
    <li className='flex justify-center items-center gap-4  text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e] rounded-xl p-2'>
<LuApple className='mr-2  [#ecd6fb]'/>
<Link href={"../pages/dietitian"} onClick={closeMenue}>⁠Dietitian</Link>
    </li>
    <li className='flex justify-center items-center gap-4 text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e] rounded-xl p-2'>
<IoNavigateCircleOutline className='mr-2  [#ecd6fb]'/>
<Link href={"../toiletnavigator"} onClick={closeMenue}>⁠Toilet Navigator</Link>
    </li>
    <li className='flex justify-center items-center gap-4  text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e] rounded-xl p-2'>
<MdOutlineManageAccounts className='mr-2  [#ecd6fb]'/>
<Link href={"../pages/manageibd"} onClick={closeMenue}>⁠Manage IBD</Link>
    </li>
    <li className='flex justify-center items-center gap-4  text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e] blue-800 rounded-xl p-2'>
<MdOutlineArticle className='mr-2  [#ecd6fb]'/>
<Link href={"../pages/articles"} onClick={closeMenue}>⁠Articles</Link>
    </li>
    <li className='flex justify-center items-center gap-4  text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e] rounded-xl p-2'>
<GoOrganization className='mr-2  [#ecd6fb]'/>
<Link href={"../pages/organizations"} onClick={closeMenue}>⁠Organizations</Link>
    </li>
</ul>
}
        </li>

        

        <li className='flex justify-start items-center  text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e] rounded-xl p-2'>
<SiHelpscout className='mr-2  [#ecd6fb]'/>
<Link href="../pages/aboutus" onClick={closeMenue}>About us</Link>
        </li>
        <li className='flex justify-start items-center  text-[#ecd6fb] hover:bg-[#ecd6fb] hover:text-[#33265e] rounded-xl p-2'>
<FiPhoneCall className='mr-2  [#ecd6fb]'/>
<Link href="../pages/contact-us" onClick={closeMenue}>Contact us</Link>
        </li>

    </ul>
    </aside>
   </main>
</div>


<div className="fixed top-50 left-0">

 
 </div> 
{backButtonvisible&&
    <>                           
 <a href="/"  className="absolute top-0 mt-2 ml-2 md:ml-12 md:mt-3 " onClick={()=>{setBackButtonvisible(false)}}>
<Image 
      
      src={"/images/logo-1.png"}
      alt="Picture of the author"
       width={150} //automatically provided
       height={150} //automatically provided
       
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    /></a>
    {AuthFunction=="signUp"&&
    
    <div className='flex  flex-1 justify-center items-center text-["#33265e"] mr-20 ml-20 mt-5'><p>By Signing up you acknowledge that you have read and accepted Myccangel <Link href='' className='text-green-600'>terms of use agreement</Link>  and consent to the <a href='' className='text-green-600'>privacy policy </a> and video privacy policy.</p></div>}
    </>
}
    </div>
  
  )
}

export default MainLayout
