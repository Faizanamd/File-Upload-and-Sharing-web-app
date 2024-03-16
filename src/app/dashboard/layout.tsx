"use client"

import Navbar from "@/Components/Navbar"
import axios from "axios";
import Link from "next/link"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
   
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [picture, setPicture] = useState("");
    const [title, setTitle] = useState("");
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const hanldeImageChange = (e: any) => {
        setPicture(e.target.files?.[0])
    }
    useEffect(() =>{

    }, [])
    const handlefileupload = async () => {
        try {

            const formData = new FormData();
            formData.append('title', title);
            formData.append('image', picture);
            console.log(picture);
            console.log(formData);
            const response = await axios.post('/api/users/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Upload successful:', response.data);
            if (response.data.status) {
                toast.success(response.data.message);
                closeModal();
                setTitle("");
            } else {
                return toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Upload failed:', error);
        }
    }


    return (

        <section className="w-full min-h-screen bg-slate-300">
            <Navbar />
            <div className="flex md:px-8 sm:px-4  px-2 pt-8 ">
                <nav className="flex flex-col w-[200px] items-center pt-16 space-y-2 border-r-[2px] border-r-white minHeightClass">
                    <Link href={'files'}>All Files</Link>
                    <Link href={'favourites'}>Favourites</Link>
                    <Link href={'trash'}>Trash</Link>
                </nav>
                <div className="flex flex-col w-full px-4 pb-6 ">
                    <div className="flex items-center justify-between pt-8 ">
                        <h1 className="text-black text-2xl font-medium">Your Files</h1>
                        <div>
                            <input className="py-2 px-2 outline-none rounded-lg text-black border-[1px] border-black mr-1" type="search" placeholder="Search docs..." />
                            <button className="px-[10px] py-[10px] rounded-md bg-black text-white">Search</button>
                        </div>
                        <button className="px-[10px] py-[10px] rounded-md bg-black text-white" onClick={openModal}>Upload File</button>
                    </div>
                        {children}
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-black bg-opacity-50 ">
                    <div className="bg-slate-300 p-6 rounded-lg ">
                        <div className="flex flex-col space-y-3 relative">
                            <h2 className="text-xl text-center font-semibold mb-4">Upload File</h2>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full outline-none px-4 py-2 rounded-lg border-[1px] border-black bg-slate-300" type="text" placeholder="Enter File title here" />
                            <input onChange={(e) => hanldeImageChange(e)} className="w-full outline-none px-4 py-2 rounded-lg border-[1px] border-black" type="file" />
                            <button onClick={handlefileupload} className="w-full bg-white py-2 rounded-md uppercase font-semibold hover:bg-black hover:text-white transition duration-500 ease-in">UPLoad</button>
                        </div>
                        <button className="fixed top-20 right-20  rounded-full px-4 py-2 text-2xl mx-auto bg-white  text-black " onClick={closeModal}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}