import connectToMongoose from "@/dbCongig/config";
import { getUserId } from "@/helpers/getuserid";
import FileModel from "@/models/File.Model";
import { NextRequest, NextResponse } from "next/server";
connectToMongoose();
export async function GET(request:NextRequest) {
    
    try {
       const userId = await getUserId(request);
       const files = await FileModel.find({userId:userId});
       console.log("files",files);
       if(!files){
        return NextResponse.json({status:false, message:"Not founds"});
       }
       return NextResponse.json({status:true, message:"Your files", files:files}); 
    } catch (error:any) {
        return NextResponse.json({status:false, message:error.message})
    }
}