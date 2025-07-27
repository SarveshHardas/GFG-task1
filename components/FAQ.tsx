import React from 'react'
import {ArrowRight, Plus} from "lucide-react";

const Faq = () => {
    return (
        <div className="sm:mt-15 py-3 font-inter">
            <h1 className="text-4xl font-semibold">
                FAQs
            </h1>
            <div className="flex flex-col justify-end items-end gap-10">
                <div className="bg-[#fafafa] px-[40px] py-[28px] rounded-xl min-w-[60%] hover:-translate-x-5 transition duration-200">
                    <div className="flex justify-between items-center text-black text-xl font-medium">
                        <p>What is PyHack?</p>
                        <Plus size={24} className="transform hover:rotate-90 transition duration-500"/>
                    </div>
                </div>
                <div className="bg-[#fafafa] px-[40px] py-[28px] rounded-xl min-w-[60%] hover:-translate-x-5 transition duration-200">
                    <div className="flex justify-between items-center text-black text-xl font-medium">
                        <p>Where will the workshops be held?</p>
                        <Plus size={24} className="transform hover:rotate-90 transition duration-500"/>
                    </div>
                </div>
                <div className="bg-[#fafafa] px-[40px] py-[28px] rounded-xl min-w-[60%] hover:-translate-x-5 transition duration-200">
                    <div className="flex justify-between items-center text-black text-xl font-medium">
                        <p>What will I learn at PyHack?</p>
                        <Plus size={24} className="transform hover:rotate-90 transition duration-500"/>
                    </div>
                </div>
                <div className="bg-[#fafafa] px-[40px] py-[28px] rounded-xl min-w-[60%] hover:-translate-x-5 transition duration-200">
                    <div className="flex justify-between items-center text-black text-xl font-medium">
                        <p>Do I need prior Python experience?</p>
                        <Plus size={24} className="transform hover:rotate-90 transition duration-500"/>
                    </div>
                </div>
            </div>
            <div className="flex ml-[40%] mt-5 hover:translate-x-2 transition duration-200">
                <div className="text-[#008aff] flex justify-center items-center gap-2 w-fit border-b border-[#008aff]">
                    <p>See more</p>
                    <ArrowRight className="w-5 h-5"/>
                </div>
            </div>
        </div>
    )
}
export default Faq
