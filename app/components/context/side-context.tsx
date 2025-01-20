"use client";

import React, { createContext, useState,useContext } from "react";
type SideContext ={
  layout :boolean;
  setLayout: React.Dispatch<React.SetStateAction<boolean>>;
  profileEiditForm:boolean;
  setprofileEiditForm: React.Dispatch<React.SetStateAction<boolean>>;
  navDir: any;
  componentName: any;
  setComponentName: React.Dispatch<React.SetStateAction<any>>;
  backButtonvisible: boolean;
  setBackButtonvisible: React.Dispatch<React.SetStateAction<boolean>>;
  profMenue: boolean;
  setProfMenue: React.Dispatch<React.SetStateAction<boolean>>;
  side: boolean;
setSide: React.Dispatch<React.SetStateAction<boolean>>;
userName: any;
setUserName: React.Dispatch<React.SetStateAction<any>>;
userId: any;
setUserId: React.Dispatch<React.SetStateAction<any>>;
Signed: boolean;
setSigned: React.Dispatch<React.SetStateAction<boolean>>;
AuthFunction: any;
setAuthFunction: React.Dispatch<React.SetStateAction<any>>;
}

export const SideContext= createContext<SideContext| null>(null);

export default function SideContextProvider({children}: {
    children: React.ReactNode;
  }){
    
    const [layout, setLayout]=useState(false);
    const [profileEiditForm, setprofileEiditForm]=useState(false);
    const [side, setSide]=useState(false);
    const [Signed, setSigned]=useState(false);
    const [AuthFunction, setAuthFunction]=useState(false);
    const [profMenue, setProfMenue]=useState(false);
    const [userName, setUserName]=useState("");
    const [userId, setUserId]=useState("");
    const [backButtonvisible, setBackButtonvisible]=useState(false);
    const [componentName,setComponentName]=useState("");
    const navDir="";
    return(
        <SideContext.Provider
        value={{
            layout,
            setLayout,
            profileEiditForm,
            setprofileEiditForm,
            navDir,
            componentName,
            setComponentName,
            AuthFunction,
            setAuthFunction,
            backButtonvisible,
            setBackButtonvisible,
            side,
            setSide,
            userName,
            setUserName,
            userId,
            setUserId,
            Signed,
            setSigned,
            profMenue,
            setProfMenue
        }}>
{children}
           </SideContext.Provider>  
    ) 

}

export function useSideContext(){
    const context=useContext(SideContext);
if(!context){
  throw new Error("The Side context should be used inside the provider");
}

return context;
}