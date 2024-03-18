"use client";

import Image from "next/image"
import ramdan from '../../../../public/ramadan.jpeg'
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
export default function Trash() {
    
    const [files, setFiles] = useState([]);
    const [onclickFun, setOnclick] = useState("");
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
            // console.log(response);
            onclickFun.length > 1 ? setOnclick(""):setOnclick("al;");
            if (response.data.status) {
                return toast.success(response.data.message);
            } else {
                return toast.error(response.data.message);
            }
        } catch (error) {

        }
    }
    const handleDelete = async (id:any) => {
        try {
            const response  = await axios.post("/api/users/delete", {fileId:id});
            console.log(response);
           onclickFun.length > 1 ? setOnclick(""):setOnclick("al;");
            if(response.data.status){
                toast.success(response.data.message);
            }else{
                toast.error(response.data.message);
            }
        } catch (error: any) {
            toast.error(error.message);
        }
    }
    useEffect(() => {
        fetchFiles();
    }, [onclickFun,  setOnclick ]);
    return (
        <div className="flex flex-wrap space-x-3 space-y-3  items-baseline justify-center">
            {files && files.map((file: any) => {
                return (
                    <div className=" relative w-[280px] bg-white px-2 py-2 rounded-md" key={file._id} >
                        <div className="w-full flex items-center justify-between">
                            <h1>{file.title}</h1>
                        </div>
                        <Image width={280} height={280} className='px-4  h-40 my-4' src={`http://localhost:3000/${file.image}`} alt="" />
                        <div className='flex items-center justify-between my-2 text-[12px] '>
                            <button onClick={() => handleTrash(file._id)} className="bg-black px-2 py-2 rounded-md text-white hover:cursor-pointer">Restore</button>
                            <button className="bg-black px-2 py-2 rounded-md text-white hover:cursor-pointer" onClick={() => handleDelete(file._id)}>Permanent Delete</button>

                        </div>

                    </div>
                );
            })}
        </div>
    )
}