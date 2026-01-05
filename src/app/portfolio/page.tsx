"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { allProjects } from "@/data/projectsData";

const PortfolioPage = () => {
  const portfolioProjects = allProjects.filter((p) => p.type === "Portfolio");

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover a selection of our finest work in web, app, and software
            development.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-900 uppercase tracking-wide">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-red-600 font-bold hover:text-red-700 transition-colors"
                    >
                      View Case Study <span className="ml-2">&rarr;</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
