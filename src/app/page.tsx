"use client";
import toast from 'react-hot-toast';
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-300">
      <div className="w-full h-16 bg-slate-300  flex justify-between items-center md:px-8 sm:px-4  px-2 border-b-[2px] border-slate-200">
            <Link href={'/'} className="text-2xl text-black font-normal ">
                FZN File-Sharing web app
            </Link>
            {/* <div className="px-3 py-[4px] rounded-md text-black uppercase border-[1px]  border-black">
                Your Files
            </div> */}
            <div className="text-xl font-semibold uppercase px-4 py-[4px] rounded-lg bg-white hover:bg-black hover:text-white transition  ease-in duration-700">
                <Link href={'/login'}>Login</Link>
            </div>
        </div>
      <div className="w-full flex  flex-col items-center mt-40 ">
        <h1 className="text-2xl font-normal mb-2">Welcome to FZN File-Sharing Web App</h1>
        <h1 className="text-2xl font-medium mb-2 font-mono ">Login to access your docuements <Link className="px-2 py-[2px] uppercase  rounded-md border-[1px] border-black" href={'/login'}>Login</Link></h1>
        <p className="text-xl ">You can upload and share your files: Image, PDF... </p>
      </div>
    </div>
  )
}