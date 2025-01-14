import { NextResponse } from "next/server";
import {S3Client, PutObjectCommand, GetObjectCommand} from "@aws-sdk/client-s3"
import { error } from "console";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Amplify } from "aws-amplify";
Amplify.configure();
//import UploadFile from "@/app/UploadFile";


async function uploadFileToS3(file, fileName) {
  //  console.log( "Route");
 ///////////////////////////////////////////
 async function createProfile() {
    const r=client.models.Profile.create({
     // name: window.prompt("Name content"),
     name:"Route",
     address1:"Route",
     address2:"Route",
     tel:"Route",
     city:"Route",
     country:"Route",
     category: "Route",
     status:"Route"
    });
    
  }
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
     //   console.log(data["accessKeyId"])
     //   console.log(data["secretAccessKey"])
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
 return url;
     // setData(data);
    //  setLoading(false);
    });
/////////
    ///////////////////////////////////
   
}


export async function POST(request) {
    
    try{

const formData = await request.formData();
const file=formData.get("file");
//console.log( {fileName});
//return NextResponse.json({f:file.name});

if(!file){
   
    return  NextResponse.json({error: "Error upploading file"},{status:400});//NextResponse.json({ msg: "Hello API"});

}


const buffer = Buffer.from (await file.arrayBuffer());
 const dataR= await uploadFileToS3(buffer, file.name);


return NextResponse.json({success: true, data1: dataR});

    }catch(error){
        return  NextResponse.json({error: "Error upploading file"});//NextResponse.json({ msg: "Hello API"});

    }    
}