import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const AboutStory = () => {
  return (
    <div className="py-20 px-4 sm:px-8 lg:px-20 xl:px-56 bg-gradient-to-b from-black to-[#0F0D1C]">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <p className="text-[#1DBF73] font-medium tracking-widest text-sm uppercase mb-3">
            Our Story
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight font-serif italic">
            How{" "}
            <span className="not-italic font-sans text-white">Colleagues</span>{" "}
            Turned <br />
            Into{" "}
            <span className="not-italic font-sans text-white">Co-Founders</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6 text-lg">
            Meet the wild hearts! The founders of Phixels Monks... Their journey
            began 10+ years ago... (Placeholder text based on design - add
            actual story here)
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            The keen vision of the unstoppable duo has shaped...
          </p>

          <button className="bg-[#5836F5] hover:bg-[#4a2ce0] text-white px-8 py-3 rounded-md font-bold transition-all flex items-center gap-2">
            See Full Story
          </button>
        </div>

        <div className="w-full lg:w-1/2 relative">
          {/* Placeholder image for founders */}
          <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden bg-gray-800 border border-gray-700 group">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop"
                alt="Founders"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="h-20 w-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <FaPlay className="text-white ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStory;
