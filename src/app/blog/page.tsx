"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { blogPosts } from "@/data/blogData";

const BlogListing = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "AI",
    "Development",
    "Design",
    "Business",
    "Marketing",
  ];

  // Sort by date descending
  const sortedPosts = useMemo(() => {
    return [...blogPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, []);

  const featuredPost = sortedPosts[0];
  const remainingPosts = sortedPosts.slice(1);

  const filteredPosts = useMemo(() => {
    return remainingPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [remainingPosts, selectedCategory, searchQuery]);

  return (
    <>
      <div className="bg-[#0F0D1C] text-white min-h-screen pt-24 pb-20 px-4 sm:px-8 lg:px-20 xl:px-56">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Phixels <span className="text-[#ED1F24]">Insights</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Exploring the frontiers of technology, design, and business.
            <br className="hidden sm:block" /> curated for the modern innovator.
          </p>
        </div>

        {/* Featured Section */}
        {featuredPost && selectedCategory === "All" && searchQuery === "" && (
          <div className="mb-20">
            <Link
              href={`/blog/${featuredPost.id}`}
              className="group block relative rounded-3xl overflow-hidden aspect-video sm:aspect-[2/1] lg:aspect-[2.5/1]"
            >
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-12 lg:p-16 max-w-4xl">
                <span className="inline-block bg-[#ED1F24] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Featured • {featuredPost.category}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight group-hover:text-[#ED1F24] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-300 text-lg sm:text-xl line-clamp-2 max-w-2xl mb-6">
                  {featuredPost.summary}
                </p>
                <div className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all">
                  Read Article <FaArrowRight />
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 sticky top-20 z-30 bg-black/80 backdrop-blur-md py-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:static lg:bg-transparent lg:py-0">
          {/* Categories */}
          <div className="flex overflow-x-auto pb-2 lg:pb-0 gap-2 w-full lg:w-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all border ${selectedCategory === category
                  ? "bg-[#ED1F24] text-white border-[#ED1F24]"
                  : "bg-transparent text-gray-400 border-gray-800 hover:border-gray-600 hover:text-white"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1A1829] border border-gray-800 rounded-full py-2 pl-12 pr-4 text-white focus:outline-none focus:border-[#ED1F24] transition-colors"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              href={`/blog/${post.id}`}
              key={post.id}
              className="bg-[#1A1829] border border-gray-800 rounded-2xl overflow-hidden group hover:border-[#ED1F24] transition-colors duration-300 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full z-20 border border-white/10">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex flex-col grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span>{post.date}</span>
                  {post.readTime && <span>• {post.readTime}</span>}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#ED1F24] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed grow">
                  {post.summary}
                </p>

                <div className="flex items-center gap-2 text-[#ED1F24] font-medium text-sm mt-auto group-hover:underline decoration-1 underline-offset-4">
                  Read More
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500 font-bold mb-2">
              No articles found
            </p>
            <p className="text-gray-600">
              Try adjusting your search or category filter.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogListing;
