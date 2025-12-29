import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import AboutTeam from "@/components/about/AboutTeam";
import AboutStory from "@/components/about/AboutStory";
import AboutClients from "@/components/about/AboutClients";
import AboutFAQ from "../../components/about/AboutFAQ";
import { FaArrowRight } from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <div className="bg-black min-h-screen text-white pt-20">
        <AboutHero />
        <AboutStats />
        <AboutStory />
        <AboutTeam />

        {/* Clients / Stories - Simplified for now based on image */}
        <AboutClients />

        {/* CTA */}
        <div className="bg-[#1A1829] py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-900 to-blue-900 rounded-3xl p-10 lg:p-16 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Want to be a Monk Like Us?
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Join our team of creative minds and build the future of digital
                products.
              </p>
              <button className="bg-[#ED1F24] hover:bg-white hover:text-[#ED1F24] text-white px-8 py-3 rounded-full font-bold transition-all inline-flex items-center gap-2">
                Join Our Team <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        <AboutFAQ />
      </div>
    </>
  );
};

export default AboutPage;
