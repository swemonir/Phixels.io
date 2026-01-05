import React from "react";
import Image from "next/image";
import { allProjects } from "@/data/projectsData";
import Link from "next/link";
import freeconsealtan from "@/assets/project/FreeConsultation.png";

const ProjectCard = ({
  id,
  image,
  title,
  description,
  type,
  link,
}: {
  id: string;
  image: string;
  title: string;
  description: string;
  type: string;
  link?: string;
}) => (
  <div className="relative mb-12 lg:mb-32 group">
    <div className="overflow-hidden rounded-2xl shadow-lg bg-gray-100 aspect-video relative">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm uppercase tracking-wide">
        {type}
      </div>
    </div>

    {/* Info Card - Stacked on Mobile, Floating on Desktop */}
    <div className="mt-6 lg:mt-0 lg:absolute lg:-bottom-24 lg:left-1/2 lg:-translate-x-1/2 w-full lg:w-[90%] bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border border-white/20 z-10 transition-transform duration-300 lg:group-hover:-translate-y-2">
      <h3 className="text-2xl font-bold text-black">{title}</h3>
      <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed line-clamp-2">
        {description}
      </p>

      {link && (
        <Link href={link}>
          <button className="mt-6 bg-[#ED1F24] hover:bg-red-700 transition-colors text-white px-6 py-2 rounded-full text-sm font-medium">
            View Details
          </button>
        </Link>
      )}
    </div>
  </div>
);

const Project = () => {
  // Get 2 Portfolio and 2 Case Study projects
  const portfolioItems = allProjects
    .filter((p) => p.type === "Portfolio")
    .slice(0, 2);
  const caseStudyItems = allProjects
    .filter((p) => p.type === "Case Study")
    .slice(0, 2);
  const displayProjects = [...portfolioItems, ...caseStudyItems];

  return (
    <div className="bg-white px-4 sm:px-8 lg:px-20 xl:px-56 py-12 lg:py-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <h2 className="text-3xl sm:text-4xl text-black font-bold text-center md:text-left">
          We Work with Global Businesses
        </h2>
        <div className="flex items-center gap-4">
          <Link href="/case-study">
            <button className="bg-white border border-[#ED1F24] text-[#ED1F24] px-5 py-2 rounded-md text-sm sm:text-base font-medium hover:bg-red-50 transition-colors">
              Case Studies
            </button>
          </Link>
          <Link href="/portfolio">
            <button className="bg-[#ED1F24] border border-[#ED1F24] text-white px-5 py-2 rounded-md text-sm sm:text-base font-medium hover:bg-red-700 transition-colors">
              Portfolio
            </button>
          </Link>
        </div>
      </div>

      <p className="text-gray-700 text-lg max-w-3xl mb-16 text-center md:text-left">
        Helping organizations create sustainable, cost-efficient, and
        revenue-driven digital solutions through cutting-edge technology.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-12 lg:gap-y-32">
        {displayProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            type={project.type}
            link={project.link}
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
