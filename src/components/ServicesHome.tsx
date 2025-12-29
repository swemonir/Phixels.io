"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { services } from "@/data/servicesData";

const ServiceCard = ({
  image,
  title,
  category,
  price,
  rating,
  reviews,
  fiverrUrl,
}: {
  image: string;
  title: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
  fiverrUrl: string;
}) => (
  <Link 
    href={fiverrUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white rounded-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full border border-gray-200"
  >
    <div className="relative h-48 overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute top-3 right-3 bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded">
        {category}
      </span>
    </div>

    <div className="p-4 flex flex-col flex-grow bg-white">
      <h3 className="text-base font-semibold text-gray-800 mb-3 line-clamp-2 leading-snug">
        {title}
      </h3>

      <div className="flex items-center gap-1 mb-3">
        <FaStar className="text-yellow-400 text-sm" />
        <span className="text-sm font-bold text-gray-800">{rating.toFixed(1)}</span>
        <span className="text-sm text-gray-500">({reviews})</span>
      </div>

      <div className="mt-auto">
        <p className="text-gray-600 text-xs mb-1">Starting at</p>
        <p className="text-lg font-bold text-gray-800">{price}</p>
      </div>
    </div>
  </Link>
);

const ServicesHome = () => {
    // Get the top 3 most popular services (AI Chatbot, Web App, Mobile App)
    const topServices = [services[0], services[3], services[6]];

    return (
        <div className="bg-gray-50 px-4 sm:px-8 lg:px-20 xl:px-56 py-12 lg:py-20">
            <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
                <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Our Premium Services
                    </h2>
                    <p className="text-gray-600">
                        Professional solutions tailored to transform your business.
                    </p>
                </div>

                <Link href="/services" className="bg-[#1DBF73] hover:bg-[#19A463] text-white px-6 py-3 rounded-md transition-colors whitespace-nowrap font-semibold">
                    View All Services
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topServices.map((service) => (
                    <ServiceCard
                        key={service.id}
                        image={service.image}
                        title={service.title}
                        category={service.category}
                        price={service.price}
                        rating={service.rating}
                        reviews={service.reviews}
                        fiverrUrl={service.fiverrUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServicesHome;
