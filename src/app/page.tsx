import About from "@/components/home/HomeAbout";
import AboutCard from "@/components/home/AboutCard";
import Hero from "@/components/home/Hero";

import Project from "@/components/home/HomeProjects";
import ServicesHome from "@/components/home/ServicesHome";

import Industries from "@/components/home/Industries";
import Testimonials from "@/components/home/Testimonials";
import Technologies from "@/components/home/Technologies";
import Blog from "@/components/home/HomeBlog";

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
