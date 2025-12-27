import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import blog1 from "@/assets/about/Mobile App Development.svg"; // Placeholders
import blog2 from "@/assets/about/Software Development.svg";
import blog3 from "@/assets/about/Website Development.svg";

const BlogCard = ({ image, title, date }: { image: any; title: string; date: string }) => (
    <div className="bg-[#1A1829] border border-gray-800 rounded-2xl overflow-hidden group hover:border-[#ED1F24] transition-colors duration-300">
        <div className="relative h-48 overflow-hidden">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
            <Image
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <span className="absolute top-4 right-4 bg-[#ED1F24] text-white text-xs font-bold px-3 py-1 rounded-full z-20">
                New
            </span>
        </div>

        <div className="p-6">
            <p className="text-[#ED1F24] text-xs font-semibold mb-2">{date}</p>
            <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-[#ED1F24] transition-colors">
                {title}
            </h3>
            <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                Discover how the latest trends in technology are shaping the future of global businesses and what you can do to stay ahead.
            </p>

            <button className="flex items-center gap-2 text-[#ED1F24] font-medium text-sm group-hover:gap-3 transition-all">
                Read More <FaArrowRight />
            </button>
        </div>
    </div>
);

const Blog = () => {
    return (
        <div className="bg-black px-4 sm:px-8 lg:px-20 xl:px-56 py-12 lg:py-20 border-t border-gray-900">
            <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
                <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Our Latest Tech Blogs
                    </h2>
                    <p className="text-gray-400">
                        Get the latest updates on development and product-led growth.
                    </p>
                </div>

                <button className="bg-[#ED1F24] hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors whitespace-nowrap">
                    View All Blogs
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <BlogCard
                    image={blog1}
                    title="Generative AI in App Development"
                    date="Dec 28, 2024"
                />
                <BlogCard
                    image={blog2}
                    title="Why Custom Software is Better for Scaling"
                    date="Dec 25, 2024"
                />
                <BlogCard
                    image={blog3}
                    title="UI/UX Best Practices for 2025"
                    date="Dec 20, 2024"
                />
            </div>
        </div>
    );
};

export default Blog;
