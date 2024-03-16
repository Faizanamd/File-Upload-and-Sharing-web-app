import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import FileModel from '@/models/File.Model';
import connectToMongoose from '@/dbCongig/config';
import axios from 'axios';
import { getUserId } from '@/helpers/getuserid';

connectToMongoose();


export async function POST(request: NextRequest) {
  try {
    const userId = await getUserId(request);
    console.log("id",userId);
    const data = await request.formData();
    console.log(data);
    const file: any = data.get("image");
    if (!file) {
      return NextResponse.json({ status: false, message: "File not found" });
    }
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/${file.name}`;
    await writeFile(path, buffer);

    // Save file information to MongoDB
    const newFile = new FileModel({
      userId: userId,
      image: file.name,
      title: data.get("title")
    });
    const result = await newFile.save();
    if (!result) {
      return NextResponse.json({ status: false, message: "Something went wrong" });
    }

    return NextResponse.json({ status: true, message: "File uploaded successfully" });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ status: false, message: error.message });
  }
}
