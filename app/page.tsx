"use client";
import React, { useEffect, useState } from "react";
import { Home } from "./components/Home";
import { Profilepage } from "./components/Profilepage";
import {useSideContext} from "./components/context/side-context";
import { signOut } from "aws-amplify/auth";
import { useRouter } from 'next/navigation';
import S3UploadForm from  "./components/S3UploadForm"//" ./components/S3UploadForm";
import Link from "next/link";
import { Amplify } from "aws-amplify";
import { generateClient } from 'aws-amplify/api';
import { Schema } from "@/amplify-backup/data/resource";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

const client = generateClient<Schema>();



 const page = ({searchParams}:{
  
  searchParams:{
    cN: string
  }
 }) => {
      const [profiles, setProfiles] = useState<Array<Schema["Profile"]["type"]>>([]);
  
      const {layout,setLayout}=useSideContext();
  const {userName,setUserName}=useSideContext();
  const {userId,setUserId}=useSideContext();
  const {setSigned}=useSideContext();
  const {setProfMenue}=useSideContext();
  //console.log(searchParams.cN);
  //const {componentName,setComponentName}=useSideContext();
  //let  {navDir1}=useSideContext().navDir;
  //navDir1="Profile";
  if(searchParams.cN=="logout") {
 
    setSigned(false);
    setProfMenue((prev)=> !prev);
    setUserId("");
    setUserName("");
    signOut();
   //  console.log("side",side);
   const { push } = useRouter();
   push("/");

   };

    ///////////////////////////////////////////
    const listProfile=()=>{
      client.models.Profile.observeQuery().subscribe({
        next: (data_1) => { if (data_1.items.length == 0)
    setLayout(false);
    else {
      setProfiles([...data_1.items]);
       if(profiles[0].status=="complete" || profiles[0].category=="NontIBD" )
        setLayout(true);
       else setLayout(false);
    }
   

        }
      })
     
    }
    useEffect(() => {
      //userName!=""? listProfile():null;   
      listProfile();   
      console.log("userName") ;       console.log(userName) ;                 
          
      }, [userName]);
  
/////////////////////////////////////////////
  return (

   <>
   {/*<S3UploadForm/>*/}
   {searchParams.cN=="Profile"?
    <Profilepage/>
   :
    <Home/>
  }
  
   
   </>

  );
};
export default page
