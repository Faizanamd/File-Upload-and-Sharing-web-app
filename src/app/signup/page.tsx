"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Signup() {
    const router = useRouter();
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const handlRegister = async () => {
        try {
            if (user.name === '') {
                toast.error("Please Enter Name");
                return;
            } else if (user.name.length < 4) {
                toast.error("Name must contain at least 4 letters");
                return;
            }

            // Validate user's email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(user.email)) {
                toast.error("Please Enter a Valid Email Address");
                return;
            }

            // Validate user's password
            if (user.password === '') {
                toast.error("Please Enter Password");
                return;
            } else if (user.password.length < 6) {
                toast.error("Password must contain at least 6 characters");
                return;
            }
            const response = await axios.post("/api/users/signup", user);
            console.log(response);
            if(response.data.status){
                toast.success(response.data.message);
                router.push("/login")
            }else{
                toast.error(response.data.message);
            }
        } catch (error: any) {
            console.log(error.message);
        }
    }
    return (
        <div className="w-full h-screen overflow-hidden flex pt-36 justify-center bg-slate-300">
            <div className="w-[300px] bg-slate-300 h-fit shadow-xl px-4 py-3 rounded-lg shadow-slate-400">
                <h2 className="text-center uppercase text-2xl font-normal ">Register</h2>
                <div className="flex flex-col mt-4">
                    <label className="text-2xl mb-[2px] " htmlFor="username">Username</label>
                    <input value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} className="w-full px-2 py-2 rounded-md text-lg outline-none" type="text" placeholder="Username" />
                </div>
                <div className="flex flex-col mt-4">
                    <label className="text-2xl mb-[2px] " htmlFor="email">Email</label>
                    <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="w-full px-2 py-2 rounded-md text-lg outline-none" type="email" placeholder="Email" />
                </div>
                <div className="flex flex-col mt-4">
                    <label className="text-2xl mb-[2px] " htmlFor="password">Password</label>
                    <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className="w-full px-2 py-2 rounded-md text-lg outline-none" type="password" placeholder="Password" />
                </div>
                <button className="w-full uppercase my-4 bg-white py-2 rounded-lg text-2xl font-medium transition duration-500   hover:bg-black hover:text-white " onClick={handlRegister}>Register</button>
                <p>Already have an account? <Link className="text-xl underline uppercase" href={'/login'}>Login</Link></p>
            </div>
        </div>
    )
}