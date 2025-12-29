import React from "react";
import Image from "next/image";
import { FaLaptopCode, FaMobileAlt, FaShoppingCart, FaStethoscope, FaGraduationCap, FaPlane } from "react-icons/fa";

// Using React Icons as placeholders since I don't have specific assets for industries
// If assets exist later, they can be swapped.

const IndustryCard = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
    <div className="bg-[#1A1829] border border-gray-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-[#252238] transition-colors group h-full">
        <div className="text-4xl text-[#ED1F24] mb-4 group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <p className="text-white font-medium">{title}</p>
    </div>
);

const Industries = () => {
    return (
        <div className="bg-black text-white px-4 sm:px-8 lg:px-20 xl:px-56 py-12 lg:py-20 relative overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#ED1F24]/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Industries We Serve
                    </h2>
                    <p className="text-gray-400 max-w-xl">
                        We provide industry-specific digital solutions that help businesses optimize operations and enhance customer experience.
                    </p>
                </div>

                <button className="bg-[#ED1F24] hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors whitespace-nowrap">
                    View All Industries
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 relative z-10">
                <IndustryCard icon={<FaShoppingCart />} title="Retail & E-commerce" />
                <IndustryCard icon={<FaMobileAlt />} title="Banking & Fintech" />
                <IndustryCard icon={<FaStethoscope />} title="Healthcare" />
                <IndustryCard icon={<FaLaptopCode />} title="On Demand" />
                <IndustryCard icon={<FaGraduationCap />} title="Education" />
                <IndustryCard icon={<FaPlane />} title="Travel & Tours" />
            </div>
        </div>
    );
};

export default Industries;
