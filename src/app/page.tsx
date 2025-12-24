import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";

const page = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default page;
