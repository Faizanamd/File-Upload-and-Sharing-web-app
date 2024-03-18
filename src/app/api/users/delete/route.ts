import FileModel from "@/models/File.Model";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request:NextRequest) {
    try {
        const { fileId } = await request.json();
        const res = await FileModel.findByIdAndDelete({_id:fileId});
        console.log(res);
        if(!res){
            return NextResponse.json({status:false, message:"Post Not found/removed"})

        }
        return NextResponse.json({status:true, message:"Post removed successfully"});
    } catch (error:any) {
        return NextResponse.json({status:false, message:error.message})
    }
}