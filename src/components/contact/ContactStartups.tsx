import { FaArrowRight } from "react-icons/fa";

const ContactStartups = () => {
  return (
    <div className="py-20 px-4 sm:px-8 lg:px-20 xl:px-56 bg-black flex justify-center">
      <div className="relative bg-[#1A1829] border border-gray-800 rounded-3xl p-10 lg:p-16 max-w-4xl w-full flex flex-col items-start overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#5836F5]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />

        <span className="bg-[#1DBF73]/20 text-[#1DBF73] px-3 py-1 rounded-full text-xs font-bold mb-4 border border-[#1DBF73]/20">
          Special Offer
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold font-serif italic mb-2 text-white">
          Details For The
        </h2>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Startups
        </h2>

        <p className="text-gray-400 max-w-lg mb-8 leading-relaxed">
          We support the brave hearts of the startup world. Get exclusive access
          to our startup toolkit and special pricing packages tailored for
          growth.
        </p>

        <button className="bg-[#5836F5] hover:bg-[#4a2ce0] text-white px-8 py-3 rounded-md font-bold transition-all flex items-center gap-2">
          Get Startup Pack <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ContactStartups;
