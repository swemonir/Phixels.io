"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import shortLogo from "@/assets/short-logo.svg";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsMicrosoftTeams } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="bg-white text-black py-8 border-t border-gray-200">
            <div className="px-4 sm:px-8 lg:px-20 xl:px-56 flex flex-col xl:flex-row items-center justify-between gap-6 xs:gap-8">

                {/* Left Section: Logo + Divider + Text */}
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Image src={shortLogo} alt="Phixels Logo" className="h-10 w-auto" />
                    </div>

                    {/* Vertical Divider (Hidden on mobile) */}
                    <div className="hidden md:block h-12 w-px bg-gray-300"></div>

                    {/* Links and Copyright */}
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 font-medium">
                            <Link href="/careers" className="hover:text-black transition-colors">Career</Link>
                            <span className="hidden sm:inline text-gray-300">|</span>
                            <Link href="/terms" className="hover:text-black transition-colors">Terms and Conditions</Link>
                            <span className="hidden sm:inline text-gray-300">|</span>
                            <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
                            <span className="hidden sm:inline text-gray-300">|</span>
                            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
                            <span className="hidden sm:inline text-gray-300">|</span>
                            <Link href="/contact" className="hover:text-black transition-colors">Contact Us</Link>
                        </div>
                        <p className="text-xs text-gray-500">
                            Copyright 2025 @Phixels All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Right Section: Social Icons */}
                <div className="flex gap-3">
                    <SocialIcon href="#" icon={<FaFacebookF />} color="text-blue-600" />
                    <SocialIcon href="#" icon={<FaXTwitter />} color="text-black" />
                    <SocialIcon href="#" icon={<FaYoutube />} color="text-red-600" />
                    <SocialIcon href="#" icon={<FaLinkedinIn />} color="text-blue-700" />
                    <SocialIcon href="#" icon={<FaInstagram />} color="text-pink-600" />
                    <SocialIcon href="#" icon={<BsMicrosoftTeams />} color="text-indigo-600" />
                </div>
            </div>
        </footer>
    );
};

// Helper Component for Social Icons
const SocialIcon = ({ href, icon, color }: { href: string; icon: React.ReactNode; color: string }) => (
    <a
        href={href}
        className={`w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 ${color} hover:bg-gray-200 transition-all shadow-sm`}
    >
        {icon}
    </a>
);

export default Footer;
