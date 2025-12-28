"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { blogPosts } from "@/data/blogData";

const BlogCard = ({
  id,
  image,
  title,
  date,
  category,
}: {
  id: string;
  image: string;
  title: string;
  date: string;
  category: string;
}) => (
  <div className="bg-[#1A1829] border border-gray-800 rounded-2xl overflow-hidden group hover:border-[#ED1F24] transition-colors duration-300 flex flex-col h-full">
    <div className="relative h-48 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <span className="absolute top-4 right-4 bg-[#ED1F24] text-white text-xs font-bold px-3 py-1 rounded-full z-20">
        {category}
      </span>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <p className="text-[#ED1F24] text-xs font-semibold mb-2">{date}</p>
      <Link href={`/blog/${id}`} className="block mb-4">
        <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-[#ED1F24] transition-colors">
          {title}
        </h3>
      </Link>
      <p className="text-gray-400 text-sm mb-6 line-clamp-3">
        Discover how the latest trends in technology are shaping the future of
        global businesses.
      </p>

      <Link
        href={`/blog/${id}`}
        className="flex items-center gap-2 text-[#ED1F24] font-medium text-sm group-hover:gap-3 transition-all mt-auto"
      >
        Read More <FaArrowRight />
      </Link>
    </div>
  </div>
);

const Blog = () => {
    // Get the latest 3 posts
    const latestPosts = blogPosts.slice(0, 3);

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

                <Link href="/blog" className="bg-[#ED1F24] hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors whitespace-nowrap">
                    View All Blogs
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestPosts.map((post) => (
                    <BlogCard
                        key={post.id}
                        id={post.id}
                        image={post.image}
                        title={post.title}
                        date={post.date}
                        category={post.category}
                    />
                ))}
            </div>
        </div>
    );
};

export default Blog;
