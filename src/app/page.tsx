import About from "@/components/About";
import AboutCard from "@/components/AboutCard";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Project from "@/components/Project";
import ServicesHome from "@/components/ServicesHome";

import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Technologies from "@/components/Technologies";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="items-center">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <AboutCard />
      <div id="services">
        <ServicesHome />
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
