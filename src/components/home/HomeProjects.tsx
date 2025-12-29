import React from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import Link from "next/link";
import freeconsealtan from "@/assets/project/FreeConsultation.png";

const ProjectCard = ({
  id,
  image,
  title,
  description,
  caseStudy = false,
}: {
  id: string;
  image: any;
  title: string;
  description: string;
  caseStudy?: boolean;
}) => (
  <div className="relative mb-12 lg:mb-32 group">
    <div className="overflow-hidden rounded-2xl shadow-lg bg-gray-100">
      <Image
        src={image}
        alt={title}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Info Card - Stacked on Mobile, Floating on Desktop */}
    <div className="mt-6 lg:mt-0 lg:absolute lg:-bottom-20 lg:left-1/2 lg:-translate-x-1/2 w-full lg:w-[90%] bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border border-white/20 z-10">
      <h3 className="text-2xl font-bold text-black">{title}</h3>
      <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
      <Link href={`/projects/${id}`}>
        <button className="mt-6 bg-[#ED1F24] hover:bg-red-700 transition-colors text-white px-6 py-2 rounded-full text-sm font-medium">
          View Case Study
        </button>
      </Link>
    </div>
  </div>
);

const Project = () => {
  return (
    <div className="bg-white px-4 sm:px-8 lg:px-20 xl:px-56 py-12 lg:py-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <h2 className="text-3xl sm:text-4xl text-black font-bold text-center md:text-left">
          We Work with Global Businesses
        </h2>
        <div className="flex items-center gap-4">
          <button className="bg-white border border-[#ED1F24] text-[#ED1F24] px-5 py-2 rounded-md text-sm sm:text-base font-medium hover:bg-red-50 transition-colors">
            View All Case Studies
          </button>
          <button className="bg-[#ED1F24] border border-[#ED1F24] text-white px-5 py-2 rounded-md text-sm sm:text-base font-medium hover:bg-red-700 transition-colors">
            View Portfolio
          </button>
        </div>
      </div>

      <p className="text-gray-700 text-lg max-w-3xl mb-16 text-center md:text-left">
        Helping organizations create sustainable, cost-efficient, and
        revenue-driven digital solutions through cutting-edge technology.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-12 lg:gap-y-32">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>

      {/* Free Consultation */}
      <div className="mt-20 lg:mt-32">
        <div className="bg-gray-50 rounded-3xl p-6 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-1/2">
            <Image
              src={freeconsealtan}
              alt="Free Consultation"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-black mb-4">
              Book a Free Consultation With Us
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              We help bring ideas to life by building smart, future-ready
              digital solutions that move businesses forward.
            </p>
            <button className="bg-[#ED1F24] hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Schedule Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
