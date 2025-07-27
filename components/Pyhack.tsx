import React from 'react'
import {ArrowRight} from "lucide-react";
import Image from "next/image";

const Pyhack = () => {
    return (
        <div className="sm:mt-15 py-3 font-inter">
            <h1 className="text-4xl font-semibold">
                About PyHack
            </h1>
            <p className="text-[#636161] mt-5 text-xl font-medium">
                PyHack is a dynamic, community-driven workshop<br/>designed to teach game development using Python.
            </p>
            <div className="mt-10 text-black flex justify-start items-center w-fit gap-2 border-b border-black hover:translate-x-2 transition duration-200">
                <p>Learn More</p>
                <ArrowRight className="w-5 h-5"/>
            </div>
            <div className="mt-10 grid grid-cols-2 grid-rows-2 gap-5 h-[520px]">
                <div className="row-span-2 relative">
                    <Image src="/pyhack1.png" alt="pyhack1" fill className="rounded-2xl object-cover"/>
                </div>
                <div className="relative">
                    <Image src="/pyhack2.png" alt="pyhack2" fill className="rounded-2xl object-cover"/>
                </div>
                <div className="relative">
                    <Image src="/pyhack3.png" alt="pyhack3" fill className="rounded-2xl object-cover"/>
                </div>
            </div>
        </div>
    )
}
export default Pyhack
