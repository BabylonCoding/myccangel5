"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from '@aws-amplify/ui-react';
import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Profileform } from "./Profileform";
import { useSideContext } from "./context/side-context";
import { VscEdit } from "react-icons/vsc";
import S3UploadForm from "./S3UploadForm";


Amplify.configure(outputs);

const client = generateClient<Schema>();


  
 
    
export const Profilepage = () => {
    const { user, signOut } = useAuthenticator();
      const {profileEiditForm,setprofileEiditForm}=useSideContext();
    
    const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
    const [profiles, setProfiles] = useState<Array<Schema["Profile"]["type"]>>([]);
    const[editForm,setEditForm]=useState(false);
  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  async function listProfile(){
      client.models.Profile.observeQuery().subscribe({
        next: (data_1) =>   data_1.items.length == 0? createProfile("", "", "", "", "", "") : setProfiles([...data_1.items]),
       
      })
    }
  

  useEffect(() => {
    listTodos();

    listProfile();
   
//console.log("PLength",profiles.length);  
//console.log("TodosLength",todos.length);  
}, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Id content"),
    });
  }
  function createProfile(Name:any,Add1:any,Add2:any,Tel:any,City:any,Country:any) {
    client.models.Profile.create({
     // name: window.prompt("Name content"),
     name:Name,
     address1:Add1,
     address2:Add2,
     tel:Tel,
     city:City,
     country:Country
    });
  }
  function initProfile() {
    console.log("creating profile");  

    client.models.Profile.create({
      name: "NA",
      tel: "NA",
      address1: "NA",
      address2: "NA",
      city: "NA",
      country:"NA",
    });
  }
  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }
   /////////////////////////////////////////
   const showEditForm=()=> {
    setprofileEiditForm(true);
    // toggle();
    // setsubMenu(false);
    
 }
 /////////////////////////////////
  return (
   
    <main>
     {/* <h1>{user?.username}</h1>
              <h1>{user?.signInDetails?.loginId}</h1>*/}
      {/*}        
      <h1>My account</h1>
           
      <button onClick={createTodo}>j2523345myacc</button>
      <button onClick={() => createProfile("NA","NA","NA","NA","NA","NA")}>j2523345myacb</button>
      
      
      <ul>
      
      {
      todos.map((todo) => (
        <li 
        onClick={() => deleteTodo(todo.id)}
        key={todo.id}>{todo.content}</li>
      ))}
    </ul>
    <button onClick={()=>{setprofileEiditForm(true)}}>Edit- 2320001</button>
*/}
<S3UploadForm/>
<div className="flex flex-col"  >
<div className={`md:hidden   bg-opacity-80 bg-[#33265e]  rounded-lg overflow-hidden transition-all duration-1000 ${profileEiditForm? "h-600 p-4":"h-0"} `}>
{profileEiditForm&&<Profileform/>}
</div>
      <div >
      
      <VscEdit className='mr-2 ml-20 [#ecd6fb] cursor-pointer  hover:text-gray-800  ' onClick={showEditForm}/>

      {
      profiles.map((profile) => (
       <div className="flex justify-center items-center w-full flex-col">
        <VscEdit className='mr-2  [#ecd6fb] cursor-pointer  hover:text-gray-800  ' onClick={showEditForm}/>
        
       <ul>
        <li key={profile.id}>Name: {profile.name}</li>
        <li key={profile.id}>Tel: {profile.tel}</li>
        <li key={profile.id}>Addrerss1: {profile.address1}</li>
        <li key={profile.id}>Address2: {profile.address2}</li>
        <li key={profile.id}>City: {profile.city}</li>
        <li key={profile.id}>Country: {profile.country}</li>
        </ul>
        </div>
      ))}
   
  
       
      </div>
      </div>
    </main>
   
  );
}
