"use client";

import Image from "next/image"
import ramdan from '../../../../public/ramadan.jpeg'
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
export default function Trash() {
    useEffect(() => {
        fetchFiles();
    }, []);
    const [files, setFiles] = useState([]);

    const fetchFiles = async () => {
        try {
            const response = await axios.get('/api/users/files');
            setFiles(response.data.files);
            setFiles(response.data.files.filter((file: any) => file.trash));
        } catch (error: any) {
            toast.error(error.message);
        }
    }
    const handleTrash = async (fId: any) => {
        console.log(fId)
        try {
            const response = await axios.post("/api/users/toggletrash", { fId: fId });
            console.log(response);
            if (response.data.status) {
                return toast.success(response.data.message);
            } else {
                return toast.error(response.data.message);
            }
        } catch (error) {

        }
    }
    return (
        <div className="flex flex-wrap space-x-3 space-y-3  items-baseline justify-center">
            {files && files.map((file: any) => {
                return (
                    <div className=" relative w-[280px] bg-white px-2 py-2 rounded-md" key={file._id} >
                        <div className="w-full flex items-center justify-between">
                            <h1>{file.title}</h1>
                        </div>
                        <Image width={280} height={280} className='px-4  h-40 my-4' src={`https://file-upload-and-sharing-web-app.vercel.app/${file.image}`} alt="" />
                        <div className='flex items-center justify-between my-2 text-[12px] '>
                            <button onClick={() => handleTrash(file._id)} className="bg-black px-2 py-2 rounded-md text-white hover:cursor-pointer">Restore</button>
                            <button className="bg-black px-2 py-2 rounded-md text-white hover:cursor-pointer">Permanent Delete</button>

                        </div>

                    </div>
                );
            })}
        </div>
    )
}