"use client"
import Image from "next/image";
import ramdan from '../../../../public/ramadan.jpeg'
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function Files() {
    useEffect(() => {
        fetchFiles();
    }, [])
    const [files, setFiles] = useState([]);
    const fetchFiles = async () => {
        try {
            const response = await axios.get('/api/users/files');
            console.log(response);
            setFiles(response.data.files);
            console.log(files);
        } catch (error: any) {
            toast.error(error.message);
        }
    }

    return (
        <div className="flex flex-wrap space-x-3 space-y-3  items-baseline justify-center">
            {files && files.map((file:any) => {
                return (
                    <div className="w-[280px] bg-white px-2 py-2 rounded-md" >
                        <div className="w-full flex items-center justify-between">
                            <h1>{file.title}</h1>
                            <div className="origin-center rotate-90 font-bold text-xl">&hellip;</div>
                        </div>
                        <Image className='px-4  h-40 my-4' src={ramdan} alt="" />
                        <div className='flex items-center justify-between my-2'>
                            <div className='flex items-center space-x-1'>
                                <Image className='rounded-full' width={25} height={25} src={ramdan} alt='' />
                                <span className='text-[10px]'>Mr Faizan Ahmad</span>
                            </div>
                            <div className='text-[10px]'>
                                12:35 01-Jul-2024
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="w-[280px] bg-white px-2 py-2 rounded-md ">
                <div className="w-full flex items-center justify-between">
                    <h1>Your image adf;a</h1>
                    <div className="origin-center rotate-90 font-bold text-xl">&hellip;</div>
                </div>
                <Image className='px-4  h-40 my-4' src={ramdan} alt="" />
                <div className='flex items-center justify-between my-2'>
                    <div className='flex items-center space-x-1'> <Image className='rounded-full' width={25} height={25} src={ramdan} alt='' />
                        <span className='text-[10px]'>Mr Faizan Ahmad</span>
                    </div>
                    <div className='text-[10px]'>
                        12:35 01-Jul-2024
                    </div>
                </div>
            </div>
            <div className="w-[280px] bg-white px-2 py-2 rounded-md ">
                <div className="w-full flex items-center justify-between">
                    <h1>Your image adf;a</h1>
                    <div className="origin-center rotate-90 font-bold text-xl">&hellip;</div>
                </div>
                <Image className='px-4  h-40 my-4' src={ramdan} alt="" />
                <div className='flex items-center justify-between my-2'>
                    <div className='flex items-center space-x-1'> <Image className='rounded-full' width={25} height={25} src={ramdan} alt='' />
                        <span className='text-[10px]'>Mr Faizan Ahmad</span>
                    </div>
                    <div className='text-[10px]'>
                        12:35 01-Jul-2024
                    </div>
                </div>
            </div><div className="w-[280px] bg-white px-2 py-2 rounded-md ">
                <div className="w-full flex items-center justify-between">
                    <h1>Your image adf;a</h1>
                    <div className="origin-center rotate-90 font-bold text-xl">&hellip;</div>
                </div>
                <Image className='px-4  h-40 my-4' src={ramdan} alt="" />
                <div className='flex items-center justify-between my-2'>
                    <div className='flex items-center space-x-1'> <Image className='rounded-full' width={25} height={25} src={ramdan} alt='' />
                        <span className='text-[10px]'>Mr Faizan Ahmad</span>
                    </div>
                    <div className='text-[10px]'>
                        12:35 01-Jul-2024
                    </div>
                </div>
            </div><div className="w-[280px] bg-white px-2 py-2 rounded-md ">
                <div className="w-full flex items-center justify-between">
                    <h1>Your image adf;a</h1>
                    <div className="origin-center rotate-90 font-bold text-xl">&hellip;</div>
                </div>
                <Image className='px-4  h-40 my-4' src={ramdan} alt="" />
                <div className='flex items-center justify-between my-2'>
                    <div className='flex items-center space-x-1'> <Image className='rounded-full' width={25} height={25} src={ramdan} alt='' />
                        <span className='text-[10px]'>Mr Faizan Ahmad</span>
                    </div>
                    <div className='text-[10px]'>
                        12:35 01-Jul-2024
                    </div>
                </div>
            </div>


            <div className="w-[300px] bg-white px-2 py-2 rounded-md">
                <div className="w-full flex items-center justify-between">
                    <h1>Your image adf;a</h1>
                    <div className="origin-center rotate-90 font-bold text-xl">&hellip;</div>
                </div>
                <Image className='px-4  h-40 my-4' src={ramdan} alt="" />
                <div className='flex items-center justify-between my-2'>
                    <div className='flex items-center space-x-1'> <Image className='rounded-full' width={25} height={25} src={ramdan} alt='' />
                        <span className='text-[10px]'>Mr Faizan Ahmad</span>
                    </div>
                    <div className='text-[10px]'>
                        12:35 01-Jul-2024
                    </div>
                </div>
            </div>
            <div className="w-[300px] bg-white px-2 py-2 rounded-md">
                <div className="w-full flex items-center justify-between">
                    <h1>Your image adf;a</h1>
                    <div className="origin-center rotate-90 font-bold text-xl">&hellip;</div>
                </div>
                <Image className='px-4  h-40 my-4' src={ramdan} alt="" />
                <div className='flex items-center justify-between my-2'>
                    <div className='flex items-center space-x-1'> <Image className='rounded-full' width={25} height={25} src={ramdan} alt='' />
                        <span className='text-[10px]'>Mr Faizan Ahmad</span>
                    </div>
                    <div className='text-[10px]'>
                        12:35 01-Jul-2024
                    </div>
                </div>
            </div>
            <div className="w-[300px] bg-white px-2 py-2 rounded-md">
                <div className="w-full flex items-center justify-between">
                    <h1>Your image adf;a</h1>
                    <div className="origin-center rotate-90 font-bold text-xl">&hellip;</div>
                </div>
                <Image className='px-4  h-40 my-4' src={ramdan} alt="" />
                <div className='flex items-center justify-between my-2'>
                    <div className='flex items-center space-x-1'> <Image className='rounded-full' width={25} height={25} src={ramdan} alt='' />
                        <span className='text-[10px]'>Mr Faizan Ahmad</span>
                    </div>
                    <div className='text-[10px]'>
                        12:35 01-Jul-2024
                    </div>
                </div>
            </div>
            <div className="w-[300px] bg-white px-2 py-2 rounded-md">
                <div className="w-full flex items-center justify-between">
                    <h1>Your image adf;a</h1>
                    <div className="origin-center rotate-90 font-bold text-xl">&hellip;</div>
                </div>
                <Image className='px-4  h-40 my-4' src={ramdan} alt="" />
                <div className='flex items-center justify-between my-2'>
                    <div className='flex items-center space-x-1'> <Image className='rounded-full' width={25} height={25} src={ramdan} alt='' />
                        <span className='text-[10px]'>Mr Faizan Ahmad</span>
                    </div>
                    <div className='text-[10px]'>
                        12:35 01-Jul-2024
                    </div>
                </div>
            </div>
            <div className="w-[300px] bg-white px-2 py-2 rounded-md">
                <div className="w-full flex items-center justify-between">
                    <h1>Your image adf;a</h1>
                    <div className="origin-center rotate-90 font-bold text-xl">&hellip;</div>
                </div>
                <Image className='px-4  h-40 my-4' src={ramdan} alt="" />
                <div className='flex items-center justify-between my-2'>
                    <div className='flex items-center space-x-1'> <Image className='rounded-full' width={25} height={25} src={ramdan} alt='' />
                        <span className='text-[10px]'>Mr Faizan Ahmad</span>
                    </div>
                    <div className='text-[10px]'>
                        12:35 01-Jul-2024
                    </div>
                </div>
            </div>
            <div className="w-[300px] bg-white px-2 py-2 rounded-md">
                <div className="w-full flex items-center justify-between">
                    <h1>Your image adf;a</h1>
                    <div className="origin-center rotate-90 font-bold text-xl">&hellip;</div>
                </div>
                <Image className='px-4  h-40 my-4' src={ramdan} alt="" />
                <div className='flex items-center justify-between my-2'>
                    <div className='flex items-center space-x-1'> <Image className='rounded-full' width={25} height={25} src={ramdan} alt='' />
                        <span className='text-[10px]'>Mr Faizan Ahmad</span>
                    </div>
                    <div className='text-[10px]'>
                        12:35 01-Jul-2024
                    </div>
                </div>
            </div>
            <div className="w-[300px] bg-white px-2 py-2 rounded-md">
                <div className="w-full flex items-center justify-between">
                    <h1>Your image adf;a</h1>
                    <div className="origin-center rotate-90 font-bold text-xl">&hellip;</div>
                </div>
                <Image className='px-4  h-40 my-4' src={ramdan} alt="" />
                <div className='flex items-center justify-between my-2'>
                    <div className='flex items-center space-x-1'> <Image className='rounded-full' width={25} height={25} src={ramdan} alt='' />
                        <span className='text-[10px]'>Mr Faizan Ahmad</span>
                    </div>
                    <div className='text-[10px]'>
                        12:35 01-Jul-2024
                    </div>
                </div>
            </div>
            <div className="w-[300px] bg-white px-2 py-2 rounded-md">
                <div className="w-full flex items-center justify-between">
                    <h1>Your image adf;a</h1>
                    <div className="origin-center rotate-90 font-bold text-xl">&hellip;</div>
                </div>
                <Image className='px-4  h-40 my-4' src={ramdan} alt="" />
                <div className='flex items-center justify-between my-2'>
                    <div className='flex items-center space-x-1'> <Image className='rounded-full' width={25} height={25} src={ramdan} alt='' />
                        <span className='text-[10px]'>Mr Faizan Ahmad</span>
                    </div>
                    <div className='text-[10px]'>
                        12:35 01-Jul-2024
                    </div>
                </div>
            </div>
            <div className="w-[300px] bg-white px-2 py-2 rounded-md">
                <div className="w-full flex items-center justify-between">
                    <h1>Your image adf;a</h1>
                    <div className="origin-center rotate-90 font-bold text-xl">&hellip;</div>
                </div>
                <Image className='px-4  h-40 my-4' src={ramdan} alt="" />
                <div className='flex items-center justify-between my-2'>
                    <div className='flex items-center space-x-1'> <Image className='rounded-full' width={25} height={25} src={ramdan} alt='' />
                        <span className='text-[10px]'>Mr Faizan Ahmad</span>
                    </div>
                    <div className='text-[10px]'>
                        12:35 01-Jul-2024
                    </div>
                </div>
            </div>
            <div className="w-[300px] bg-white px-2 py-2 rounded-md">
                <div className="w-full flex items-center justify-between">
                    <h1>Your image adf;a</h1>
                    <div className="origin-center rotate-90 font-bold text-xl">&hellip;</div>
                </div>
                <Image className='px-4  h-40 my-4' src={ramdan} alt="" />
                <div className='flex items-center justify-between my-2'>
                    <div className='flex items-center space-x-1'> <Image className='rounded-full' width={25} height={25} src={ramdan} alt='' />
                        <span className='text-[10px]'>Mr Faizan Ahmad</span>
                    </div>
                    <div className='text-[10px]'>
                        12:35 01-Jul-2024
                    </div>
                </div>
            </div>
            <div className="w-[300px] bg-white px-2 py-2 rounded-md">
                <div className="w-full flex items-center justify-between">
                    <h1>Your image adf;a</h1>
                    <div className="origin-center rotate-90 font-bold text-xl">&hellip;</div>
                </div>
                <Image className='px-4  h-40 my-4' src={ramdan} alt="" />
                <div className='flex items-center justify-between my-2'>
                    <div className='flex items-center space-x-1'> <Image className='rounded-full' width={25} height={25} src={ramdan} alt='' />
                        <span className='text-[10px]'>Mr Faizan Ahmad</span>
                    </div>
                    <div className='text-[10px]'>
                        12:35 01-Jul-2024
                    </div>
                </div>
            </div>
            <div className="w-[300px] bg-white px-2 py-2 rounded-md">
                <div className="w-full flex items-center justify-between">
                    <h1>Your image adf;a</h1>
                    <div className="origin-center rotate-90 font-bold text-xl">&hellip;</div>
                </div>
                <Image className='px-4  h-40 my-4' src={ramdan} alt="" />
                <div className='flex items-center justify-between my-2'>
                    <div className='flex items-center space-x-1'> <Image className='rounded-full' width={25} height={25} src={ramdan} alt='' />
                        <span className='text-[10px]'>Mr Faizan Ahmad</span>
                    </div>
                    <div className='text-[10px]'>
                        12:35 01-Jul-2024
                    </div>
                </div>
            </div>
            <div className="w-[300px] bg-white px-2 py-2 rounded-md">
                <div className="w-full flex items-center justify-between">
                    <h1>Your image adf;a</h1>
                    <div className="origin-center rotate-90 font-bold text-xl">&hellip;</div>
                </div>
                <Image className='px-4  h-40 my-4' src={ramdan} alt="" />
                <div className='flex items-center justify-between my-2'>
                    <div className='flex items-center space-x-1'> <Image className='rounded-full' width={25} height={25} src={ramdan} alt='' />
                        <span className='text-[10px]'>Mr Faizan Ahmad</span>
                    </div>
                    <div className='text-[10px]'>
                        12:35 01-Jul-2024
                    </div>
                </div>
            </div>
            <div className="w-[300px] bg-white px-2 py-2 rounded-md">
                <div className="w-full flex items-center justify-between">
                    <h1>Your image adf;a</h1>
                    <div className="origin-center rotate-90 font-bold text-xl">&hellip;</div>
                </div>
                <Image className='px-4  h-40 my-4' src={ramdan} alt="" />
                <div className='flex items-center justify-between my-2'>
                    <div className='flex items-center space-x-1'> <Image className='rounded-full' width={25} height={25} src={ramdan} alt='' />
                        <span className='text-[10px]'>Mr Faizan Ahmad</span>
                    </div>
                    <div className='text-[10px]'>
                        12:35 01-Jul-2024
                    </div>
                </div>
            </div>
            <div className="w-[300px] bg-white px-2 py-2 rounded-md">
                <div className="w-full flex items-center justify-between">
                    <h1>Your image adf;a</h1>
                    <div className="origin-center rotate-90 font-bold text-xl">&hellip;</div>
                </div>
                <Image className='px-4  h-40 my-4' src={ramdan} alt="" />
                <div className='flex items-center justify-between my-2'>
                    <div className='flex items-center space-x-1'> <Image className='rounded-full' width={25} height={25} src={ramdan} alt='' />
                        <span className='text-[10px]'>Mr Faizan Ahmad</span>
                    </div>
                    <div className='text-[10px]'>
                        12:35 01-Jul-2024
                    </div>
                </div>
            </div>

        </div>
    )
}