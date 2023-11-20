"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { List } from '@phosphor-icons/react';

/* FROM PACKAGE.JSON FILE, WHICH IS NOT NEEDED NOW*/
// "@types/node": "20.9.0",
// "@types/react": "18.2.37",
// "@types/react-dom": "18.2.15",


const Navbar = () => {

    
    const [open,setOpen]= useState(false);

    const handleClick = () => {
        setOpen(!open)
        console.log(open)
    };
    

    return (
    <nav className=' bg-white fixed top-0 left-0 w-full  z-20 h-20 '>
    <div className="md:flex justify-between w-5/6 py-5 md:max-w-5xl mx-auto items-center">
        <div className='flex justify-between items-center'>
        <div className=" ">
            <Link href='/'>
            <Image
            src="https://res.cloudinary.com/dr657lt3a/image/upload/v1699391155/landing/logo/nzxiofg4ohvg5jig43bq.png"
            alt="logo"
            width={154}
            height={40}
            /></Link>
        </div>
        <div className='md:hidden'>
            <button onClick={handleClick}>
            <List size={32} weight="bold" />
            </button>
        </div>
        </div>
        <div className={`md:block flex justify-end ${open ? 'block' : 'hidden'}`}>
            <ul className=" gap-6 md:flex backdrop-blur-md bg-bc md:backdrop-blur-none" >
                <li className='medium px-3 py-2.5 text-center'>
                    <Link href='/services'>Our Services</Link>
                </li>
                <li className=' btn'>
                    <Link href='/contact'>Contact us</Link>
                </li>
            </ul>
        </div>
    </div>
        
    </nav>
    );
};

export default Navbar;

