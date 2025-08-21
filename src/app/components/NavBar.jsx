"use client";
import { useSession, signOut } from 'next-auth/react'; // <-- signOut add korte hobe
import Link from 'next/link';
import React, { useState } from 'react'

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const { data: session } = useSession();

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
                    <Link href="/dashboard/add-product">Dashboard</Link>
                </div>

                {/* Login / Logout */}
                <div>
                    {session ? (
                        <>
                            <span className="mr-4">Hi, {session.user.name}</span>
                            <button
                                onClick={() => signOut({ callbackUrl: "/login" })}
                                className="px-6 py-2 text-black rounded bg-[#EEEEEE] hover:bg-[#350a0a] hover:text-white cursor-pointer"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link href="/login" className="px-6 py-2 text-black rounded bg-[#EEEEEE] hover:bg-[#350a0a] hover:text-white cursor-pointer">
                            Login
                        </Link>
                    )}
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
                        <Link href="/dashboard/add-product" className="py-2" onClick={() => setOpen(false)}>Dashboard</Link>
                        {!session && (
                            <Link href="/login" className="py-2" onClick={() => setOpen(false)}>Login</Link>
                        )}
                    </div>
                )}
            </nav>
        </div>
    )
}
