import Image from "next/image";

const AboutHero = () => {
  // Placeholder for the collage image - using a grid of placeholders or a single image if available
  // For now, I'll simulate the collage with a text description or placeholder
  return (
    <div className="relative pt-10 pb-20 px-4 sm:px-8 lg:px-20 xl:px-56 bg-[url('/images/about-bg.png')] bg-cover bg-center">
      <div className="text-center mb-16">
        <p className="text-[#ED1F24] font-medium tracking-widest text-sm uppercase mb-3">
          Our Culture
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-serif italic">
          Behind The Scenes: Team <br />
          <span className="not-italic font-sans text-white">Design Monks</span>
        </h1>
      </div>

      {/* Collage Placeholder */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96 md:h-[500px] overflow-hidden rounded-3xl">
        <div className="bg-gray-800 h-full w-full rounded-2xl relative group overflow-hidden">
          {/* Replace with actual team images when available */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-600">
            Team Image 1
          </div>
        </div>
        <div className="bg-gray-800 h-full w-full rounded-2xl relative group overflow-hidden md:translate-y-12">
          <div className="absolute inset-0 flex items-center justify-center text-gray-600">
            Team Image 2
          </div>
        </div>
        <div className="bg-gray-800 h-full w-full rounded-2xl relative group overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-gray-600">
            Team Image 3
          </div>
        </div>
        <div className="bg-gray-800 h-full w-full rounded-2xl relative group overflow-hidden md:translate-y-12">
          <div className="absolute inset-0 flex items-center justify-center text-gray-600">
            Team Image 4
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
