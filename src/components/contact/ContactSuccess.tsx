// Image import removed (unused)

const ContactSuccess = () => {
  return (
    <div className="py-20 px-4 sm:px-8 lg:px-20 xl:px-56 bg-black">
      <div className="mb-12">
        <p className="text-[#1DBF73] font-medium tracking-widest text-sm uppercase mb-3">
          Case Studies
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif italic mb-2 text-white">
          Success Stories
        </h2>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          That Inspire Us
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Placeholders for success story cards */}
        {[
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1555421689-492a18d9c3ad?q=80&w=2680&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2680&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2680&auto=format&fit=crop",
        ].map((img, i) => (
          <div key={i} className="bg-gray-900 rounded-xl overflow-hidden group">
            <div className="h-64 bg-gray-800 relative">
              <div className="absolute inset-0">
                <img
                  src={img}
                  alt={`Success Story ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-white mb-2">Project Success {i}</h4>
              <p className="text-gray-500 text-sm">
                How we helped Client {i} achieve 300% growth.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSuccess;
