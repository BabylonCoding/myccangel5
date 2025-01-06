import { NextResponse } from "next/server";
import {S3Client, PutObjectCommand} from "@aws-sdk/client-s3"
import { error } from "console";
//import UploadFile from "@/app/UploadFile";


const s3Client= new S3Client({
    region:process.env.AWS_REGION,
    credentials:{
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
})

async function uploadFileToS3(file, fileName) {
   // console.log( "Route");

    const fileBuffer= file;
  //  console.log(fileName);
    const params={
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${fileName}-${Date.now()}`,
        Body: fileBuffer,
        ContentType: "image/jpg"

    }
    const command= new PutObjectCommand(params);
    await s3Client.send(command);
    return fileName;
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
 const fileName= await uploadFileToS3(buffer, file.name);


return NextResponse.json({success: true, fileName});

    }catch(error){
        return  NextResponse.json({error: "Error upploading file"});//NextResponse.json({ msg: "Hello API"});

    }    
}