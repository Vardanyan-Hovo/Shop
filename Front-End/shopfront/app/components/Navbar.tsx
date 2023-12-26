"use client"
import React from 'react';
import{ useState } from 'react';
import SwarchBar from "./SearchBar"


type Props = {};


const Navbar = (props: Props) => {
    const x = 35;
    const [showProfile, setShowProfile] = useState<boolean>(false);
    const [showNav, setShowNav] = useState<boolean>(false);
    return (
        <div>
            <div className='flex items-center justify-between py-4 relative'>
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
                <div className='flex items-center space-x-4'>
                    <SwarchBar />
                </div>
            </div>
        </div>
    )
}

export default Navbar;