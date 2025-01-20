"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
//import { Spotlight } from "./pages/ui/Spotlight";
//import { TextGenerateEffect } from  "./pages/ui/text-generate-effect";
import { TypewriterEffect } from    "../ui/typewriter-effect";
import { SparklesCore } from "../ui/sparkles";
import Link from 'next/link'
import { button, Button } from "@material-tailwind/react";
import { TbGridDots } from "react-icons/tb";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ImagesSlider } from "../ui/images-slider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import { useAuthenticator } from '@aws-amplify/ui-react';
import SideContextProvider, {useSideContext} from "./context/side-context";

const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
{
  breakpoint: 900,
  settings: {
    slidesToShow: 2,
  },
},
{
  breakpoint: 1150,
  settings: {
    slidesToShow: 3,
  },
},
{
  breakpoint: 1300,
  settings: {
    slidesToShow: 4,
  },
},
],
};
const data = [
  {
    id: 1,
    src: "/images/resources/concerns/1.png",
    alt: "Image 1",
    text:"Abdominal pain & Cramping",
    ref:"",
  },
  {
    id: 2,
    src: "/images/resources/concerns/2.png",
    alt: "Image 2",
    text:"Blood and/Mucus in stool",
    ref:"",

  },
  {
    id: 3,
    src: "/images/resources/concerns/3.png",
    alt: "Image 3",
    text:"Fatigue & Weakness",
    ref:"",
  },
    
  {
    id: 4,
    src: "/images/resources/concerns/4.png",
    alt: "Image 3",
    text:"Diarrhoea (frequent & urgent)",
    ref:"",
  },
  {
    id: 5,
    src: "/images/resources/concerns/5.png",
    alt: "Image 3",
    text:"Constipation",
    ref:"",
  },
  {
    id: 6,
    src: "/images/resources/concerns/6.png",
    alt: "Image 3",
    text:"Weight loss & Malnutrition",
    ref:"",
  },
  {
    id: 7,
    src: "/images/resources/concerns/7.png",
    alt: "Image 3",
    text:"Loss of Apetite",
    ref:"",
  },
  {
    id: 8,
    src: "/images/resources/concerns/8.png",
    alt: "Image 3",
    text:"Urgency & Frequency of Bowel Movements",
    ref:"",

  },
  {
    id: 9,
    src: "/images/resources/concerns/9.png",
    alt: "Image 3",
    text:"Joint Pain & Arthritis",
    ref:"",
  },
  {
    id: 10,
    src: "/images/resources/concerns/10.png",
    alt: "Image 3",
    text:"Rectal pain & Pressure",
    ref:"",
  },
  {
    id: 11,
    src: "/images/resources/concerns/11.png",
    alt: "Image 3",
    text:"Anaemia (Iron Deficiency) ",
    ref:"",
  },
  {
    id: 12,
    src: "/images/resources/concerns/12.png",
    alt: "Image 3",
    text:"Nausea & Vomiting",
    ref:"",
  },
];

const images = [
  "/images/resources/homepage1.png",
  "/images/resources/homepage2.png",
  "/images/resources/Navigation.gif",

 ];


const words = `Empowering IBD Warriors Together`;
const words2 = [
  {
    text: "My Crohn's and Colitis Angel",
    className: "text-[#ecd6fb] dark:text-blue-300 md:text-3xl",
  },
];
 export const Home = () => {
  const {backButtonvisible,setBackButtonvisible}=useSideContext();
 
  const {userName,setUserName}=useSideContext();

  const {Signed}=useSideContext();
  //if (Signed) {const { user, signOut } = useAuthenticator();
 // setUserName(user?.signInDetails?.loginId);
// }
  useEffect(() => {
   if (!Signed)setUserName("");
   setBackButtonvisible(false);
  
  }, []);

  return (

    <SideContextProvider>
    <div className="w-full h-full" >
 {/* <Spotlight className='absolute top-0 left-32 w-full   ' />*/}




<div className="bg-[#0b0326]  ">

<div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center   ">

<div className=" mt-28 flex flex-col justify-center items-start   ">
    <h1 className="mt-10 md:mt-0 ml-20 text-[#e7c0ff] text-sm md:text-l">WELCOME TO </h1>
    <h1 className=" ml-20 mt-4 sm:text-2xl md:text-4xl font-bold  text-[#ecd6fb]">{"My Crohn's and Colitis Angel"}</h1>

    <h1 className="ml-20 mt-14 sm:text-xl md:text-3xl  text-[#ecd6fb]"> Empowering IBD Warriors Together</h1>

    <Link href={"../pages/signup"}>
        <button className="ml-20 mt-10 px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative ">
          <span>Join us →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
        </Link>
  {/*<TypewriterEffect words={words2}  />*/}
      {/*  <TextGenerateEffect duration={1} filter={false} words={words} className=" ml-20 mt-2 sm:text-2xl font-bold  text-blue-900"/>*/}
      <div className=" flex flex-row w-full justify-end items-end ">
     
       <TbGridDots className='text-[#12123d] mr-1 bottom-0 text-9xl  ' />
</div>
</div>
<div className="relative justify-center items-center">
<div className="h-full absolute top-0 ">
 <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={0.8}
          particleDensity={5}
          className="w-full h-full"
          particleColor="#ffffff"    
          />

</div> 

<ImagesSlider className="h-[20rem] md:h-[25rem]   " images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 130,
        }}
        transition={{
          duration: 1,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        </motion.p>
       
      </motion.div>
    </ImagesSlider>

</div>

</div>


<div className="bg-[#0b0326] flex w-full ">
           <h1 className=" ml-20 mb-4 mr-10  text-[#ecd6fb] font-bold">{"Join our supportive community to navigate life's challenges and triumphs with Crohn's and Colitis Angel"}</h1>

</div>
</div>

<div className="mt-20 mb-4 flex flex-1 justify-center items-center font-bold md:text-4xl text-[#7028a0] ">
  <p>Select your Concern</p>
</div>
<div className="bg-[#e7c0ff]">
<div className="w-3/4 m-auto ">
<div className="mb-4 " >
<Slider {...settings}>
      {data.map((d) => (
      <div key={d.id} className=" h-[440px] flex justify-center items-center ">
  

     <div className="flex h-[400px] justify-center items-center bg-white mr-4 mt-5 ml-4 rounded-xl">
      <a  key={d.id} href={d.ref}  >

      <div className=" mt-4 rounded-t-xl flex justify-center items-center ">
      <Image key={d.id} src={d.src}  width={200}  height={200}alt={d.alt} className="h-100 w-100 rounded-full "/>
     </div>
     <div className="flex justify-center items-center mt-4 font-semibold  ml-2 text-[#7028a0]">
      <p key={d.id}>{d.text}</p>
      </div> 
</a>

</div>
 
      </div>
     
      ))}
    </Slider>
</div>

</div>
    
    </div>
   
    </div>
    </SideContextProvider>

  );
};

