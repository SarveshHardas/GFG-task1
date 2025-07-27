import React from 'react'
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <Image src="/logo.png" alt="GFG" height={30} width={30}/>
            <nav className="flex items-center gap-15 font-semibold font-inter">
                <span>Products</span>
                <span>Resources</span>
                <span>Developers</span>
                <button className="hover:bg-black hover:text-white transition duration-300 rounded-2xl px-5 py-1">
                    <span>
                        Open App
                    </span>
                </button>
            </nav>
        </div>
    )
}
export default Navbar
