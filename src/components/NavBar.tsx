
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="border-b bg-secondary">
            <div className="max-w-7xl justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 h-[50px]">
                <div className="flex justify-between h-full">
                    <div className="flex items-center">
                        <a href="/" className="text-2xl font-bold ">Fista</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href="/Profle">Profile</Link>
                        <UserButton />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;