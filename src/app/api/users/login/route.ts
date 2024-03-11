
import UserModel from "@/models/User.Model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import connectToMongoose from "@/dbCongig/config";

connectToMongoose();

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();
        const user = await UserModel.findOne({ email });
        console.log(user);
        if (!user) {
            return NextResponse.json({ status: false, message: "User doesn't exist" });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return NextResponse.json({ status: false, message: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY!, { expiresIn: '1d' });

        const response = NextResponse.json({ status: true, message:"Login successfull", token });
        response.cookies.set("token", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24, // 1 day in seconds
            path: '/',
        });

        return response;
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: false, message: "Something went wrong" });
    }
}
