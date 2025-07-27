import React from 'react'
import Image from "next/image";

const Features = () => {
    return (
        <div className="sm:mt-15 py-3 font-inter">
            <h1 className="text-4xl font-semibold">
                Workshop Features
            </h1>
            <div className="font-inter grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 gap-5 mt-10">
                <div className="bg-[#fafafa] w-full rounded-2xl flex flex-col hover:-translate-y-2 transition duration-300">
                    <div className="flex justify-end items-center h-[200px] overflow-hidden">
                        <Image src="/grid1.png" alt="G1" height={350} width={350} className="object-cover w-[65%] h-full"/>
                    </div>
                    <div className="px-7 my-10 flex-grow">
                        <p className="font-semibold text-3xl">Game Mechanics</p>
                        <p className="text-[#636363] text-lg">Master physics, collision detection, AI, and game loops.</p>
                    </div>
                </div>
                <div className="bg-[#fafafa] w-full rounded-2xl flex flex-col hover:-translate-y-2 transition duration-300">
                    <div className="flex justify-end items-center h-[200px] overflow-hidden">
                        <Image src="/grid2.png" alt="G1" height={350} width={350} className="object-cover w-[60%] h-full"/>
                    </div>
                    <div className="px-7 my-10 flex-grow">
                        <p className="font-semibold text-3xl">Visual Effects</p>
                        <p className="text-[#636363] text-lg">Create 2D/3D graphics and animations.</p>
                    </div>
                </div>
                <div className="bg-[#fafafa] w-full rounded-2xl flex flex-col hover:-translate-y-2 transition duration-300">
                    <div className="flex justify-end items-center h-[200px] overflow-hidden">
                        <Image src="/grid3.png" alt="G1" height={350} width={350} className="object-cover w-[60%] h-full"/>
                    </div>
                    <div className="px-7 my-10 flex-grow">
                        <p className="font-semibold text-3xl">Game Balancing</p>
                        <p className="text-[#636363] text-lg">Balance difficulty and progression.</p>
                    </div>
                </div>
                <div className="bg-[#fafafa] w-full rounded-2xl flex flex-col hover:-translate-y-2 transition duration-300">
                    <div className="flex justify-end items-center h-[200px] overflow-hidden">
                        <Image src="/grid4.png" alt="G1" height={350} width={350} className="object-cover w-[53%] h-full"/>
                    </div>
                    <div className="px-7 my-10 flex-grow">
                        <p className="font-semibold text-3xl">Cross-Platform Dev</p>
                        <p className="text-[#636363] text-lg">Deploy games on PC, web, and mobile.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features
