"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/assets/logo.svg";
import MegaMenu from "@/components/layout/MegaMenu";
import { usePopup } from "@/context/PopupContext";

const menuItems = [
  { label: "Home", link: "/" },
  { label: "Services", link: "/services", hasMegaMenu: true },
  { label: "Products", link: "/products" },
  { label: "Projects", link: "/projects" },
  { label: "Articles", link: "/blog" },
  { label: "About", link: "/about" },
  { label: "Contact", link: "/contact" },
];

const Navbar = () => {
  const { openPopup } = usePopup();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  // Handlers for Mega Menu
  const handleMouseEnter = (label: string) => {
    if (label === "Services") {
      setIsMegaMenuOpen(true);
    } else {
      setIsMegaMenuOpen(false);
    }
  };

  const handleMouseLeave = () => {
    setIsMegaMenuOpen(false);
  };

  return (
    <div className="navbar bg-white shadow-md px-4 sm:px-8 lg:px-20 xl:px-56 relative z-50">
      {/* LEFT: Logo */}
      <div className="navbar-start w-auto mr-auto">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" className="h-8 w-auto sm:h-10" />
        </Link>
      </div>

      {/* RIGHT: Mobile Menu (Visible on small screens) */}
      <div className="navbar-end lg:hidden flex w-auto">
        <button
          onClick={openPopup}
          className="btn btn-sm bg-[#FF0000] text-white border-none hover:bg-red-700 mr-2 text-xs"
        >
          Get Free Quote
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-white rounded-box w-52"
          >
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link className="text-black" href={item.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CENTER & RIGHT: Desktop Menu (Hidden on small screens) */}
      <div className="navbar-end hidden lg:flex w-full">
        <div className="flex items-center">
          <ul className="menu menu-horizontal gap-6 px-1 text-base font-medium">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => handleMouseEnter(item.label)}
                // Only attach mouse leave to the specific item if it's NOT Services,
                // Services leave is handled by the MegaMenu container logic mostly
              >
                <Link
                  className="text-black hover:text-[#FF0000] transition-colors"
                  href={item.link}
                >
                  {item.label}
                  {item.hasMegaMenu && (
                    <svg
                      className={`ml-1 h-3 w-3 fill-current transition-transform duration-200 ${
                        isMegaMenuOpen ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="ml-6">
            <button
              onClick={openPopup}
              className="btn btn-sm bg-[#FF0000] text-white border-none hover:bg-red-700 px-6 rounded-md"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu Component - Centered/Full Width relative to navbar container usually, but here positioned absolute to parent */}
      <div
        className="w-full absolute left-0 top-full"
        onMouseEnter={() => setIsMegaMenuOpen(true)}
        onMouseLeave={handleMouseLeave}
      >
        <MegaMenu
          isOpen={isMegaMenuOpen}
          onMouseEnter={() => setIsMegaMenuOpen(true)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default Navbar;
