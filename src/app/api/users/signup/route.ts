import connectToMongoose from "@/dbCongig/config";
import UserModel from "@/models/User.Model";
import { NextRequest, NextResponse } from "next/server";

import bcrypt from 'bcrypt';

connectToMongoose();

export async function POST(request: NextRequest) {
    try {
        console.log("hitted");
        const newUser = await request.json();
        const validUser =await UserModel.findOne({email:newUser.email});
        if(validUser){
            return NextResponse.json({status:false,message:"User already exist"});
        }
        const hashPassword = await bcrypt.hash(newUser.password, 10);
        const temp = new UserModel({...newUser, password:hashPassword});
        const result = temp.save();
        if(!result){
            return NextResponse.json({status:false, message:"Something went wrong"});
        }else{
            return NextResponse.json({status:true, message:"User created successfully"});
        }
        return NextResponse.json({ status: true, message: "Correct" });
    } catch (error) {
        return NextResponse.json({ status: false, message: "Semething went wrong" });
    }
}