import { createPresignedPost } from '@aws-sdk/s3-presigned-post'
import { S3Client } from '@aws-sdk/client-s3'
import { v4 as uuidv4 } from 'uuid'
import * as fs from 'fs';

export async function POST(request: Request) {
 // const {file, fileName } = await request.json()
 ////////////////
 try{

  const formData = await request.formData();
  const file=formData.get("file");
  //console.log( {fileName});
  //return NextResponse.json({f:file.name});
  
  if(!file){
     
      return  Response.json({error: "Error upploading file"},{status:400});//NextResponse.json({ msg: "Hello API"});
  
  }
  
  
 // const buffer = Buffer.from (await  file.arrayBuffer());
  //// const dataR= await uploadFileToS3(buffer, file.name);
  
  
 // return Response.json({success: true, data1: dataR});
 const params={
  Bucket:  "myccangel-storage", //process.env.AWS_BUCKET_NAME,
  Key:  uuidv4(), //`${fileName}-${Date.now()}`,
  // Body: fileBuffer,
  ContentType: "image/jpg"

}

 const response=await fetch('https://9i1lhhmu11.execute-api.eu-north-1.amazonaws.com/dev') 
 const {accessKeyId,secretAccessKey}=await response.json()
 const k1=accessKeyId;
 const k2=secretAccessKey;
    return Response.json({success: true,  k1, k2});
      }catch(error){
          return  Response.json({error: "Error upploading file"});//NextResponse.json({ msg: "Hello API"});
  
      }    
 /////////////////////////////
const response=await fetch('https://9i1lhhmu11.execute-api.eu-north-1.amazonaws.com/dev') 
// .then((response) => response.json())
// .then(async (data) => {
 //    console.log("data Lambda")
  //   console.log(data["accessKeyId"])
  //   console.log(data["secretAccessKey"])
///////////////////////////
const {accessKeyId,secretAccessKey}=await response.json()
const k1=accessKeyId;
const k2=secretAccessKey;
return Response.json({ k1, k2 })
  // setData(data);
 //  setLoading(false);
 
/////////






 

/*
  try {
    const client = new S3Client({ region: process.env.AWS_REGION })
    const { url, fields } = await createPresignedPost(client, {
      Bucket: "process.env.AWS_BUCKET_NAME",
      Key: uuidv4(),
      Conditions: [
        ['content-length-range', 0, 10485760], // up to 10 MB
        ['starts-with', '$Content-Type', contentType],
      ],
      Fields: {
        acl: 'public-read',
        'Content-Type': contentType,
      },
      Expires: 600, // Seconds before the presigned post expires. 3600 by default.
    })

    return Response.json({ url, fields })
  } catch (error: any) {
    return Response.json({ error: error.message })
  }
  */
}