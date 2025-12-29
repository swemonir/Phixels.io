"use client";

import { useParams } from "next/navigation";

import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const ProjectDetailsPage = () => {
  const params = useParams();
  const projectId = params.id;

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-blue-500 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white min-h-screen pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          {/* Back Link */}
          <Link
            href="/projects"
            className="inline-flex items-center text-gray-500 hover:text-[#ED1F24] mb-8 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back to Projects
          </Link>

          {/* Title & Meta */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {project.title}
          </h1>

          {/* Hero Image */}
          <div className="w-full h-auto rounded-2xl overflow-hidden shadow-lg mb-12 bg-gray-100">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Content (Demo) */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed font-medium mb-8">
              {project.description}
            </p>

            <div className="p-8 bg-yellow-50 border border-yellow-200 rounded-xl text-yellow-800">
              <p className="font-semibold text-lg mb-2">
                🚧 Integration in Progress
              </p>
              <p>
                Comprehensive case study details, technical specifications, and
                outcome metrics are currently being compiled for this project.
                Full documentation will be available shortly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
