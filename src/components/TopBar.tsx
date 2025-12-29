import Image from "next/image";
import fiver from "@/assets/fiverr.svg";
import shortLogo from "@/assets/short-logo.svg";
import { FaLocationDot } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import gmail from "@/assets/gmail.svg";
import whatsapp from "@/assets/whatsapp.svg";
import teams from "@/assets/teams.svg";

const TopBar = () => {
  return (
    <div
      className="
        bg-black
        px-4 sm:px-8 lg:px-20 xl:px-56
        flex justify-between items-center
        sticky top-0 z-50
        h-14
      "
    >
      {/* Left: location and phone */}
      <div className="flex gap-3 items-center">
        {/* location */}
        <div className="hidden sm:flex items-center gap-1">
          <FaLocationDot className="text-white" />
          <p className="text-white text-sm">Dhaka, Bangladesh</p>
        </div>

        <div className="hidden sm:text-[#636060]">|</div>

        {/* phone */}
        <div className="flex items-center gap-1">
          <MdWifiCalling3 className="text-white" />
          <p className="text-white text-sm">+8801723289090</p>
        </div>

        <p className="hidden lg:block text-[#79BBEB] text-sm">We answer our phones!</p>
      </div>

      {/* Right: logo & contacts */}
      <div className="flex items-center gap-16 ml-auto">
        {/* Fiverr + logo */}
        <div className="hidden md:flex items-center">
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
            height={30}
            width={30}
          />

          <div className="bg-[#ED1F2430] border-r-2 border-red-500 -ml-2 px-1">
            <p className="text-white text-xs whitespace-nowrap">
              Message Me
            </p>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex md:gap-3 sm:gap-2 gap-1 items-center">
          <Image alt="whatsapp" src={whatsapp} height={26} width={26} />
          <div className="text-[#636060]">|</div>
          <Image alt="teams" src={teams} height={26} width={26} />
          <div className="text-[#636060]">|</div>
          <Image alt="gmail" src={gmail} height={26} width={26} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;