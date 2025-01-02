"use client";
import React from 'react'
import { useSideContext } from '@/app/components/context/side-context'
const page = () => {
  const {setBackButtonvisible}=useSideContext();
         setBackButtonvisible(false);
  return (
    <div>Articles</div>
  )
}

export default page