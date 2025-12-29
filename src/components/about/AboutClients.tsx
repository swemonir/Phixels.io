const AboutClients = () => {
  return (
    <div className="py-20 px-4 sm:px-8 lg:px-20 xl:px-56 bg-white/5">
      {/* Simple list of logos placeholder */}
      <div className="text-center mb-12">
        <p className="text-[#1DBF73] font-medium tracking-widest text-sm uppercase mb-3">
          Partners
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Collaborating with Ambitious Startups <br />
          And Industry Titans Alike
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Placeholders for logos */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="h-12 w-32 bg-white/10 rounded-md flex items-center justify-center text-xs text-gray-500"
          >
            Logo {i}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutClients;
