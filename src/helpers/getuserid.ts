import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
export async function getUserId(request:NextRequest){
    try {
        const token = request.cookies.get("token")?.value || '';
        const descoredToken:any = jwt.verify(token, process.env.SECRET_KEY!);
        console.log(";adf",descoredToken)
        // return  NextResponse.json({id:descoredToken.userId});
        
        return descoredToken.userId.toString();
    } catch (error:any) {
        return NextResponse.json({status:false, message:"Something went wrong"});
    }
}