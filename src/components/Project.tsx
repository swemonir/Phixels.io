import React from "react";
import smartEcomarch from "@/assets/project/smart-ecomarch-ai.png";
import tradingDashboard from "@/assets/project/trading-dashboard.png";
import workflowapp from "@/assets/project/workforce-app.png";
import goverment from "@/assets/project/goverment.png";
import freeconsealtan from "@/assets/project/FreeConsultation.png";
import Image from "next/image";

const Project = () => {
  return (
    <div className="sm:px-8 lg:px-20 px-4 xl:px-56 xl:py-12 lg:py-8 py-4  gap-12 bg-white">
      <div className="md:flex items-center justify-between">
        <p className="text-black text-4xl font-bold">
          We Work with Global Businesses
        </p>
        <div className="flex items-center gap-4 mt-2">
          <button className="bg-white border border-[#ED1F24] text-[#ED1F24] px-4 py-2 rounded-md text-xs md:text-base">
            View All Case Studies
          </button>
          <button className="bg-[#ED1F24] border border-[#ED1F24] text-white px-4 py-2 rounded-md text-xs md:text-base">
            View Portfolio
          </button>
        </div>
      </div>

      {/* discribtion */}
      <p className="text-black mt-4 font-normal text-lg">
        Helping organizations create sustainable, cost-efficient, and
        revenue-driven digital solutions through cutting-edge technology.
      </p>

      {/* projects */}

      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {/* Project 1 */}
          <div className=" p-6 rounded-lg relative mb-52 z-0">
            <Image
              src={smartEcomarch}
              alt="Project 1"
              className="w-full z-10"
            />

            {/* GLASS CARD */}
            <div className="absolute -bottom-44 left-1/2 -translate-x-1/2 w-[85%] p-8 rounded-3xl backdrop-blur-xs shadow-2xl border border-white/30 z-20">
              <p className="text-xl font-bold text-black">SmartCart AI</p>

              <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                SmartCart AI is a modern and intelligent e-commerce landing page
                concept designed to showcase an innovative shopping platform
                powered by artificial intelligence. The goal of this design was
                to create a clean, conversion-focused, and user-friendly layout
                that instantly builds trust and encourages visitors to explore
                more.
              </p>

              <button className="mt-4 bg-[#ED1F24] border border-[#ED1F24] text-white px-5 py-2 rounded-full">
                View Case Study
              </button>
            </div>
          </div>
          {/* Project 2 */}
          <div className=" p-6 rounded-lg relative mb-52 z-0">
            <Image src={workflowapp} alt="Project 1" className="w-full z-10" />

            {/* GLASS CARD */}
            <div className="absolute -bottom-44 left-1/2 -translate-x-1/2 w-[85%] p-8 rounded-3xl backdrop-blur-xs shadow-2xl border border-white/30 z-20">
              <p className="text-xl font-bold text-black">
                Workforce Management
              </p>

              <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                A modern and fully responsive Workforce Management Web App
                Dashboard designed and developed using the MERN Stack (MongoDB,
                Express, React, Node.js).
              </p>

              <button className="mt-4 bg-[#ED1F24] border border-[#ED1F24] text-white px-5 py-2 rounded-full">
                View Case Study
              </button>
            </div>
          </div>
          {/* Project 3 */}
          <div className=" p-6 rounded-lg relative mb-52 z-0">
            <Image
              src={tradingDashboard}
              alt="Project 1"
              className="w-full z-10"
            />

            {/* GLASS CARD */}
            <div className="absolute -bottom-44 left-1/2 -translate-x-1/2 w-[85%] p-8 rounded-3xl backdrop-blur-xs shadow-2xl border border-white/30 z-20">
              <p className="text-xl font-bold text-black">Trading Dashboard</p>

              <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                The Trading Dashboard UI Kit is a clean, minimal, and
                high-performing solution crafted for modern trading platforms.
                It includes 80+ fully auto-layout screens, ensuring smooth
                scalability and consistency across devices.encourages visitors
                to explore more. 
              </p>

              <button className="mt-4 bg-[#ED1F24] border border-[#ED1F24] text-white px-5 py-2 rounded-full">
                View Case Study
              </button>
            </div>
          </div>
          {/* Project 4 */}
          <div className=" p-6 rounded-lg relative mb-52 z-0">
            <Image src={goverment} alt="Project 1" className="w-full z-10" />

            {/* GLASS CARD */}
            <div className="absolute -bottom-44 left-1/2 -translate-x-1/2 w-[85%] p-8 rounded-3xl backdrop-blur-xs shadow-2xl border border-white/30 z-20">
              <p className="text-xl font-bold text-black">
                Procurement Platform
              </p>

              <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                Procurement | Government Tenders | OEM Supply Solutions This
                project showcases a fully responsive web and mobile platform for
                managing government tenders, procurement processes, and OEM
                supply solutions.
              </p>

              <button className="mt-4 bg-[#ED1F24] border border-[#ED1F24] text-white px-5 py-2 rounded-full">
                View Case Study
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Free Consultation */}
      <div className="mt-16 md:flex items-center  gap-8 p-8 ">

        <Image src={freeconsealtan} alt="Free Consultation" className="" />
        <div className="p-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-black">Book a Free Consultation With Us</h2>
          <p className="mt-2 text-black">
          We help bring ideas to life by building smart, future-ready digital solutions that move businesses forward.
          </p>
          <button className="mt-4 bg-[#ED1F24] text-white px-5 py-2 rounded-full">
            Schedule Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
