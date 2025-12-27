"use client";

import React, { useState } from "react";
import { FaReact, FaVuejs, FaAngular, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaAws, FaDocker, FaAndroid, FaApple, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql, SiFirebase, SiKotlin, SiSwift, SiFlutter, SiAdobeillustrator, SiAdobephotoshop, SiAdobexd } from "react-icons/si";

// Defining categories and their technologies
const categories = {
    All: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
        { icon: <FaAws />, name: "AWS" },
        { icon: <SiFlutter />, name: "Flutter" },
        { icon: <FaFigma />, name: "Figma" },
    ],
    Frontend: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaVuejs />, name: "Vue.js" },
        { icon: <FaAngular />, name: "Angular" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
    ],
    Backend: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <FaPython />, name: "Python" },
        { icon: <FaJava />, name: "Java" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiFirebase />, name: "Firebase" },
    ],
    Mobile: [
        { icon: <SiFlutter />, name: "Flutter" },
        { icon: <FaReact />, name: "React Native" },
        { icon: <SiKotlin />, name: "Kotlin" },
        { icon: <SiSwift />, name: "Swift" },
        { icon: <FaAndroid />, name: "Android" },
        { icon: <FaApple />, name: "iOS" },
    ],
    Design: [
        { icon: <FaFigma />, name: "Figma" },
        { icon: <SiAdobeillustrator />, name: "Illustrator" },
        { icon: <SiAdobephotoshop />, name: "Photoshop" },
        { icon: <SiAdobexd />, name: "XD" },
    ],
};

const Technologies = () => {
    const [activeTab, setActiveTab] = useState("All");

    return (
        <div className="bg-black text-white px-4 sm:px-8 lg:px-20 xl:px-56 py-12 lg:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Get Solutions Built with the Latest <span className="text-[#ED1F24]">Robust Technologies</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                We use cutting-edge technologies to build scalable, secure, and high-performing digital solutions for your business.
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {Object.keys(categories).map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveTab(category)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeTab === category
                                ? "bg-[#ED1F24] border-[#ED1F24] text-white"
                                : "bg-transparent border-gray-700 text-gray-400 hover:border-[#ED1F24] hover:text-[#ED1F24]"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 min-[400px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-8 animate-fade-in">
                {categories[activeTab as keyof typeof categories].map((tech, index) => (
                    <div key={index} className="flex flex-col items-center gap-4 group">
                        <div className="w-16 h-16 bg-[#1A1829] rounded-2xl flex items-center justify-center text-3xl text-gray-400 group-hover:text-[#ED1F24] group-hover:scale-110 transition-all duration-300 border border-gray-800 shadow-lg">
                            {tech.icon}
                        </div>
                        <p className="text-sm font-medium text-gray-500 group-hover:text-white transition-colors">{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
