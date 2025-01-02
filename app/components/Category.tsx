import React, { useState } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

const Category = () => {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Please select a category ↓"]));
    const [warningMsg, setWarningMsg]=useState(false);

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys],
  );
const checkCategory=()=>{
    selectedValue=="Please select a category ↓"? setWarningMsg(true)
    :
    alert("Here Save Category")  //save the categorey
}
  return (
    <div className="flex w-screen h-screen bg-[#0b0326] justify-center items-center">
        <div className="flex flex-col justify-center items-center">
    <Dropdown>
      <DropdownTrigger>
        
        <button className=" mt-10 px-4 py-2 backdrop-blur-sm border  bg-gray-50/10 border-gray-100/20 text-white mx-auto text-center rounded-full relative "
        onClick={()=>setWarningMsg(false)}>
            
          
          <span>{selectedValue}</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-white to-transparent" />

        </button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Single selection example"
        selectedKeys={selectedKeys}
        selectionMode="single"
        variant="flat"
        onSelectionChange={setSelectedKeys}
        
      >
        <DropdownItem key="Please select a category ↓">Please select a category ↓</DropdownItem>
        <DropdownItem key="I am an IBD patient">I am an IBD patient</DropdownItem>
        <DropdownItem key="I am not an IBD patient">I am not an IBD patient</DropdownItem>
      </DropdownMenu>
    </Dropdown>
   {warningMsg&&<p className="flex text-orange-500 mt-2 font-thin">Select a category first</p>}
     <button className=" mt-10 px-4 py-2 backdrop-blur-sm border bg-red-800/30 border-[#ff5722]/20 text-yellow-300/80 mx-auto text-center rounded-full relative "
     onClick={()=>checkCategory()}>
              <span>Ok →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-yellow-300 to-transparent" />
            </button>

</div>
    </div>
  );
}

export default Category;
