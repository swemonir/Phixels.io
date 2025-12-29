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
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-gray-900 rounded-xl overflow-hidden group">
            <div className="h-64 bg-gray-800 relative">
              {/* Image placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                Story Image {i}
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
