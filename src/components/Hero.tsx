import { TbMailOpenedFilled } from "react-icons/tb";
import { TbMessageFilled } from "react-icons/tb";

const Hero = () => {
  return (
    <div className="sm:px-8 lg:px-20 xl:px-56">
      {/* <div className="relative overflow-hidden lg:px-60 lg:py-32"> */}
      {/* Background image with blur */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center  scale-105" />

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
              <button className="flex items-center gap-2 bg-[#ED1F24] px-5 py-2.5 rounded-sm border border-[#ED1F24]">
                <TbMessageFilled />
                Get Started
              </button>
              <button className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-sm border border-[#ED1F24]">
                <TbMailOpenedFilled color="#ED1F24" />
                Request a Quote
              </button>
            </div>

            {/* sponcer */}
            <div>
              <p className="text-base sm:text-lg lg:text-2xl">We are Trusted by</p>
            </div>
          </div>
          <p className="xl:text-4xl lg:text-2xl sm:text-xl font-bold lg:mt-32 sm:mt-10 m-5">
            dlsdj
          </p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Hero;
