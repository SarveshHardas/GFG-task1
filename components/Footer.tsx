import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <section id="footer">
            <div className="bg-[#fafafa] grid md:grid-cols-2 xs:grid-cols-1 xs:grid-rows-4 md:grid-rows-3 xs:px-5 xs:py-3 md:px-10 md:py-7 xs:space-y-3 md:space-y-0 md:gap-2 rounded-2xl font-inter">
                <div className="row-span-1 flex justify-start items-start">
                    <div className="flex justify-start items-center gap-5">
                        <Image src="/gray-lg.png" alt="gray-logo" width={48} height={20}/>
                        <Image src="/ft-lg-text.png" alt="footer-text" width={200} height={20}/>
                    </div>
                </div>
                <div className="md:row-span-3 xs:row-span-1 flex justify-around">
                    <div className="space-y-5">
                        <p className="text-semibold text-black text-lg">Resources</p>
                        <ul className="text-[#8f8e8e] text-md">
                            <li>Brand</li>
                            <li>FAQ</li>
                            <li>Help & Support</li>
                            <li>Governance</li>
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <p className="text-semibold text-black text-lg">Developers</p>
                        <ul className="text-[#8f8e8e] text-md">
                            <li>Technical Paper</li>
                            <li>Security</li>
                            <li>Game Design</li>
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <p className="text-semibold text-black text-lg">Company</p>
                        <ul className="text-[#8f8e8e] text-md">
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="row-span-1 text-[#636363]">
                    <p>
                        PyHack provides a wide range of resources and hands-on experience to help you master
                        Python-based game development. Explore new techniques, share your creations, and collaborate
                        with fellow developers. Whether you&apos;re looking to build indie games or start a career in the
                        gaming industry, PyHack is the place to begin.
                    </p>
                </div>
                <div className="row-span-1 flex flex-col justify-end items-start">
                    <div className="flex justify-end items-center gap-2">
                        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <Image src="/instagram.png" alt="Instagram" width={24} height={24} className="hover:-translate-y-2 transition duration-300"/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/sarvesh-hardas-5896a2323" target="_blank" rel="noopener noreferrer">
                            <Image src="/twitter.png" alt="Twitter" width={24} height={24} className="hover:-translate-y-2 transition duration-300"/>
                        </Link>
                        <Link href="https://discord.com" target="_blank" rel="noopener noreferrer">
                            <Image src="/discord.png" alt="Discord" width={24} height={24} className="hover:-translate-y-2 transition duration-300"/>
                        </Link>
                        <Link href="https://github.com/SarveshHardas" target="_blank" rel="noopener noreferrer">
                            <Image src="/Github.png" alt="Github" width={24} height={24} className="hover:-translate-y-2 transition duration-300"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-1.5 gap-1">
                <Image src="/ftborderbottom1.png" alt="border1" width={1048} height={6} className="w-full"/>
                <Image src="/ftborderbottom2.png" alt="border2" width={800} height={6} className="w-[90%]"/>
                <Image src="/ftborderbottom3.png" alt="border3" width={600} height={6} className="w-80%"/>
            </div>
        </section>
    )
}
export default Footer
