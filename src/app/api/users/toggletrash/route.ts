import connectToMongoose from "@/dbCongig/config";
import FileModel from "@/models/File.Model";
import { NextRequest, NextResponse } from "next/server";
connectToMongoose();

export async function POST(request: NextRequest) {
    try {
        const { fId } = await request.json();
        console.log("postid", fId);

        // Find the file by ID
        const file = await FileModel.findById(fId);
        console.log("File", file);
        // If the file doesn't exist, return an error response
        if (!file) {
            return NextResponse.json({ status: false, message: "File not found" });
        }
        file.trash = !file.trash;
        file.fav = false;
        // Save the changes to the file
        const updatedFile = await file.save();
        console.log(updatedFile)
        // Return a success response with appropriate message
        const message = updatedFile.trash ? "Added to Trash" : "Removed from Trash";
        return NextResponse.json({ status: true, message: message });


    } catch (error: any) {
        return NextResponse.json({ status: false, message: error.message });
    }
}