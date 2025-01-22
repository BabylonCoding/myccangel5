"use client";
import { useState } from "react";
import {S3Client, PutObjectCommand, GetObjectCommand} from "@aws-sdk/client-s3"
 import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
 import { Amplify } from "aws-amplify";
 import outputs from "@/amplify_outputs.json";

 Amplify.configure(outputs);

  const  S3UploadForm=()=>{
//const UploadForm () =>{
const [file,setFile]=useState(null);
const [uploading,setUploading]=useState(false);
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [state1, setState1] = useState([]);

/*
  fetch('https://9i1lhhmu11.execute-api.eu-north-1.amazonaws.com/dev')
    .then((response) => response.json())
    .then((data) => {
        data.accessKeyId==""?
        console.log("data Lambda =")
        :
        console.log("data Lambda ")
        console.log(data.accessKeyId)
        console.log(data["secretAccessKey"])

     // setData(data);
    //  setLoading(false);
    });
    */
/////////////////////////////////////////////////////////////////////////////////////////////////////


async function uploadFileToS3(file, fileName) {
    console.log( "Route");

    const fileBuffer= file;
  //  console.log(fileName);
    const params={
        Bucket:  "myccangel-storage", //process.env.AWS_BUCKET_NAME,
        Key: `${fileName}-${Date.now()}`,
        Body: fileBuffer,
        ContentType: "image/jpg"

    }
    /////////////////////////////
    fetch('https://9i1lhhmu11.execute-api.eu-north-1.amazonaws.com/dev')
    .then((response) => response.json())
    .then(async (data) => {
    //    console.log("data Lambda")
   //     console.log(data["accessKeyId"])
    //    console.log(data["secretAccessKey"])
///////////////////////////
const s3Client= new S3Client({
    region:  "eu-north-1",
    credentials:{
        accessKeyId: data.accessKeyId,  // ,// process.env.AWS_ACCESS_KEY_ID, // .AWS_ACCESS_KEY_ID, // process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: data.secretAccessKey, //process.env.AWS_SECRET_ACCESS_KEY,// process.env.AWS_SECRET_ACCESS_KEY

    }
})

const command= new PutObjectCommand(params);
const data1= await s3Client.send(command);
const command_object = new GetObjectCommand(params);
let url = await getSignedUrl(s3Client, command_object);
console.log("URL ZOHER");
console.log(url);
 return url;
     // setData(data);
    //  setLoading(false);
    });
/////////
    ///////////////////////////////////
   
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

        ///////////
    //   const buffer = Buffer.from (await file.arrayBuffer());
     //  const response2= await uploadFileToS3(buffer, file.name);
////////////

 fetch( '/api/s3-upload2',{
    method: "POST",
    body: formData,
}).then(async (response) => {
    //  console.log('Zoher API response:', response)
      if (response.ok) {
        const { k1,k2, url } = await response.json()
        alert(  url+"::::"+ k2)
      } else {
       // console.error('S3 Upload Error:', response)
        alert('Upload failed.')
      }
    })

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
console.log(" S3 call");
console.log(process.env.AWS_ACCESS_KEY_ID) 
console.log( process.env.DB_HOST) 
   
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