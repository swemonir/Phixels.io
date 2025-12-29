import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const StatItem = ({
  count,
  label,
  description,
}: {
  count: string;
  label: string;
  description: string;
}) => (
  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
    <h3 className="text-4xl font-bold text-white mb-1">{count}</h3>
    <p className="text-lg font-semibold text-gray-300 mb-3">{label}</p>
    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
  </div>
);

const AboutStats = () => {
  return (
    <div className="py-20 px-4 sm:px-8 lg:px-20 xl:px-56 bg-black">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <p className="text-[#ED1F24] font-medium tracking-widest text-sm uppercase mb-3">
            Who we are
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
            Your Go-To Partner For <br />
            Impactful Designs To Create <br />
            <span className="text-gray-400">
              Wins & Retention For Business Success!
            </span>
          </h2>
        </div>
        <Link href="/contact">
          <button className="bg-[#5836F5] hover:bg-[#4a2ce0] text-white px-8 py-3 rounded-md font-bold transition-all flex items-center gap-2">
            About Us <FaArrowRight />
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatItem
          count="150+"
          label="Clients"
          description="Helping businesses across the globe to scale and grow."
        />
        <StatItem
          count="7"
          label="Countries Served"
          description="Ideally working with global clients from 7 different countries."
        />
        <StatItem
          count="4"
          label="Operations"
          description="We have 4 operational centers to serve you better."
        />
        <StatItem
          count="999"
          label="Subject Takers"
          description="More than 999 projects delivered successfully with high ratings."
        />
      </div>
    </div>
  );
};

export default AboutStats;
