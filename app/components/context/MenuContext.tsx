"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";
interface ContextValue{
  open:boolean;
  toggle:Dispatch<SetStateAction<boolean>>;
}
export const MenuContext= createContext<ContextValue|undefined>(undefined);

const MenuContextProvider= ({children}:{
  children: React.ReactNode;
}) => {
    const [open, setOpen]= useState<boolean>(false);

    const toggle=()=> {
      //  console.log({open});
        setOpen((prev)=> !prev);
    }

    return <MenuContext.Provider value={{open, toggle}}>{children}</MenuContext.Provider>
};
export default MenuContextProvider;