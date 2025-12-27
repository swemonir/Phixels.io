import Image from "next/image";
import aboutImage from "@/assets/we-are-phixels.svg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div className="bg-black text-white py-12 lg:py-20 px-4 sm:px-8 lg:px-20 xl:px-56">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

        {/* Image - Order 2 on mobile if we want text first, but usually image first is fine. 
            However, for "About Us", image first is good. */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image src={aboutImage} alt="About Phixels" className="w-full max-w-sm lg:max-w-full h-auto" />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            We are <span className="text-[#ED1F24]">Phixels</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Phixels is a design-led mobile app development studio serving
            international clients, with strong expertise in transforming
            innovative ideas into scalable and user-focused digital products. We
            focus on clarity, performance, and long-term value in every product we
            build.
          </p>

          <button className="inline-flex items-center gap-2 bg-[#ED1F24] hover:bg-red-700 text-white font-medium px-8 py-3 rounded-md transition-colors">
            Know More About Us <IoArrowForward />
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;
