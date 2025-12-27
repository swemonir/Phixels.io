import React from "react";
import Image from "next/image";
import Link from "next/link";
import shortLogo from "@/assets/short-logo.svg"; // Use logo
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white text-black pt-16 pb-8 border-t border-gray-200">
            <div className="px-4 sm:px-8 lg:px-20 xl:px-56 flex flex-col lg:flex-row justify-between gap-12">

                {/* Brand Column */}
                <div className="lg:w-1/3">
                    <div className="flex items-center gap-2 mb-6">
                        <Image src={shortLogo} alt="Phixels Logo" className="h-10 w-auto" />
                        <span className="text-2xl font-bold">Phixels</span>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Conditions | Privacy Policy | Blog | Contact Us <br />
                        Copyright © 2024 all Rights Reserved
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#ED1F24] hover:text-white transition-colors"><FaFacebookF /></a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#ED1F24] hover:text-white transition-colors"><FaTwitter /></a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#ED1F24] hover:text-white transition-colors"><FaYoutube /></a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#ED1F24] hover:text-white transition-colors"><FaLinkedinIn /></a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#ED1F24] hover:text-white transition-colors"><FaInstagram /></a>
                    </div>
                </div>

                {/* Links Column */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:w-2/3">
                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li><Link href="/about" className="hover:text-[#ED1F24]">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-[#ED1F24]">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-[#ED1F24]">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li><Link href="/services/mobile" className="hover:text-[#ED1F24]">Mobile App Dev</Link></li>
                            <li><Link href="/services/web" className="hover:text-[#ED1F24]">Web Development</Link></li>
                            <li><Link href="/services/uiux" className="hover:text-[#ED1F24]">UI/UX Design</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Resources</h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li><Link href="/blog" className="hover:text-[#ED1F24]">Blog</Link></li>
                            <li><Link href="/portfolio" className="hover:text-[#ED1F24]">Portfolio</Link></li>
                            <li><Link href="/case-studies" className="hover:text-[#ED1F24]">Case Studies</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
