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
    const imgWrapperRef1 = useRef<HTMLDivElement>(null);
    const imgWrapperRef2 = useRef<HTMLDivElement>(null);
    const imgWrapperRef3 = useRef<HTMLDivElement>(null);
    const imgWrapperRef4 = useRef<HTMLDivElement>(null);
    const imgWrapperRef5 = useRef<HTMLDivElement>(null);
    const imgWrapperRef6 = useRef<HTMLDivElement>(null);
    const btmImgWrapperRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(paraRef.current){
            gsap.fromTo(
                paraRef.current,
                {y:50, opacity:0},
                {y:0, opacity:1, duration:2, ease:"easeInOut", delay:2}
            )
        }
        if(divRef.current){
            gsap.fromTo(
                divRef.current,
                {y:50,opacity:0},
                {y:0,opacity:1, duration:1.2, ease:"easeInOut", delay:0}
            )
        }
        if(imgWrapperRef1.current){
            gsap.fromTo(
                imgWrapperRef1.current,
                {y:50, opacity:0},
                {y:0, opacity:1, duration:0.5, ease:"easeInOut", delay:5}
            )
        }
        if(imgWrapperRef2.current){
            gsap.fromTo(
                imgWrapperRef2.current,
                {y:50, opacity:0},
                {y:0, opacity:1, duration:0.5, ease:"easeInOut", delay:5.25}
            )
        }
        if(imgWrapperRef3.current){
            gsap.fromTo(
                imgWrapperRef3.current,
                {y:50, opacity:0},
                {y:0, opacity:1, duration:0.5, ease:"easeInOut", delay:5.5}
            )
        }
        if(imgWrapperRef4.current){
            gsap.fromTo(
                imgWrapperRef4.current,
                {y:50, opacity:0},
                {y:0, opacity:1, duration:0.5, ease:"easeInOut", delay:5.75}
            )
        }
        if(imgWrapperRef5.current){
            gsap.fromTo(
                imgWrapperRef5.current,
                {y:50, opacity:0},
                {y:0, opacity:1, duration:0.5, ease:"easeInOut", delay:6}
            )
        }
        if(imgWrapperRef6.current){
            gsap.fromTo(
                imgWrapperRef6.current,
                {y:50, opacity:0},
                {y:0, opacity:1, duration:0.5, ease:"easeInOut", delay:6.25}
            )
        }
        if(btmImgWrapperRef.current){
            gsap.fromTo(
                btmImgWrapperRef.current,
                {y:50, opacity:0},
                {y:0, opacity:1, duration:1.2, ease:"easeInOut", delay:4}
            )
        }
        if(buttonRef.current){
            gsap.fromTo(
                buttonRef.current,
                {y:50,opacity:0},
                {y:0,opacity:1, duration:2, ease:"easeIn", delay:3}
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
                    className="text-black xs:text-4xl md:text-6xl font-semibold mt-6 md:mt-8 lg:mt-12"
                    words="Access the full power of Python Game Development."
                />

                <div className="text-[#636161] xs:text-md md:text-2xl font-medium mt-6 md:mt-10 lg:mt-15">
                    <p ref={paraRef}>The ultimate game dev workshop for Python enthusiasts.<br/>Learn, create, and innovate with the most versatile pl.</p>
                </div>
                <div ref={buttonRef}>
                    <MagicButton
                        title="Get Started"
                        icon={<ArrowRight size={20}/>}
                        position="right"
                        otherClasses="xs:opacity-0 md:opacity-100"
                    />
                </div>
                <div className="flex justify-center items-end -top-20">
                    <div ref={imgWrapperRef1}><img src="/t1.png" alt="t1" className="relative w-half h-fit scale-100" /></div>
                    <div ref={imgWrapperRef2}><img src="/t2.png" alt="t2" className="relative w-fit h-fit scale-100" /></div>
                    <div ref={imgWrapperRef3}><img src="/t3.png" alt="t3" className="relative w-fit h-fit scale-100" /></div>
                    <div ref={imgWrapperRef4}><img src="/t4.png" alt="t4" className="relative w-fit h-fit scale-100" /></div>
                    <div ref={imgWrapperRef5}><img src="/t5.png" alt="t5" className="relative w-fit h-fit scale-100" /></div>
                    <div ref={imgWrapperRef6}><img src="/t6.png" alt="t6" className="relative w-fit h-fit scale-100" /></div>
                </div>
                <div ref={btmImgWrapperRef} >
                    <img src="/borderbottom.png" alt="border bottom" className="relative w-full h-fit" />
                </div>
            </div>
        </section>
    )
}
export default Hero
