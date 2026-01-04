import Image from "next/image";
import Link from "next/link";
import fiver from "@/assets/fiverr.svg";
import shortLogo from "@/assets/topbar/fiverr-icon 2.svg";
import linkdin from "@/assets/topbar/Linkdin.svg";
import freelencer from "@/assets/topbar/freelencer.svg";
import { FaLocationDot } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import gmail from "@/assets/gmail.svg";
import whatsapp from "@/assets/whatsapp.svg";
import { motion } from "framer-motion";
import { Smartphone, Globe, Code, ShoppingCart, Palette } from "lucide-react";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const TopBar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 👈 VERY IMPORTANT

  const marqueeItems = [
    { icon: Smartphone, text: "Mobile App Development" },
    { icon: Globe, text: "Website Development" },
    { icon: Code, text: "Software Development" },
    { icon: ShoppingCart, text: "eCommerce Development" },
    // { icon: Palette, text: "UI/UX Design" },
    // { icon: BarChart3, text: "Digital Marketing" }
  ];

  // Duplicate items for seamless looping
  const duplicatedItems = [...marqueeItems, ...marqueeItems];

  return (
    <div className="bg-black px-4 sm:px-8 lg:px-20 xl:px-56 flex items-center h-14">
      {/* Left: location and phone */}
      <div className="h-full w-full mx-5 my-auto overflow-hidden relative flex items-center">
        <motion.div
          className="w-full overflow-hidden whitespace-nowrap"
          style={{ height: "2.5rem" }}
        >
          <motion.div
            className="flex items-center justify-start gap-8 text-white h-full"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 min-w-max h-full"
              >
                <item.icon size={20} className="text-[#C10007] shrink-0" />
                <span className="leading-none my-auto">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Right: logo & contacts */}
      <div className="flex items-center justify-between gap-32 w-1/2">
        {/* Fiverr + logo */}
        {/* Fiverr + logo */}
        <div className=" items-center">
          <Link
            href="https://www.fiverr.com/zmonir24"
            target="_blank"
            className="hidden md:flex items-center cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Image
              src={fiver}
              alt="fiver"
              height={30}
              width={80}
              className="mr-2"
            />

            <Image
              src={shortLogo}
              alt="logo"
              height={32}
              width={32}
              className="z-20"
            />
            {/* <div className="w-full left-0"> */}
            <div className="bg-[#ED1F2430] -ml-3 px-1 border-r-2 border-red-500">
              {/* <p className="text-white text-xs whitespace-nowrap">Message Me</p> */}
              <div className="relative bg-[#ED1F2410] px-1 left-0 overflow-hidden">
                {/* Dual animated borders for continuous effect */}
           

                <p className="text-white text-sm whitespace-nowrap font-medium relative z-10 p-1 ml-2">
                  Message Me
                </p>
              </div>
            </div>
            {/* </div> */}
          </Link>
        </div>

        {/* Social icons */}
        <div className="flex md:gap-3 sm:gap-2 gap-1 items-center">
          {/* WhatsApp */}
          <Link
            href="https://wa.me/8801723289090"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt="whatsapp"
              src={whatsapp}
              height={30}
              width={30}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
          </Link>

          <div className="text-[#636060]">|</div>

          {/* Teams */}
          <Link
            href="https://www.linkedin.com/company/phixels-agency/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt="Linkdin"
              src={linkdin}
              height={30}
              width={30}
              className="cursor-pointer hover:scale-110 transition-transform "
            />
          </Link>

          <div className="text-[#636060]">|</div>

          {/* Email (Gmail) — remove target="_blank" */}
          <Link
            href="mailto:phixels.io@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt="gmail"
              src={gmail}
              height={30}
              width={30}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
