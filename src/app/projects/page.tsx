import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ProjectsPage = () => {
  return (
    <>
      <div className="bg-white min-h-screen pt-20">
        {/* Page Header */}
        <div className="bg-[#0F0D1C] py-20 px-4 sm:px-8 lg:px-20 xl:px-56">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Explore our portfolio of delivered solutions. From e-commerce
            platforms to complex management systems, we build technology that
            drives growth.
          </p>
        </div>

        {/* Projects List */}
        <div className="px-4 sm:px-8 lg:px-20 xl:px-56 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col h-full bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  <Link
                    href={`/projects/${project.id}`}
                    className="mt-auto inline-flex items-center text-[#ED1F24] font-medium hover:gap-2 transition-all"
                  >
                    View Case Study <FaArrowRight className="ml-2 text-xs" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
