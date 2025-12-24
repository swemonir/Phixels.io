import React from "react";
import mobile from "@/assets/about/Mobile App Development.svg";
import software from "@/assets/about/Software Development.svg";
import web from "@/assets/about/Website Development.svg";
import ecomarch from "@/assets/about/eCommerce Development.svg";
import Image from "next/image";

const Services = () => {
  return (
    <div className="sm:px-8 lg:px-20 px-4 xl:px-56 gap-6 bg-black pb-5 xl:pt-12 lg:pt-6 pt-4">
      <p className="text-center text-5xl font-bold">
        Step into the Digital Future with Innovative Services
      </p>
      <p className="text-center mt-5 text-lg">
        From startups to enterprises, our digital solutions help businesses
        worldwide overcome modern challenges <br /> with a fresh, user-focused,
        and digital-first approach.
      </p>

      {/* services */}
      <div className="sm:flex items-center justify-between mt-10">
        
        {/* card mobile */}
        <div className=" mx-4 ">
          <div className="bg-linear-to-r from-white to-[#C4C4C408] h-52 w-52 rounded-4xl">
            <Image src={mobile} alt="Mobile App Development" className="ml-8" />
          </div>
          <div className=" items-center justify-center flex flex-col  shadow-xl shadow-white rounded-4xl px-8 mt-8 pb-2">
            <button className="mt-4  ">
              Mobile App <br /> Development
            </button>
          </div>
        </div>

        {/* card mobile */}
        <div className=" mx-4 ">
          <div className="bg-linear-to-r from-white to-[#C4C4C408] h-52 w-52 rounded-4xl">
            <Image src={software} alt="Software Development" className="ml-8 " />
          </div>
          <div className=" items-center justify-center flex flex-col  shadow-xl shadow-white rounded-4xl px-8 mt-8 pb-2">
            <button className="mt-4  ">
              Software <br /> Development
            </button>
          </div>
        </div>

        {/* card mobile */}
        <div className=" mx-4">
          <div className="bg-linear-to-r from-white to-[#C4C4C408] h-52 w-52 rounded-4xl">
            <Image src={web} alt="Website Development" className="ml-8" />
          </div>
          <div className=" items-center justify-center flex flex-col  shadow-xl shadow-white rounded-4xl px-8 mt-8 pb-2">
            <button className="mt-4  ">
              Website <br /> Development
            </button>
          </div>
        </div>

        {/* card mobile */}
        <div className=" mx-4">
          <div className="bg-linear-to-r from-white to-[#C4C4C408] h-52 w-52 rounded-4xl">
            <Image src={ecomarch} alt="eCommerce Development" className="ml-8" />
          </div>
          <div className=" items-center justify-center flex flex-col  shadow-xl shadow-white rounded-4xl px-8 mt-8 pb-2">
            <button className="mt-4  ">
              eCommerce <br /> Development
            </button>
          </div>
        </div>

   
      </div>
    </div>
  );
};

export default Services;
