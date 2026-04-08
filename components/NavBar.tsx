import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return (
        <header className="w-full flex items-center justify-between p-4 bg-gray-800 text-white">
            <h1 className="text-2xl font-bold">Dev Events Centre</h1>
            <nav>
                <Link href="/" className="logo">
                    <Image
                        src="/logo.png"
                        alt="Dev Events Centre"
                        width={100}
                        height={50}
                    />
                </Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="#" className="hover:underline">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:underline">
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:underline">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:underline">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
