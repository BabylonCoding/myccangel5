"use client";
import { useState } from "react";
import {S3Client, PutObjectCommand} from "@aws-sdk/client-s3"

  const  S3UploadForm=()=>{
//const UploadForm () =>{
const [file,setFile]=useState(null);
const [uploading,setUploading]=useState(false);

/////////////////////////////////////////////////////////////////////////////////////////////////////



async function uploadFileToS3(file, fileName) {
   // console.log( "Route");
   const s3Client= new S3Client({
    region:"eu-north-1",//process.env.AWS_REGION,
    credentials:{
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
})
    const fileBuffer= file;
    console.log(" S3 call");

    console.log(fileName);
    const params={
        Bucket: "myccangel-storage",//process.env.AWS_BUCKET_NAME,
        Key: `${fileName}-${Date.now()}`,
        Body: fileBuffer,
        ContentType: "image/jpg"

    }
    const command= new PutObjectCommand(params);
    const response1=await s3Client.send(command);
    return response1;
}



//////////////////////////////////////////////////////////////////////////////////////////////////
const handleFileChange=(e)=>{
    console.log( "handlechange");

    setFile(e.target.files[0]);
}

const handleSubmit= async (e)=>{
    console.log( "handle submit");

    e.preventDefault();  
    if(!file) return;
    setUploading(true);
    const formData=new FormData();
    //console.log( "b4 append fetch");
    //console.log(      formData);
    formData.append("file",file);
   // console.log(file);
   // console.log( "fordata zoher");
   // console.log(      formData.get("file"));
    try{
        console.log( "try fetch");
        console.log(      formData);

       const buffer = Buffer.from (await file.arrayBuffer());
const response2= await uploadFileToS3(buffer, file.name);
/*
const response=await fetch('api/s3-upload',{
    method: "POST",
    body: formData,
})
*/
console.log( " response ");
console.log( response);

//console.log( response);

//const data=await response.json();
//console.log(data.status);
setUploading(false);
    }
    catch(error){
        console.log(error);
        setUploading(false);
    }

}
    return(
        <>

<form onSubmit={handleSubmit}>
<input type="file" accept="image/*" onChange={handleFileChange}/>

<button type="submit" className="bg-white">
{uploading? "Uploading...": "Upload"}

</button>

</form>


        </>
    )
}

export default S3UploadForm;