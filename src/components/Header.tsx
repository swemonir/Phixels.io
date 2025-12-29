"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

const Header = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Initialize lastScrollY with current scroll position to prevent initial jump
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Scrolling down & passed threshold
        setShowTopBar(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setShowTopBar(true);
      } else if (currentScrollY <= 0) {
        // At top
        setShowTopBar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Header Container */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300">
        {/* TopBar Wrapper with Transition */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showTopBar ? "max-h-14 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <TopBar />
        </div>

        {/* Navbar */}
        <div className="w-full">
          <Navbar />
        </div>
      </div>

      {/* Spacer to separate content from fixed header */}
      {/* TopBar (h-14 / 3.5rem) + Navbar (approx h-20 / 5rem) = approx h-32 / 8rem */}
      <div className="h-32 hidden lg:block" />
      {/* Mobile might have different height logic, but for now spacer keeps layout stable */}
      <div className="h-20 block lg:hidden" />
    </>
  );
};

export default Header;
