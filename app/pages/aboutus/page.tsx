"use client";
import React from 'react'
import {useSideContext} from "../../components/context/side-context";
import Image from 'next/image';
// import '../../pages/aboutus/App.css'
import whoWeAreImg from  '../../../public/images/WhoWeAre.png'
import grouptalk from '../../../public/images/group talk.png'
import ourAim from '../../../public/images/abour us 3.png'
import './page.css'
import { BsJustify } from 'react-icons/bs';
//import { Authenticator } from '@aws-amplify/ui-react';

//import { TextGenerateEffect } from  "../ui/text-generate-effect"
const words = `Myccangel about us 1`
//const {userName,setUserName}=useSideContext();                                                                                                                                                                                                                                                                                                                                                                                                                               ;

const page = () => {

  const {setBackButtonvisible}=useSideContext();
        setBackButtonvisible(false);
 //////////////////////////////////////////////////


  return (
  
  <main style={styles.body}>
   <div className='absolute w-full h-full'>
   
   </div>
    <div style={styles.upper}>
    <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center   ">

      <div style={{ display: "flex", flexDirection: "column", marginLeft: "85px", marginRight: "85px" }}>
        <br></br>
        <br></br>
        <p style={styles.h1}>Who we are</p>
        <br></br>
        <p style={styles.h5}>Welcome to MyCCAngel, a non-profit organisation
          dedicated to supporting individuals living with
          inflammatory Bowel Disease (IBD). Our mission is to
          provide a comprehensive online platform that
          empowes patients to manage their condition
          effectively , connects them with a supportive
          community and, offers access to valuable resources.
        </p>
      </div>
      <div style={{ marginLeft: "150px" }}><Image src={whoWeAreImg} alt="image" style={styles.myImg} /></div>
      </div>
      <br></br>
      <br></br>
    </div>

    <br></br>


    <div className="ourGoal">
      <h5 style={styles.h5}> <center>MAXIMIZE YOUR POTENTIAL</center></h5>
     
      <div className='flex font-bold justify-center items-center text-xs md:text-3xl '>Our goal is to bridge the gap in IDB care by providing.</div>
    
    <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center   ">
        
      
    <div className="md:ml-20 ml-10 mr-10 grid grid-cols-1 md:grid-cols-2 justify-start items-start  ">

            <div className="innerDiv2 m-4">
              <h3 className='font-bold'>Community</h3>
              <p>A safe place for community
                building through chat
                rooms, webminars and,
                group discussions.
              </p>
            </div>
            
            <div className="innerDiv2 m-4">
              <h3 className='font-bold'>Toilet Location</h3>
              <p>A toilet location map for
                easy access to nearby
                facilities.
              </p>
            </div>

         
            <div className="innerDiv2 m-4">
              <h3 className='font-bold'>Guidance</h3>
              <p>A live assistant AI chatbot
                for answers to IBD-related
                questions and dietary
                guidance.
              </p>
            </div>

            <div className="innerDiv2 m-4">
              <h3 className='font-bold '>Resources</h3>
              <p>A resource library featuring
                articles, videos, podcasts
                and update on IDB 
                management.
              </p>
            </div>
</div>
      
        <div className='flex mr-20 ml-20'><Image src={grouptalk} alt="myimg" /></div>
      </div>
    </div>


    <div style={styles.whoweare}>
    <div className=" grid grid-cols-1 md:grid-cols-2  ">

      
        

        <div className='flex flex1 ' ><Image src={ourAim} alt="image" style={styles.ourAimImg}/></div>
        

      <div className='flex flex-1 justify-start items-start m-20 flex-col'>
       
        <div className='flex justify-start items-start font-bold md:text-3xl '>Our Aim</div>
       <div className='flex mt-6 w-3/4 justify-start items-start'>
        <p style={styles.whoWeArePara}>We aim to facilitate diagnosis, timely medical appointements and,
          affordable treatment options. Our plattform is designed to be a one-
          stop shop for IBD patients, providing them with the tools and support
          they need to navigate their journey.
          <br></br>
          <br></br>
          At MyCCAngel, we belive that no one should face IBD alone. join our
          community today and become a part of a supportive network that
          understands your needs and is dedicated to helping you thrive.
          <br></br>

        </p>
        </div>
      </div>
      
      </div>
    </div>

    <div className='ourTeam mt-10 justify-center items-center'>
      <h2>Meet Our Team</h2>
      </div>
            <div className='flex flex-1 justify-center items-baseline mb-10'>

      <div className=' grid grid-cols-1 md:grid-cols-5 justify-center items-center content-center  '>
      
      <div className='innerCard'>
        <img src={"/images/sss.png"} alt="Satya"/>
        <h4>Satya Prakash</h4>
          <p>Co-Founder</p>
        </div>

        <div className='innerCard '>
          <img src={"/images/zoherweb1.png"} alt="Zoher"/>
          <h4>Zoher Abbas</h4>
          <p>Senior Full-Stack Developer</p>
        </div>

       

        <div className='innerCard'>
        <img src={"/images/Baqer.png"} alt="Name"/>
        <h4>Baqer Alshakhs</h4>
          <p>Co-Founder & Head of Technology and Strategy</p>
        </div>

        <div className='innerCard'>
        <img src={"/images/Indu.png"} alt="Name"/>
        <h4>Indu Barla</h4>
          <p>Visual Designer</p>
        </div>

        <div className='innerCard '>
        <img className='flex max-h-54 contain-layout' 
                src={"/images/Nisham3.png"} alt="Nisham"/>
        <h4>Nisham Purwa</h4>
          <p>Front-End Developer</p>
        </div>

      

      </div>
      </div>

  </main>


  )
};


const styles = {
  body: {
    backgroundColor: 'white',
    color: 'black'
  },
  upper: {
    backgroundColor: 'rgba(230, 230, 250, 0.5)',
    color: 'purple',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-around"
  },
  h5: {
     marginTop: '50px',
     marginBottom:'70px',
    fontSize: '1em',
    padding: '0',
    width: '100%',
    color: 'black'
  },
  whoWeArePara: {
    flex: 'center',
    BsJustify:'center',
    fontSize: '1em',
    padding: '0',
    width: '100%',
    color: 'black',
    marginTop: '6',
  },
  h1: {
    //  margin: '100px',
    fontSize: '2rem',
    padding: '0',
    fontWeight: 'bold'
  },
  myImg: {
    width: '70%'
  },
  myImg2: {
    width: '30%'
  },
  ourAimImg:{
    width: '100%'
  },
  whoweare: {
    backgroundColor: 'rgba(230, 230, 250, 0.5)',
    color: 'purple',
    display: 'flex',
    justifyContent: 'space-around'
  }
};
 
 
 //////////////////////////////////////////////////////
      


export default page