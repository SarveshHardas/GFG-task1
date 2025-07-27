"use client"

import React,{useEffect, useRef} from 'react'
import Image from "next/image";
import {TextGenerateEffect} from "@/components/ui/TextGenerateEffect";
import gsap from "gsap";
import MagicButton from "@/components/ui/MagicButton";
import {ArrowRight} from "lucide-react";

const Hero = () => {

    const paraRef = useRef<HTMLParagraphElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const imgWrapperRef = useRef<HTMLDivElement>(null);
    const btmImgWrapperRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(paraRef.current){
            gsap.fromTo(
                paraRef.current,
                {y:50, opacity:0},
                {y:0, opacity:1, duration:2, ease:"easeInOut", delay:3}
            )
        }
        if(divRef.current){
            gsap.fromTo(
                divRef.current,
                {opacity:0},
                {opacity:1, duration:1.2, ease:"easeInOut", delay:2}
            )
        }
        if(imgWrapperRef.current){
            gsap.fromTo(
                imgWrapperRef.current,
                {x:50, opacity:0},
                {x:0, opacity:1, duration:1.2, ease:"easeInOut", delay:5}
            )
        }
        if(btmImgWrapperRef.current){
            gsap.fromTo(
                btmImgWrapperRef.current,
                {x:50, opacity:0},
                {x:0, opacity:1, duration:1.2, ease:"easeInOut", delay:5}
            )
        }
        if(buttonRef.current){
            gsap.fromTo(
                buttonRef.current,
                {opacity:0},
                {opacity:1, duration:2, ease:"easeIn", delay:2}
            )
        }
    }, []);

    return (
        <section id="hero">
            <div className="sm:mt-10 py-3 font-inter">
                <div ref={divRef} className="bg-[#f0f0f0] flex items-center rounded-full px-7 py-2 gap-4 w-fit">
                    <p>Introducing an era of new and exciting game development</p>
                    <div className="bg-[#909090] rounded-full w-1.5 h-1.5" />
                    <p>Read More</p>
                    <Image src="/right_arrow.png" alt={"right_arrow"} width={20} height={20}/>
                </div>
                <TextGenerateEffect
                    className="text-black text-6xl font-semibold mt-6 md:mt-8 lg:mt-12"
                    words="Access the full power of Python Game Development."
                />

                <div className="text-[#636161] text-2xl font-medium mt-6 md:mt-10 lg:mt-15">
                    <p ref={paraRef}>The ultimate game dev workshop for Python enthusiasts.<br/>Learn, create, and innovate with the most versatile pl.</p>
                </div>
                <div ref={buttonRef}>
                    <MagicButton
                        title="Get Started"
                        icon={<ArrowRight size={20}/>}
                        position="right"
                    />
                </div>

                <div ref={imgWrapperRef} className="relative -mt-6 flex justify-center items-center -top-20">
                    <Image src="/heroimage.png" alt={"hero"} width={800} height={400}/>
                </div>
                <div ref={btmImgWrapperRef} className="relative -mt-20 flex justify-center items-center">
                    <Image src="/borderbottom.png" alt={"border bottom"} width={1500} height={50}/>
                </div>
            </div>
        </section>
    )
}
export default Hero
