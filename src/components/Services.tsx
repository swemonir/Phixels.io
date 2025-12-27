import React from "react";
import mobile from "@/assets/about/Mobile App Development.svg";
import software from "@/assets/about/Software Development.svg";
import web from "@/assets/about/Website Development.svg";
import ecomarch from "@/assets/about/eCommerce Development.svg";
import Image from "next/image";

const ServiceCard = ({ image, title }: { image: any; title: React.ReactNode }) => (
  <div className="flex flex-col items-center group">
    <div className="bg-gradient-to-r from-white to-[#C4C4C408] rounded-3xl p-8 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center aspect-square w-full max-w-[250px]">
      <Image src={image} alt="Service" className="w-2/3 h-auto" />
    </div>
    <div className="mt-6 text-center">
      <h3 className="text-xl font-semibold leading-tight">{title}</h3>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="bg-black text-white px-4 sm:px-8 lg:px-20 xl:px-56 py-12 lg:py-20">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Step into the Digital Future with Innovative Services
        </h2>
        <p className="text-gray-300 text-lg">
          From startups to enterprises, our digital solutions help businesses
          worldwide overcome modern challenges with a fresh, user-focused,
          and digital-first approach.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <ServiceCard
          image={mobile}
          title={<>Mobile App <br /> Development</>}
        />
        <ServiceCard
          image={software}
          title={<>Software <br /> Development</>}
        />
        <ServiceCard
          image={web}
          title={<>Website <br /> Development</>}
        />
        <ServiceCard
          image={ecomarch}
          title={<>eCommerce <br /> Development</>}
        />
      </div>
    </div>
  );
};

export default Services;
