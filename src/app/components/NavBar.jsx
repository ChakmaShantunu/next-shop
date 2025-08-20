"use client";
import Link from 'next/link';
import React, { useState } from 'react'

export default function NavBar() {
    const [open, setOpen] = useState(false);
    return (
        <div className='max-w-11/12 mx-auto'>
            <nav className="bg-[#0F0E0E] text-white p-4 flex items-center justify-between rounded-2xl">
                <div className="text-xl font-bold">
                    <Link href="/">Next-Shop</Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-4">
                    <Link href="/">Home</Link>
                    <Link href="/products">Products</Link>
                </div>
                <div>
                    <Link href="/signUp"><button className='btn bg-[#EEEEEE] py-2 px-4 cursor-pointer text-black rounded-2xl'>Sign Up</button></Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setOpen(!open)}>
                        {open ? "Close" : "Menu"}
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center md:hidden">
                        <Link href="/" className="py-2" onClick={() => setOpen(false)}>Home</Link>
                        <Link href="/products" className="py-2" onClick={() => setOpen(false)}>Products</Link>
                        <Link href="/login" className="py-2" onClick={() => setOpen(false)}>Login</Link>
                    </div>
                )}
            </nav>
        </div>
    )
}
