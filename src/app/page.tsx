import About from "@/components/About";
import AboutCard from "@/components/AboutCard";
import Hero from "@/components/Hero";

import Project from "@/components/Project";
import ServicesHome from "@/components/ServicesHome";

import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Technologies from "@/components/Technologies";
import Blog from "@/components/Blog";

const page = () => {
  return (
    <div className="items-center">
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
      <div id="contact"></div>
    </div>
  );
};

export default page;
