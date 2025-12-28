"use client";

import React from "react";
import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Using a placeholder image/icon if no asset is available
// import personPlaceholder from "@/assets/we-are-phixels.svg";

// Simple placeholder for the profile image if we don't have one
const ProfileImage = ({ src, alt }: { src?: string; alt: string }) => (
  <div className="w-full h-full bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center relative">
    {src ? (
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
      />
    ) : (
      <div className="text-gray-400 text-4xl">
         <span className="sr-only">{alt}</span>
         {/* Simple avatar placeholder SVG */}
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
         </svg>
      </div>
    )}
  </div>
);

interface TestimonialData {
  id: number;
  rating: number;
  quote: string;
  authorName: string;
  authorRole: string;
  projectTitle: string;
  categories: string[];
  summary: string;
  value: string;
  duration: string;
  platformIcon?: React.ReactNode; 
  image?: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    rating: 5.0,
    quote: "Phixels delivered a game-changing app for our business! Their attention to detail and user-focused approach resulted in a seamless experience for our customers.",
    authorName: "Thomas Mark. N.U.K",
    authorRole: "CEO, TechVision Inc.",
    projectTitle: "Mobile App Dev & UX/UI Design for Workforce App",
    categories: ["Mobile App", "UI/UX Design"],
    summary: "Developed a comprehensive mobile application with a focus on intuitive navigation and real-time data synchronization for field workers.",
    value: "$50k - $100k",
    duration: "6 Months",
    image:"https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
    id: 2,
    rating: 5.0,
    quote: "Phixels provided clear guidance and reliable execution, enabling us to deliver the project on time and within budget.",
    authorName: "Michael Jackson",
    authorRole: "Founder, ThreePull LLC",
    projectTitle: "Cross-Platform E-commerce Solution",
    categories: ["Mobile", "Web", "AI"],
    summary: "Phixels planned, designed, and developed a cross-platform mobile application for Android and iOS. The team delivered a complete solution covering UI/UX.",
    value: "$50,000 - $199,999",
    duration: "June 2023 - Ongoing",
    image:"https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    id: 3,
    rating: 4.9,
    quote: "The team at Phixels is incredible. They transformed our outdated website into a modern, high-converting digital platform.",
    authorName: "Sarah Williams",
    authorRole: "CTO, NextGen Startups",
    projectTitle: "SaaS Platform Redesign & Development",
    categories: ["Web Dev", "SaaS", "Redesign"],
    summary: "Complete overhaul of legacy codebase to Next.js, improving performance scores by 40% and user retention by 25%.",
    value: "$30k - $80k",
    duration: "4 Months",
    image:"https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    id: 4,
    rating: 5.0,
    quote: "Exceptional quality and communication. They truly understood our vision and executed it perfectly.",
    authorName: "David Chen",
    authorRole: "Product Manager, EcoStream",
    projectTitle: "Eco-Friendly Marketplace App",
    categories: ["App Dev", "Marketplace"],
    summary: "Built a dual-sided marketplace with complex payment splitting and real-time tracking features.",
    value: "$40k - $90k",
    duration: "5 Months",
    image:"https://randomuser.me/api/portraits/men/14.jpg"
  },
   {
    id: 5,
    rating: 5.0,
    quote: "Their expertise in AI and machine learning Helped us automate our customer support workflow seamlessly.",
    authorName: "Emily Rodriguez",
    authorRole: "Director of Ops, AutoServe",
    projectTitle: "AI Customer Support Bot Integration",
    categories: ["AI/ML", "Automation"],
    summary: "Integrated a custom LLM solution into our existing support stack, reducing human workload by 60%.",
    value: "$20k - $50k",
    duration: "3 Months",
    image:"https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    id: 6,
    rating: 4.8,
    quote: "Fast, responsive, and incredibly talented. I would recommend Phixels to anyone looking for top-tier development.",
    authorName: "James Wilson",
    authorRole: "Founder, QuickShip",
    projectTitle: "Logistics Dashboard & Tracking",
    categories: ["Web App", "Dashboard"],
    summary: "Created a real-time logistics dashboard with map integration and live driver tracking.",
    value: "$25k - $60k",
    duration: "4 Months",
    image:"https://randomuser.me/api/portraits/men/6.jpg"
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white text-gray-900 px-4 sm:px-8 lg:px-20 xl:px-56 py-12 lg:py-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Empowered by Our Clients' Stories
          </h2>
          <p className="text-gray-600">
            Discover the impact of our expertise through their words.
          </p>
        </div>

        <button className="bg-[#ED1F24] hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors whitespace-nowrap">
          View All Reviews
        </button>
      </div>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="testimonials-swiper pb-12"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
             <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center shadow-sm">
              {/* Left Stats/Quote */}
              <div className="w-full lg:w-1/3 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-bold text-gray-900">{item.rating}</span>
                  <div className="flex text-[#FFC107] text-xl">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(item.rating) ? "text-[#FFC107]" : "text-gray-300"} />
                    ))}
                  </div>
                  {/* Fiverr Logo Placeholder/Text if needed */}
                  {/* <span className="font-bold text-gray-500 ml-auto">fiverr.</span> */}
                </div>

                <div>
                  <p className="text-[#F97316] font-semibold mb-2 text-sm uppercase tracking-wide">The Review</p>
                  <p className="text-gray-600 italic leading-relaxed relative">
                     <span className="text-4xl text-gray-300 absolute -top-4 -left-2 -z-10">“</span>
                    "{item.quote}"
                  </p>
                </div>

                 <div>
                  {/* <p className="text-[#ED1F24] font-semibold mb-2">Project Success</p> */}
                   <p className="text-gray-500 text-sm leading-relaxed">
                     {/* Optional extra text could go here */}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-lg text-gray-900">{item.authorName}</p>
                  <p className="text-gray-500 text-sm">{item.authorRole}</p>
                </div>
              </div>

              {/* Center Image */}
              <div className="w-full lg:w-1/3 flex justify-center order-first lg:order-0">
                 <div className="relative">
                    <div className="w-64 h-80 bg-gray-100 rounded-2xl overflow-hidden relative shadow-lg border-4 border-white/50">
                        <ProfileImage src={item.image} alt={item.authorName} />
                    </div>
                    {/* Decorative line/connector could go here if implementing the exact visual from the screenshot */}
                 </div>
              </div>

              {/* Right Details */}
              <div className="w-full lg:w-1/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 leading-tight">{item.projectTitle}</h3>
                
                 {/* Verified Badge */}
                 <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-500 rounded-md text-xs font-medium mb-6 border border-blue-100">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified Review
                 </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-[#F97316] font-semibold text-sm mb-2">Project Summary</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-6 pt-2">
                    <div>
                      <p className="text-[#F97316] font-bold text-sm mb-1">Project Value</p>
                      <p className="text-gray-900 text-sm font-medium">{item.value}</p>
                    </div>
                    <div>
                      <p className="text-[#F97316] font-bold text-sm mb-1">Project Duration</p>
                      <p className="text-gray-900 text-sm font-medium">{item.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Styles for Swiper Pagination if needed */}

    </div>
  );
};

export default Testimonials;
