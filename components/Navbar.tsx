'use client';

import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "@/store";

import Link from "next/link";
import { supabase } from "@/app/lib/supabaseClient";
import { logout } from "@/store/userSlice";

export default function Navbar() {
    const dispatch  = useDispatch();
    async function Logout() {
        supabase.auth.signOut();
        dispatch(logout());
    }

    const user = useSelector<RootState, any>(state => state.user.user);

    return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-700 py-4 px-8 sm:px-16">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link href="/"><span className="font-semibold text-xl tracking-tight">พิชิต<span className="text-red-500">สามร้อย</span></span></Link>
        </div>
        <div id="btn_menu" className="block sm:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
        </div>
        <ul id="menu" className="flex-grow hidden sm:flex sm:items-center transition duration-100 sm:flex-gro text-white text-center">
            <li>
                <Link href="/" className="w-20 block mt-4 sm:mt-0 sm:inline-block hover:font-semibold py-2">
                    หน้าหลัก
                </Link>
            </li>
            <li>
                <Link href="/tasks" className="w-20 block mt-4 sm:mt-0 sm:inline-block hover:font-semibold py-2">
                    โจทย์
                </Link>
            </li>
            <li>
                <Link href="/submission" className="w-20 block mt-4 sm:mt-0 sm:inline-block hover:font-semibold py-2">
                    ส่งโจทย์
                </Link>
            </li>
            <li>
                <Link href="/submission" className="w-20 block mt-4 sm:mt-0 sm:inline-block hover:font-semibold py-2">
                    บทความ
                </Link>
            </li>
        </ul>
        <div className="hidden sm:block">
            {user ?
            <div>
             {user.user_metadata.full_name}
            <button id="logout" onClick={Logout} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-700 hover:bg-white mt-4 sm:mt-0">ออกจากระบบ</button>
            </div>
            :
            <Link href="/login" id="login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-700 hover:bg-white mt-4 sm:mt-0">เข้าสู่ระบบ</Link>
            }
        </div>
    </nav>)
}