import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
export async function GET(request:NextRequest){
    try {
        const token = request.cookies.get("token")?.value || '';
        const descoredToken:any = jwt.verify(token, process.env.SECRET_KEY!);
        console.log(descoredToken)
        return  NextResponse.json({id:descoredToken.userId});
    } catch (error:any) {
        
        return NextResponse.json({status:false, message:"Something went wrong"});
    }
}