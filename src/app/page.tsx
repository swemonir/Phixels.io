import About from "@/components/About";
import AboutCard from "@/components/AboutCard";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Services from "@/components/Services";
import TopBar from "@/components/TopBar";

const page = () => {
  return (
    <div className="items-center">
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <AboutCard />
      <Services/>
      <Project/>
    </div>
  );
};

export default page;
