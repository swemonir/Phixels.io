"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const ContactHero = () => {
  return (
    <div className="py-20 px-4 sm:px-8 lg:px-20 xl:px-56 bg-gradient-to-b from-black to-[#0F0D1C] relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/10 blur-3xl rounded-full pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <p className="text-gray-400 font-medium tracking-widest text-sm uppercase mb-3">
          Get in Touch
        </p>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif italic">
          Have A Question Or <br />
          <span className="not-italic font-sans text-white">
            Just Want To Chat?
          </span>
        </h1>
      </div>

      <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl relative z-10 flex flex-col lg:flex-row gap-12 text-black">
        {/* Left: Info */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-serif italic">
            Tell Us Your <br />
            <span className="not-italic font-sans">
              Amazing <br /> Project Here
            </span>
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border border-gray-300 mt-1" />
              <p className="text-sm text-gray-600">
                I want a response in within 24 hours
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border border-gray-300 mt-1" />
              <p className="text-sm text-gray-600">
                We will arrange an NDA upon request
              </p>
            </div>
          </div>

          {/* Small image placeholder */}
          <div className="rounded-xl overflow-hidden h-40 bg-gray-900 flex items-center justify-center text-white">
            (Team/Office Image)
          </div>
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-2/3">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-gray-50 border-b border-gray-200 focus:border-black py-3 px-4 outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="john@email.com"
                  className="w-full bg-gray-50 border-b border-gray-200 focus:border-black py-3 px-4 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  WhatsApp Number
                </label>
                <input
                  type="text"
                  placeholder="+123 456789"
                  className="w-full bg-gray-50 border-b border-gray-200 focus:border-black py-3 px-4 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Project Budget
              </label>
              <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                {[
                  "Less than $1k",
                  "$1k - $3k",
                  "$3k - $10k",
                  "$10k - $20k",
                  "More than $20k",
                ].map((budget) => (
                  <button
                    type="button"
                    key={budget}
                    className="border border-gray-300 rounded-full px-4 py-2 hover:bg-black hover:text-white transition-colors"
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Project Details
              </label>
              <textarea
                rows={4}
                placeholder="I want to create a website..."
                className="w-full bg-gray-50 border-b border-gray-200 focus:border-black py-3 px-4 outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#5836F5] hover:bg-[#4a2ce0] text-white px-8 py-3 rounded-md font-bold transition-all flex items-center gap-2"
            >
              Send Request <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
