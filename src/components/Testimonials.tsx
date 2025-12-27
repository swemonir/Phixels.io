import React from "react";
import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

// Using a placeholder image for the person
import personPlaceholder from "@/assets/we-are-phixels.svg"; // Fallback to existing asset for now or use a generic one if available

// Simple placeholder for the profile image if we don't have one
const ProfileImage = () => (
    <div className="w-full h-full bg-gray-300 rounded-xl flex items-center justify-center text-gray-500">
        User Photo
    </div>
);

const Testimonials = () => {
    return (
        <div className="bg-black text-white px-4 sm:px-8 lg:px-20 xl:px-56 py-12 lg:py-20">
            <div className="flex flex-col lg:flex-row items-end justify-between gap-6 mb-16">
                <div className="max-w-2xl">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Empowered by Our Clients' Stories
                    </h2>
                    <p className="text-gray-400">
                        Discover the impact of our expertise through their words.
                    </p>
                </div>

                <button className="bg-[#ED1F24] hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors whitespace-nowrap">
                    View Reviews
                </button>
            </div>

            <div className="bg-[#1A1829] border border-gray-800 rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                {/* Left Stats/Quote */}
                <div className="w-full lg:w-1/3 space-y-8">
                    <div className="flex items-center gap-2">
                        <span className="text-4xl font-bold">5.0</span>
                        <div className="flex text-[#FFC107]">
                            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                        </div>
                    </div>

                    <div>
                        <p className="text-[#ED1F24] font-semibold mb-2">Top Review</p>
                        <p className="text-gray-300 italic leading-relaxed">
                            "Phixels delivered a game-changing app for our business! Their attention to detail and user-focused approach resulted in a seamless experience for our customers."
                        </p>
                    </div>

                    <div>
                        <p className="text-[#ED1F24] font-semibold mb-2">Project Success</p>
                        <p className="text-gray-300 text-sm">
                            Delivered on time and within budget, exceeding all expectations for performance and scalability.
                        </p>
                    </div>

                    <div className="pt-4 border-t border-gray-700">
                        <p className="font-bold text-lg">Thomas Mark. N.U.K</p>
                        <p className="text-gray-500 text-sm">CEO, TechVision Inc.</p>
                    </div>
                </div>

                {/* Center Image */}
                <div className="w-full lg:w-1/3 flex justify-center">
                    <div className="w-64 h-80 bg-gray-700 rounded-2xl overflow-hidden relative shadow-2xl">
                        {/* Usage of a placeholder if no specific image */}
                        <ProfileImage />
                    </div>
                </div>

                {/* Right Details */}
                <div className="w-full lg:w-1/3">
                    <h3 className="text-2xl font-bold mb-6">Mobile App Dev & UX/UI Design for Workforce App</h3>
                    <div className="flex gap-2 mb-6">
                        <span className="px-3 py-1 bg-[#ED1F24]/20 text-[#ED1F24] rounded-full text-xs font-medium">Mobile App</span>
                        <span className="px-3 py-1 bg-[#ED1F24]/20 text-[#ED1F24] rounded-full text-xs font-medium">UI/UX Design</span>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <p className="text-gray-400 text-sm mb-1">Project Summary</p>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Developed a comprehensive mobile application with a focus on intuitive navigation and real-time data synchronization for field workers.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div>
                                <p className="text-[#ED1F24] font-bold text-sm">Project Value</p>
                                <p className="text-white text-sm">$50k - $100k</p>
                            </div>
                            <div>
                                <p className="text-[#ED1F24] font-bold text-sm">Project Duration</p>
                                <p className="text-white text-sm">6 Months</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
