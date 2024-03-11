import Link from "next/link";
export default function Navbar() {
    return (
            <div className="w-full h-16 bg-slate-300  flex justify-between items-center md:px-8 sm:px-4  px-2 border-b-[2px] border-slate-200">
                <Link href={'/'} className="text-2xl text-black font-normal ">
                    FZN File-Sharing web app
                </Link>
                <div className="px-3 py-[4px] rounded-md text-black uppercase border-[1px]  border-black">
                    Your Files
                </div>
                <div className="text-xl font-semibold uppercase px-4 py-[4px] rounded-lg bg-white hover:bg-black hover:text-white transition  ease-in duration-700">
                    <Link href={'/login'}>Login</Link>
                </div>
            </div>
    )
}