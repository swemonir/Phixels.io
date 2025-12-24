import Image from "next/image";
import aboutImage from "@/assets/we-are-phixels.svg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div className="sm:px-8 lg:px-20 px-4 xl:px-56 xl:py-12 lg:py-8 py-4 lg:flex gap-12 bg-black">
        <Image src={aboutImage} alt="about" />

      <div className="mt-4">
        <p className="text-5xl text-center lg:text-left font-semibold">
          We are <span className="font-bold text-[#ED1F24]">Phixels</span>
        </p>
        <p className="mt-4 text-center sm:text-left">
          Phixels is a design-led mobile app development studio serving
          international clients, with strong expertise in transforming
          innovative ideas into scalable and user-focused digital products. We
          focus on clarity, performance, and long-term value in every product we
          build.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="mt-5 bg-[#ED1F24] text-white px-6 py-2 rounded-md flex items-center gap-2">
            Know More About Us <IoArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
