import Link from "next/link";
import { FaArrowLeft, FaRocket } from "react-icons/fa";

const ProductsPage = () => {
  return (
    <>
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 to-black z-0" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#ED1F24] rounded-full blur-[128px] opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900 rounded-full blur-[128px] opacity-20" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-8 border border-white/10 backdrop-blur-sm animate-bounce">
            <FaRocket className="text-[#ED1F24] text-2xl" />
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Coming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED1F24] to-orange-500">
              Soon
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 mb-12 leading-relaxed">
            We are crafting something extraordinary. Our premium digital
            products are being built to revolutionize your workflow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/"
              className="group flex items-center gap-3 bg-[#ED1F24] hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <button className="px-8 py-4 rounded-full font-bold text-white border border-gray-700 hover:bg-white/5 transition-colors">
              Notify Me
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 text-gray-600 text-sm">
          &copy; 2025 Phixels.io. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
