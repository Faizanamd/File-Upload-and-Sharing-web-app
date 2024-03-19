import connectToMongoose from "@/dbCongig/config";
import { getUserId } from "@/helpers/getuserid";
import FileModel from "@/models/File.Model";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { useId } from "react";
connectToMongoose();


export async function POST(request: NextRequest) {
    try {
        const resp = await request.json();
        const files = await FileModel.find({ userId: resp.userId });
        console.log(files);
        if (!files || files.length === 0) {
            return NextResponse.json({ status: false, message: "Files not found", files: files });
        }
        return NextResponse.json({ status: true, message: "Your files", files: files });
    } catch (error: any) {
        console.error("Error fetching files:", error);

        return NextResponse.json({ status: false, message: error.message });
    }
}
