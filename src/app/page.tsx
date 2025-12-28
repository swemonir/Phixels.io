import About from "@/components/About";
import AboutCard from "@/components/AboutCard";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Services from "@/components/Services";
import TopBar from "@/components/TopBar";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Technologies from "@/components/Technologies";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="items-center">
      <TopBar />
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <AboutCard />
      <div id="services">
        <Services />
      </div>
      <Project />
      <Industries />
      <Testimonials />
      <Technologies />
      <Blog />
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default page;
