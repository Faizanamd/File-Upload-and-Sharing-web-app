"use client"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function Login() {
    const router = useRouter();
    useEffect(() => {
        toast.success("la;ldf")
    }, [])
    const [user, setUser] = useState({ email: "", password: "" });
    const handleLogin = async() =>{
        try {
            if (user.password === '') {
                toast.error("Please Enter Password");
                return;
            } else if (user.password.length < 6) {
                toast.error("Password must contain at least 6 characters");
                return;
            }
            const response = await axios.post('/api/users/login', user);
            if(response.data.status){
                toast.success(response.data.message);
                router.push("/dashboard/files");
            }else{
                toast.error(response.data.message);
            }
            console.log(response)
        } catch (error) {
            toast.error("Something went wrong");
        }
    }
    return (
        <div className="w-full h-screen overflow-hidden flex pt-36 justify-center bg-slate-300">
            <div className="w-[300px] bg-slate-300 h-fit shadow-xl px-4 py-3 rounded-lg shadow-slate-400">
                <h2 className="text-center uppercase text-2xl font-normal ">Login</h2>
                <div className="flex flex-col mt-4">
                    <label className="text-2xl mb-[2px] " htmlFor="email">Email</label>
                    <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="w-full px-2 py-2 rounded-md text-lg outline-none" type="email" placeholder="Email" />
                </div>
                <div className="flex flex-col mt-4">
                    <label className="text-2xl mb-[2px] " htmlFor="password">Password</label>
                    <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className="w-full px-2 py-2 rounded-md text-lg outline-none" type="password" placeholder="Password" />
                </div>
                <button onClick={handleLogin} className="w-full uppercase my-4 bg-white py-2 rounded-lg text-2xl font-medium transition duration-500   hover:bg-black hover:text-white ">Login</button>
                <p>Don't have account? <Link className="text-xl underline uppercase" href={'/signup'}>Sign Up</Link></p>
            </div>
        </div>
    )
}