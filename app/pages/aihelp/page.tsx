"use client";
import React from 'react'
import {useSideContext} from "../../components/context/side-context";

const page = () => {
  const {setBackButtonvisible}=useSideContext();
  setBackButtonvisible(false);
  return (
    <div>AI help</div>
  )
}

export default page