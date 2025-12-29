const LocationCard = ({ country, time }: { country: string; time: string }) => (
  <div className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-[#5836F5] transition-colors cursor-default">
    <h4 className="font-bold text-white mb-1">{country}</h4>
    <p className="text-gray-500 text-xs">{time}</p>
  </div>
);

const ContactInfo = () => {
  return (
    <div className="py-20 px-4 sm:px-8 lg:px-20 xl:px-56 bg-black text-center">
      <p className="text-[#1DBF73] font-medium tracking-widest text-sm uppercase mb-4">
        Locations
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold font-serif italic mb-2">
        Get in Touch for Business Or
      </h2>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
        Career Opportunities!
      </h2>

      <div className="flex justify-center gap-8 mb-16 text-sm">
        <a
          href="mailto:hello@designmonks.io"
          className="text-gray-300 hover:text-white border-b border-dashed border-gray-500 pb-1"
        >
          hello@designmonks.io
        </a>
        <a
          href="mailto:career@designmonks.io"
          className="text-gray-300 hover:text-white border-b border-dashed border-gray-500 pb-1"
        >
          career@designmonks.io
        </a>
      </div>

      {/* World Map Placeholder with Locations */}
      <div className="relative max-w-4xl mx-auto h-96 bg-[url('/images/world-map-dots.png')] bg-contain bg-no-repeat bg-center opacity-80">
        {/* Manually placed cards to simulate map locations */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-20">
          <LocationCard country="United States" time="Mon-Fri, 9am - 5pm" />
          <LocationCard country="Australia" time="Mon-Fri, 9am - 5pm" />
          <LocationCard country="United Kingdom" time="Mon-Fri, 9am - 5pm" />
          <LocationCard country="Bangladesh" time="Sun-Thu, 9am - 6pm" />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
