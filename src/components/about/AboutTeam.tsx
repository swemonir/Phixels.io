import Image from "next/image";

const TeamMember = ({ name, role }: { name: string; role: string }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden text-center group hover:border-[#5836F5] transition-colors">
    <div className="h-64 sm:h-72 bg-gray-800 relative overflow-hidden">
      {/* Placeholder for Member Image */}
      <div className="absolute inset-0 flex items-center justify-center text-gray-600 group-hover:bg-gray-700 transition-colors">
        Member Photo
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#5836F5]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-gray-400 text-sm">{role}</p>
    </div>
  </div>
);

const AboutTeam = () => {
  return (
    <div className="py-20 px-4 sm:px-8 lg:px-20 xl:px-56 bg-black">
      <div className="text-center mb-16">
        <p className="text-[#1DBF73] font-medium tracking-widest text-sm uppercase mb-3">
          Our Team
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif italic mb-10">
          Contributors To Magic: <br />
          <span className="not-italic font-sans text-white text-2xl sm:text-4xl lg:text-5xl">
            UX Insights to Grow the Industry
          </span>
        </h2>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 mb-16 border-t border-b border-gray-800 py-8">
          <div>
            <h3 className="text-3xl font-bold text-white">260+</h3>
            <p className="text-gray-500 text-sm">Videos</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">100K+</h3>
            <p className="text-gray-500 text-sm">Likes</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">50K+</h3>
            <p className="text-gray-500 text-sm">Comments</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">1M+</h3>
            <p className="text-gray-500 text-sm">Views</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-10">
          Collaborative Minds, Singular Force
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TeamMember name="Ariyan" role="Product Designer" />
          <TeamMember name="Asif Hossain" role="Senior Designer" />
          <TeamMember name="Nanid Israt" role="Product Designer" />
          <TeamMember name="Sulaiman Foz" role="UX Designer" />
        </div>

        <button className="mt-12 bg-[#5836F5] hover:bg-[#4a2ce0] text-white px-8 py-3 rounded-md font-bold transition-all">
          Check All Team
        </button>
      </div>
    </div>
  );
};

export default AboutTeam;
