"use client"
import Link from '@/node_modules/next/link';
import React from 'react';
import { useState } from 'react';
import SwarchBar from "./SearchBar";
import { CiShoppingCart } from "react-icons/ci";
import { BsChevronCompactUp } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { signIn, signOut, useSession } from 'next-auth/react';
import {redirect} from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
    const x = 35;
    const [showProfile, setShowProfile] = useState<boolean>(false);
    const [showNav, setShowNav] = useState<boolean>(false);
    const {data:session} = useSession();

    console.log(session?.user + "-----------------");

    const SignOut = () =>{
        if (session && session.user)
        {
            return (
            <ul className='py-5 px-1 text-neutral-600'>
                {<li className='hover:bg-gray-100 hover:test-neutral-900 px-5 py-2 cursor-pointer'>
                session ? session.user.name : ""
                </li>}
                <li onClick={()=>{
                    console.log("+++++++++++++++++++++")
                 signOut()
                    }} className='whitespace-nowrap  hover:text-red-600 px-5 py-2'>SignOut</li>
                <li className='whitespace-nowrap hover:bg-gray-100 hover:text-neutral-900 px-5 py-2 cursor-pointer'>
                    <a href='/addproduct'> Add product</a>
                </li>
            </ul>)
        }
        return (
            <ul>
                <li onClick={()=>signIn()} 
                        className='whitespace-nowrap hover:bg-gray-100
                         hover:text-neutral-900 px-5 py-2 cursor-pointer'>
                            SignIn
                         </li>
            </ul>
        )
    }

    return (
        <div>
            <div className='flex items-center justify-between py-4 relative'>
                {/* -----------------------    SEINE  ------------- */}
                <div className="flex items-center md:space-x-10 lg:space-x-20">
                    <div className="font-semibold text-2xl"><a href="/">SEINE</a></div>
                    <nav className='max-md:hidden'>
                        <ul className='flex items-center lg:space-x-10 space-x-7 opacity-70 text-[15px]'>
                            <li><a href="/" className='py-3 inline-block w-full'>Shop</a></li>
                            <li><a href="filters" className='py-3 inline-block w-full'>Filters</a></li>
                            <li><a href="myproducts" className='py-3 inline-block w-full'>My products</a></li>
                        </ul>
                    </nav>
                </div>

                <div className='flex items-center space-x-4 px-4'>
                    {/* ------  Search */}
                    <SwarchBar />
                    
                    {/* --------  image Click  */}
                    <div onClick={() => setShowProfile(!showProfile)}className='relative cursor-pointer'>
                        <img src="user.jpg" className="w-[34px] h-[34px] rounded-full object-fill" alt="User" />
                        {showProfile ? <div className='absolute bg-white z-[2] rounded-lg shadow-lg'>
                            <Link href="./components/signin">SignIn</Link>
                            <SignOut />
                        </div>
                            : ""}
                    </div>
                    

                    <Link href="/cart">
                        <div className='p-2 bg-gray-100 rounded-full'>
                            <CiShoppingCart size={20}/>
                        </div>
                    </Link>
                    <span onClick={() => setShowNav(!showNav)} className='p-[9px] bg-gray-100 rounded-full md:hidden'>
                        <BsChevronCompactUp className={`transition ease-in duration-150 ${showNav ? "rotate-180": "0"}`}/>
                    </span>
                </div>
            </div>
            <div className={`md:hidden ${showNav ? "pb-4 px-5": "h-0 invisible opacity-0"}`}>
                <ul className='flex flex-col test-[15px] opacity-75 px-2'>
                    <li><a href="/shop" className='py-3 inline-block w-full'>Shop</a></li>
                    <li><a href="/filters" className='py-3 inline-block w-full'>filters</a></li>
                    {session?.user && (
                        <li><a href="/myproducts" className='py-3 inline-block w-full'>my products</a></li>
                    )}
                </ul>
                <div className='flex items-center bg-gray-100 p-2 rounded-lg my-4 py-3'>
                    <input 
                        type='text'
                        className='outline-none w-full bg-transparent ml-2 caret-blue-500 
                        placeholder:font-light placeholder:text-gray-600 text-[15px]'
                        placeholder='Search'
                        autoComplete='false' 
                    />
                    <button><BiSearch size={20} className='opacity-50' /></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;