import connectToMongoose from "@/dbCongig/config";
import { getUserId } from "@/helpers/getuserid";
import FileModel from "@/models/File.Model";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
connectToMongoose();


export async function GET(request: NextRequest) {
    try {
        // const userId = await axios.get('/api/users/getid');
        const userId = await getUserId(request);
        console.log("userId:", userId);
        const files = await FileModel.find({ userId: userId });

        if (!files || files.length === 0) {
            return NextResponse.json({ status: false, message: "Files not found" });
        }

        return NextResponse.json({ status: true, message: "Your files", files: files });
    } catch (error: any) {
        console.error("Error fetching files:", error);

        return NextResponse.json({ status: false, message: error.message });
    }
}
