import Image from "next/image";
import { TbMailOpenedFilled } from "react-icons/tb";
import { TbMessageFilled } from "react-icons/tb";
import faca from "@/assets/trusted/faca.svg";
import data from "@/assets/trusted/datadojo.svg";
import revo from "@/assets/trusted/revo.svg";
import global from "@/assets/trusted/global.svg";
import fiverr from "@/assets/review/fiverr.svg";
import upwork from "@/assets/review/upwork.svg";
import freelenter from "@/assets/review/freelencer.svg";
import google from "@/assets/review/google.svg";
import { FaStar } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="sm:px-8 lg:px-20 xl:px-56">
      {/* <div className="relative overflow-hidden lg:px-60 lg:py-32"> */}
      {/* Background image with blur */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center  scale-100" />

      {/* Color overlay */}
      <div className="absolute inset-0 bg-[#0F0D1C]/80" />

      {/* Content */}
      <div className="relative z-10 text-white">
        <div className="lg:flex justify-between">
          <div>
            <p className="xl:text-4xl lg:text-2xl sm:text-xl font-bold lg:mt-32 sm:mt-10 m-5">
              Experience World-Class <br />
              Mobile App Development Services
            </p>
            <p className="lg:mt-8 sm:mt-4 m-5 xl:text-xl lg:text-lg text-base">
              We use best-in-class technologies to build top-notch and
              user-centric apps for <br />
              innovative solutions. Let's build a brand together.
            </p>

            {/* button */}
            <div className="flex items-center gap-4 m-5">
              <button className="flex items-center gap-1 lg:gap-2 bg-[#ED1F24]  px-1 lg:px-5 py-2.5 rounded-sm border border-[#ED1F24]">
                <TbMessageFilled />
                Get Started
              </button>
              <button className="flex items-center gap-2 bg-white text-black px-1 lg:px-5 py-2.5 rounded-sm border border-[#ED1F24]">
                <TbMailOpenedFilled color="#ED1F24" />
                Request a Quote
              </button>
            </div>

            {/* sponcer */}
            <div>
              <p className="text-base sm:text-lg lg:text-2xl p-5">
                We are Trusted by
              </p>

              {/* icon */}
              <div className="flex items-center gap-4 px-5 md:w-3/4">
                <div className="w-1/4">
                  <Image src={faca} alt="faca" layout="responsive" />
                </div>
                <div className="w-1/4">
                  <Image src={data} alt="faca" layout="responsive" />
                </div>
                <div className="w-1/4">
                  <Image src={revo} alt="faca" layout="responsive" />
                </div>
                <div className="w-1/4">
                  <Image src={global} alt="faca" layout="responsive" />
                </div>
              </div>
            </div>
          </div>

          {/* secpmd layout */}
          <div className=" border border-[#6C757D] inset-0 bg-[#0F0D1C]/80 rounded-2xl lg:mt-32 sm:mt-10 m-5 flex lg:block justify-between  p-2 md:p-3 lg:p-6 flex-wrap">
              <div className="mt-5">
              <p className="font-semibold mb-2">Reviewed On</p>
              <div className="lg:flex items-center justify-between gap-10 lg:border-b border-[#3B3B3B] lg:pb-4 ">
                <div className="justify-center sm:flex lg:block">
                  <Image src={fiverr} alt="fiverr" className="text-white" />
                </div>
                <div className="flex items-center mt-3">
                  <p className="font-semibold">5.0</p>
                  <FaStar color="#FFC107" />
                  <FaStar color="#FFC107" />
                  <FaStar color="#FFC107" />
                  <FaStar color="#FFC107" />
                  <FaStar color="#FFC107" />
                </div>
              </div>
            </div>
           <div className="mt-5">
              <p  className="font-semibold mb-2">Verified By</p>
              <div className="lg:flex items-center justify-between gap-10 lg:border-b border-[#3B3B3B] lg:pb-4 ">
                <div  className="justify-center sm:flex lg:block">
                  <Image src={google} alt="fiverr" className="text-white" />
                </div>
                <div className="flex items-center mt-3">
                  <p className="font-semibold">5.0</p>
                  <FaStar color="#FFC107" />
                  <FaStar color="#FFC107" />
                  <FaStar color="#FFC107" />
                  <FaStar color="#FFC107" />
                  <FaStar color="#FFC107" />
                </div>
              </div>
            </div>
          <div className="mt-5">
              <p className="font-semibold mb-2">Verified By</p>
              <div className="lg:flex items-center justify-between gap-10 lg:border-b border-[#3B3B3B] lg:pb-4 ">
                <div className="justify-center sm:flex lg:block">
                  <Image src={freelenter} alt="fiverr" className="text-white" />
                </div>
                <div className="flex items-center mt-3">
                  <p className="font-semibold">5.0</p>
                  <FaStar color="#FFC107" />
                  <FaStar color="#FFC107" />
                  <FaStar color="#FFC107" />
                  <FaStar color="#FFC107" />
                  <FaStar color="#FFC107" />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <p className="font-semibold mb-2">Reviewed On</p>
              <div className="lg:flex items-center justify-between gap-10  ">
                <div className="justify-center sm:flex lg:block">
                  <Image src={upwork} alt="fiverr" className="text-white" />
                </div>
                <div className="flex items-center mt-3">
                  <p className="font-semibold">5.0</p>
                  <FaStar color="#FFC107" />
                  <FaStar color="#FFC107" />
                  <FaStar color="#FFC107" />
                  <FaStar color="#FFC107" />
                  <FaStar color="#FFC107" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Hero;
