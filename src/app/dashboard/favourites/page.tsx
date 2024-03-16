"use client";
import Image from 'next/image'
import ramdan from '../../../../public/ramadan.jpeg'
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Favourites() {
    // const [userId, setUserId] = useState("");

    // const fetchData = async () => {
    //     const response = await axios.get('/api/users/getid');
    //     console.log(response);
    //     setUserId(response.data.id);
    // }
    // useEffect(() => {
    //     fetchData();
    // }, [])
    useEffect(() => {
        fetchFiles();
    }, []);
    let [files, setFiles] = useState([]);

    const fetchFiles = async () => {
        try {
            const response = await axios.get('/api/users/files');
            setFiles(response.data.files);
            setFiles(response.data.files.filter((file: any) => file.fav));
        } catch (error: any) {
            toast.error(error.message);
        }
    }
    const copyURL = (url: any) => {
        navigator.clipboard.writeText(url)
            .then(() => {
                toast.success("URL copied to clipboard!");
            })
            .catch((error) => {
                toast.error("Failed to copy URL: " + error.message);
            });
    };


    return (
        <div className="flex flex-wrap space-x-3 space-y-3  items-baseline justify-center">
            {files && files.map((file: any) => {
                return (
                    <div className=" relative w-[280px] bg-white px-2 py-2 rounded-md" key={file._id} >
                        <div className="w-full flex items-center justify-between">
                            <h1>{file.title}</h1>
                        </div>
                        <Image width={280} height={280} className='px-4  h-40 my-4' src={`process.env.DOMAIN/${file.image}`} alt="" />
                        <div className='flex items-center justify-between my-2 text-[12px] '>
                            <button className="bg-black px-2 py-2 rounded-md text-white hover:cursor-pointer" onClick={() => copyURL(`process.env.DOMAIN/${file.image}`)} >Share</button>
                            <button className="bg-black px-2 py-2 rounded-md text-white hover:cursor-pointer">Add Favourites</button>
                            <button className="bg-black px-2 py-2 rounded-md text-white hover:cursor-pointer">Move Trash</button>
                        </div>

                    </div>
                );
            })}
        </div>
    )
}