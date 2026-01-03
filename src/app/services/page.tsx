"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaSearch } from "react-icons/fa";
import { services } from "@/data/servicesData";

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "AI",
    "Web",
    "App",
    "UI",
    "UX",
    "Design",
    "Development",
  ];

  // Sort by category and title
  const sortedServices = useMemo(() => {
    return [...services].sort((a, b) => a.title.localeCompare(b.title));
  }, []);

  const featuredService = sortedServices[0];
  const remainingServices = sortedServices.slice(1);

  const filteredServices = useMemo(() => {
    return remainingServices.filter((service) => {
      const matchesCategory =
        selectedCategory === "All" || service.category === selectedCategory;
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [remainingServices, selectedCategory, searchQuery]);

  return (
    <>
      <div className="bg-[#0F0D1C] text-white min-h-screen pt-24 pb-20 px-4 sm:px-8 lg:px-20 xl:px-56">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Our <span className="text-[#ED1F24]">Services</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Professional digital solutions designed to elevate your business.
            <br className="hidden sm:block" /> From AI to design, we&apos;ve got
            you covered.
          </p>
        </div>

        {/* Featured Section */}
        {featuredService &&
          selectedCategory === "All" &&
          searchQuery === "" && (
            <div className="mb-20">
              <Link
                href={featuredService.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-3xl overflow-hidden aspect-video sm:aspect-2/1 lg:aspect-[2.5/1] shadow-xl hover:shadow-2xl transition-shadow"
              >
                <Image
                  src={featuredService.image}
                  alt={featuredService.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 sm:p-12 lg:p-16 max-w-4xl">
                  <span className="inline-block bg-[#ED1F24] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Featured • {featuredService.category}
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white group-hover:text-[#ED1F24] transition-colors">
                    {featuredService.title}
                  </h2>
                  <p className="text-gray-200 text-lg sm:text-xl line-clamp-2 max-w-2xl mb-4">
                    {featuredService.summary}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span className="text-white font-bold">
                        {featuredService.rating.toFixed(1)}
                      </span>
                      <span className="text-gray-300">
                        ({featuredService.reviews})
                      </span>
                    </div>
                    <span className="text-white font-bold text-xl">
                      {featuredService.price}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}

        {/* Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 sticky top-20 z-30 bg-[#0F0D1C]/95 backdrop-blur-md py-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:static lg:bg-transparent lg:py-0">
          {/* Categories */}
          <div className="flex overflow-x-auto pb-2 lg:pb-0 gap-2 w-full lg:w-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all border ${selectedCategory === category
                  ? "bg-[#ED1F24] text-white border-[#ED1F24]"
                  : "bg-transparent text-gray-400 border-gray-700 hover:border-[#ED1F24] hover:text-[#ED1F24]"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1A1829] border border-gray-700 rounded-full py-2 pl-12 pr-4 text-white focus:outline-none focus:border-[#ED1F24] focus:ring-2 focus:ring-[#ED1F24]/20 transition-all"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Link
              href={service.fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={service.id}
              className="bg-[#1A1829] rounded-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300 flex flex-col border border-gray-800"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 bg-[#0F0D1C] text-white text-xs font-semibold px-2 py-1 rounded">
                  {service.category}
                </span>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base font-semibold text-white mb-3 line-clamp-2 leading-snug">
                  {service.title}
                </h3>

                <div className="flex items-center gap-1 mb-3">
                  <FaStar className="text-yellow-400 text-sm" />
                  <span className="text-sm font-bold text-white">
                    {service.rating.toFixed(1)}
                  </span>
                  <span className="text-sm text-gray-400">
                    ({service.reviews})
                  </span>
                </div>

                <div className="mt-auto">
                  <p className="text-gray-400 text-xs mb-1">Starting at</p>
                  <p className="text-lg font-bold text-white">
                    {service.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500 font-bold mb-2">
              No services found
            </p>
            <p className="text-gray-400">
              Try adjusting your search or category filter.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ServicesPage;
