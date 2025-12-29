import Image from "next/image";

const TeamMember = ({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden text-center group hover:border-[#5836F5] transition-colors">
    <div className="h-64 sm:h-72 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
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
          <TeamMember
            name="Ariyan"
            role="Product Designer"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
          />
          <TeamMember
            name="Asif Hossain"
            role="Senior Designer"
            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
          />
          <TeamMember
            name="Nanid Israt"
            role="Product Designer"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
          />
          <TeamMember
            name="Sulaiman Foz"
            role="UX Designer"
            image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop"
          />
        </div>

        <button className="mt-12 bg-[#5836F5] hover:bg-[#4a2ce0] text-white px-8 py-3 rounded-md font-bold transition-all">
          Check All Team
        </button>
      </div>
    </div>
  );
};

export default AboutTeam;
