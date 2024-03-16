"use client"
import Image from "next/image";
import ramdan from '../../../../public/ramadan.jpeg'
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Erica_One } from "next/font/google";

export default function Files() {
    useEffect(() => {
        fetchFiles();
    }, []);
    const [files, setFiles] = useState([]);
  
    const fetchFiles = async () => {
        try {
            const response = await axios.get('/api/users/files');
            setFiles(response.data.files);
        } catch (error: any) {
            toast.error(error.message);
        }
    }
    const copyURL = (url:any) => {
        navigator.clipboard.writeText(url)
            .then(() => {
                toast.success("URL copied to clipboard!");
            })
            .catch((error) => {
                toast.error("Failed to copy URL: " + error.message);
            });
    };
    const handleFavourite = async(fId:any) =>{
        try {
            console.log(fId);
            const response = await axios.post("/api/users/togglefav", {fId:fId});
            console.log(response);
            if(response.data.status){
                return toast.success(response.data.message);
            }
            else{
                return toast.error(response.data.message);
            }
        } catch (error:any) {
            toast.error(error.message);
        }
    }


    return (
        <div className="flex flex-wrap space-x-3 space-y-3  items-baseline justify-center">
            {files && files.map((file: any) => {
                return (
                    <div className=" relative w-[280px] bg-white px-2 py-2 rounded-md" key={file._id}>
                        <div className="w-full flex items-center justify-between">
                            <h1>{file.title}</h1>
                        </div>
                        <Image width={280} height={280} className='px-4  h-40 my-4' src={`http://localhost:3000/${file.image}`} alt="" />
                        <div className='flex items-center justify-between my-2 text-[12px] '>
                            <button className="bg-black px-2 py-2 rounded-md text-white hover:cursor-pointer" onClick={() => copyURL(`http://localhost:3000/${file.image}`)} >Share</button>
                            <button className="bg-black px-2 py-2 rounded-md text-white hover:cursor-pointer" onClick={() => handleFavourite(file._id)}>Add Favourites</button>
                            <button className="bg-black px-2 py-2 rounded-md text-white hover:cursor-pointer">Move Trash</button>
                        </div>

                    </div>
                );
            })}
        </div>
    )
}