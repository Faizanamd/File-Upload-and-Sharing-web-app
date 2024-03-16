import FileModel from "@/models/File.Model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        // Extract the fId from the request body
        const { fId } = await request.json();
        console.log("postid", fId);

        // Find the file by ID
        const file = await FileModel.findById(fId);
        console.log("File", file);
        // If the file doesn't exist, return an error response
        if (!file) {
            return NextResponse.json({ status: false, message: "File not found" });
        }

        // Toggle the 'fav' property
        file.fav = !file.fav;

        // Save the changes to the file
        const updatedFile = await file.save();
        console.log(updatedFile)
        // Return a success response with appropriate message
        const message = updatedFile.fav ? "Added to favourites" : "Removed from favourites";
        return NextResponse.json({ status: true, message: message });
    } catch (error) {
        // Handle any errors that occur during the process
        console.error("Error parsing JSON data:", error);
        return NextResponse.json({ status: false, message: "Something went wrong" });
    }
}
