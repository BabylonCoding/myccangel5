import React from 'react'
import Image from "next/image";

//import { Spotlight } from '../ui/Spotlight'

const page = () => {
  return (
    <div className="flex flex-col w-full" >
      
       <div className=' flex flex-row justify-start  items-center h-96  bg-white mt-28'>
    
<p className=' absolute text-[#33265E]  md:text-3xl left-10'>
  About IBD
</p>

       <Image className=" h-[384px] w-[563px]
       "
      src={"/images/aboutibd.png"}
      alt="Picture of the author"
       width={200} //automatically provided
       height={200} //automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    /> 
    <div className='flex h-full w-full bg-[#ecd6fb]'></div>
      </div>
      <div  className='flex  bg-white'></div>
    <p className='mt-20 ml-20'>IBD</p> 
    <p className='mr-20 ml-20 mt-10'>
   {" Inflammatory Bowel Disease (IBD) encompasses a group of inflammatory conditions of the colon and small intestine. The major types of IBD are Crohn's disease and ulcerative colitis. IBD is a chronic condition that can significantly impact quality of life. Our team is dedicated to providing the latest information, support, and resources to those affected by IBD. We strive to raise awareness, fund research, and offer community support to improve the lives of individuals with IBD. We invite you to learn more about IBD, explore our resources, and join our community in the fight against this challenging condition."}
    </p>
    </div>
   
  )
}

export default page


////////////
