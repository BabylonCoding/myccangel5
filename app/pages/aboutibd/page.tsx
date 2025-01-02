"use client";
import Image from 'next/image';
import myImg from   '../../../public/images/aboutIBD1.png'
import React from 'react'
import {useSideContext} from "../../components/context/side-context";

//import { TextGenerateEffect } from  "../ui/text-generate-effect"
const words = `Myccangel about us 1`
//const {userName,setUserName}=useSideContext();                                                                                                                                                                                                                                                                                                                                                                                                                               ;

const page = () => {

  const {setBackButtonvisible}=useSideContext();
        setBackButtonvisible(false);
  return (
  <main style={styles.body}>
    <div style={styles.upper}>
    <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center   ">
    <div className=" flex  flex-col justify-center items-center m-20">
    <p style={styles.h5}>LETS LEARN ABOUT</p>
    <p style={styles.h1}>What IBD is</p>
  </div>
  <div className=" flex flex-col justify-center items-center ">
  <Image src={myImg} alt="image" style={styles.myImg}/></div>

  </div>
  </div>
  <div style={styles.lower}>
    <p style={styles.para}> Inflammatory Bowel Disease (IBD) encompasses a group of inflammatory
    conditions of the colon and small intestine. The major types of IBD are
    Crohns disease and ulcerative colitis . IBD is a chronic condition that can
    significantly impact quality of life.
  </p>
  <br></br>
    <p style={styles.para}>Our team is dedicated to providing the latest information , support , and
      resources to those affected by IBD. We stive to raise awareness, fund,
      research and offer community support to improve the lives of individuals
      with IBD.
    </p>
    <br></br>
    <p style={styles.para}>We invite you to learn more about IBD, explore our resources, and join our
      community in the fight against the challenging condition.</p>
  </div>
  </main>
    )
};
const styles = {
  lower: {
      margin: '100px',
      width: '50%'
  },
  upper: {
    backgroundColor: 'rgba(230, 230, 250, 0.5)',
    fontWeight: 'bold',
    color:'purple',
    display:'flex',
  alignItems:'center',
  justifyContent:"space-around",
  },
  body: {
    backgroundColor: 'white'
  },
  h5: {
    // margin: '100px',
    fontSize: '1em',
    padding: '0'
  
  },
  h1: {
    //  margin: '100px',
    fontSize: '2rem',
    padding: '0'
  },
  para: {
    color:'black'
 },
 myImg : {
  width:"60%",
 }
};

export default page