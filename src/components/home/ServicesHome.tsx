"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { services } from "@/data/servicesData";

const ServiceCard = ({
  image,
  title,
  category,
  description,
  slug,
}: {
  image: string;
  title: string;
  category: string;
  description: string;
  slug: string;
}) => (
  <Link
    href={`/services/${slug}`}
    className="bg-white rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100 hover:-translate-y-1"
  >
    <div className="relative h-48 overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-red-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
        {category}
      </span>
    </div>

    <div className="p-6 flex flex-col grow bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-red-600 transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
        {description}
      </p>

      <div className="mt-auto flex items-center text-red-600 font-semibold text-sm group-hover:underline">
        Learn More{" "}
        <FaArrowRight className="ml-2 text-xs transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  </Link>
);

const ServicesHome = () => {
  // Select diverse services to display
  const topServices = [
    services.find((s) => s.id === "ai-chatbot-development") || services[0],
    services.find((s) => s.id === "full-stack-development") || services[1],
    services.find((s) => s.id === "mobile-app-development") || services[2], // fallback to index if not found (though ids should match data)
  ];

  return (
    <div className="bg-gray-50 px-4 sm:px-8 lg:px-20 xl:px-56 py-12 lg:py-20">
      <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-red-500 font-bold uppercase tracking-wider text-sm mb-2 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Professional solutions tailored to transform your business. From AI
            integration to full-scale web platforms.
          </p>
        </div>

        <Link
          href="/services"
          className="hover:bg-red-700 bg-[#FF0000] text-white px-6 py-3 rounded-md transition-colors whitespace-nowrap font-semibold"
        >
          View All Services
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topServices.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.heroImage}
            title={service.title}
            category={service.category}
            description={service.shortDescription}
            slug={service.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesHome;
