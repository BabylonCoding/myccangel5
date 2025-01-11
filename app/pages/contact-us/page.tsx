"use client";
import './page.css'
import Image from 'next/image';
import contactUsImg from '../../../public/images/contact us.png'
import React from 'react'
import { useSideContext } from '@/app/components/context/side-context'
const page = () => {
  const {backButtonvisible,setBackButtonvisible}=useSideContext();
  setBackButtonvisible(false);
  return (
     <main style={styles.body}>
<div className="page-container flex-col">
  <div className="flex-col md:w-[45%] justify-center items-center">
    <div className="text-customPurple text-4xl font-bold flex flex-col mb-6 justify-center items-center">Get in Touch</div>
    <h5 className="mb-8 block text-sm font-medium"><p>We would love to hear from you! Fill out the form or email us at</p>
       <div className='flex font-bold text-green-900 flex-col'><p>info@myccangel.org</p><p>partners@myccangel.org</p><p>support@myccangel.org</p> 
      </div></h5>
      <h5 className="mb-6 block text-sm font-medium"><p>We will get back to you soon!</p>
      </h5>
  </div>

  <div className="relative md:w-[45%]  ">
      <div className=" flex flex-1  justify-center items-center  mb-6 p-5 bg-gradient-to-b from-white from-10% via-white via-80%  to-90% rounded-lg shadow-lg  ">

        <form className=' w-full'>
          <div >
            <label htmlFor="first_name" className="block mt-3 text-sm font-medium text-gray-700">First Name*</label>
            <input className="w-full  p-3 border bg-lightPurple rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="text" 
            id="first_name" 
            name="first_name" required />
          </div>
          <div className="">
            <label htmlFor="last_name" className="block text-sm  mt-3 font-medium text-gray-700">Last Name*</label>
            <input className="w-full  p-3 border bg-lightPurple rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="text" id="last_name" name="last_name" required />
          </div>
          <div className="">
            <label htmlFor="email"className="block text-sm mt-3  font-medium text-gray-700">Email*</label>
            <input 
            className="w-full  p-3 border bg-lightPurple rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type ="email" id="email" name="email" required/>
          </div>
            <div className="form-group">
            <label htmlFor="message"className="block text-sm mt-3  font-medium text-gray-700">Message*</label>
            <textarea 
            className="w-full mb-6  p-3 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="message" name="message" required></textarea>
          </div>
          <div className="flex justify-center">
          <button className="ml-20 mt-10 px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-green-900 mx-auto text-center rounded-full relative "
          type="submit">Submit
                    <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />

          </button>
          </div>
        </form>
      </div>
      <div className='absolute right-0 top-0 bg-gr mr-[-100px]  mt-[-20px]'>
      <Image 
        src={contactUsImg}
        alt="contactImage" 
        width={"150"}
       
        className="  "
      />
      </div>
      </div>
    </div>

</main>
  )
}

export default page

const styles = {
  body: {
    backgroundColor: 'white',
    color: 'black'
  }
}