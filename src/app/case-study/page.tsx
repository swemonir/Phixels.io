"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { allProjects } from "@/data/projectsData";

const CaseStudyPage = () => {
  const caseStudies = allProjects.filter((p) => p.type === "Case Study");

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Deep dive into our problem-solving process and the results we
            deliver.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((project) => (
              <div
                key={project.id}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 hover:bg-white hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="lg:p-8">
                  <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-1">
                        Challenge
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-1">
                        Solution
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.results?.map((res, i) => (
                      <div
                        key={i}
                        className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 text-sm font-bold text-gray-800"
                      >
                        {res}
                      </div>
                    ))}
                  </div>

                  {project.link && (
                    <Link
                      href={project.link}
                      className="inline-block mt-8 btn bg-gray-900 text-white hover:bg-red-600 border-none rounded-full px-8"
                    >
                      Read Full Story
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

export default CaseStudyPage;
