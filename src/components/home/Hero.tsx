import Image, { StaticImageData } from "next/image";
import { TbMailOpenedFilled, TbMessageFilled } from "react-icons/tb";

import faca from "@/assets/trusted/faca.svg";
import data from "@/assets/trusted/datadojo.svg";
import revo from "@/assets/trusted/revo.svg";
import global from "@/assets/trusted/global.svg";

import fiverr from "@/assets/review/fiverr.svg";
import upwork from "@/assets/review/upwork.svg";
import freelenter from "@/assets/review/freelencer.svg";
import google from "@/assets/review/google.svg";

import { FaStar } from "react-icons/fa6";

const ReviewItem = ({
  title,
  logo,
  rating = "5.0",
}: {
  title: string;
  logo: StaticImageData | string;
  rating?: string;
}) => (
  <div className="mt-5">
    <p className="font-semibold mb-2 text-white">{title}</p>
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 lg:gap-10 lg:border-b border-[#3B3B3B] pb-4">
      <div className="justify-center flex">
        <Image src={logo} alt="logo" className="h-6 sm:h-8 w-auto" />
      </div>
      <div className="flex items-center gap-1">
        <p className="font-semibold text-white">{rating}</p>
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} color="#FFC107" className="text-sm" />
        ))}
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#0F0D1C] pb-10 pt-20 lg:pt-0">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-60" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-20 xl:px-56">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-0">
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left mt-0 lg:mt-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Experience World-Class <br />
              <span className="text-[#ED1F24]">
                Mobile App Development
              </span>{" "}
              Services
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              We use best-in-class technologies to build top-notch and
              user-centric apps for innovative solutions. Let&apos;s build a
              brand together.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
              <button className="flex items-center justify-center gap-2 bg-[#ED1F24] hover:bg-red-700 text-white px-6 py-3 rounded-md w-full sm:w-auto transition-colors">
                <TbMessageFilled size={20} />
                <span className="font-medium">Get Started</span>
              </button>

              <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-md w-full sm:w-auto transition-colors">
                <TbMailOpenedFilled size={20} color="#ED1F24" />
                <span className="font-medium">Request a Quote</span>
              </button>
            </div>

            {/* Trusted By */}
            <div className="mt-12">
              <p className="text-lg font-medium text-gray-400 mb-6">
                We are Trusted by
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-80">
                <Image
                  src={faca}
                  alt="faca"
                  className="h-8 w-auto mix-blend-screen"
                />
                <Image
                  src={data}
                  alt="data"
                  className="h-8 w-auto mix-blend-screen"
                />
                <Image
                  src={revo}
                  alt="revo"
                  className="h-8 w-auto mix-blend-screen"
                />
                <Image
                  src={global}
                  alt="global"
                  className="h-8 w-auto mix-blend-screen"
                />
              </div>
            </div>
          </div>

          {/* Right Card (Reviews) */}
          <div className="w-full lg:w-auto max-w-md mx-auto lg:mx-0 lg:mt-20">
            <div className="bg-[#1A1829]/90 border border-[#2A2A2A] backdrop-blur-sm rounded-xl p-6 shadow-2xl">
              <ReviewItem title="Reviewed On" logo={fiverr} />
              <ReviewItem title="Verified By" logo={google} />
              <ReviewItem title="Verified By" logo={freelenter} />
              <ReviewItem title="Reviewed On" logo={upwork} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
