"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import logo from "@/assets/logo.svg";
import MegaMenu from "@/components/layout/MegaMenu";
import { usePopup } from "@/context/PopupContext";
import { IoVideocamSharp } from "react-icons/io5";

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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (label === "Services" || label === "Projects") {
      setActiveDropdown(label);
    } else {
      // For other items, we might want to close dropdowns immediately
      setActiveDropdown(null);
    }
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  return (
    <div className="navbar bg-white shadow-md px-4 sm:px-8 lg:px-20 xl:px-56 relative z-50">
      {/* LEFT: Logo */}
      <div className="navbar-start w-auto mr-auto">
        <Link
          href="/"
          className="flex items-center"
          onMouseEnter={() => setActiveDropdown(null)}
        >
          <Image src={logo} alt="Logo" className="h-8 w-auto sm:h-10" />
        </Link>
      </div>

      {/* RIGHT: Mobile Menu (Visible on small screens) */}
      <div className="navbar-end lg:hidden flex w-auto">
        <button
          onClick={() => openPopup("book-call")}
          className="flex items-center justify-center gap-2 bg-[#ED1F24] hover:bg-red-700 text-white px-6 py-3 rounded-md w-full sm:w-auto transition-colors"
        >
          <IoVideocamSharp size={20} />
          <span className="font-medium">Book a Call</span>
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
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Link/Button */}
                <Link
                  href={item.link}
                  className={`flex items-center gap-1 transition-colors ${
                    activeDropdown === item.label
                      ? "text-[#FF0000]"
                      : "text-black hover:text-[#FF0000]"
                  }`}
                >
                  {item.label}
                  {(item.label === "Services" || item.label === "Projects") && (
                    <svg
                      className={`h-3 w-3 fill-current transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
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

                {/* Projects Dropdown */}
                {item.label === "Projects" && activeDropdown === "Projects" && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50 flex flex-col">
                    <Link
                      href="/portfolio"
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors border-b border-gray-50"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Portfolio
                    </Link>
                    <Link
                      href="/case-study"
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Case Study
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="ml-6">
            <button
              onClick={() => openPopup("book-call")}
              className="flex items-center justify-center gap-2 bg-[#ED1F24] hover:bg-red-700 text-white px-6 py-3 rounded-md w-full sm:w-auto transition-colors"
            >
              <IoVideocamSharp size={20} />
              <span className="font-medium">Book a Call</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu Component */}
      <div
        className="w-full absolute left-0 top-full"
        onMouseEnter={() => handleMouseEnter("Services")}
        onMouseLeave={handleMouseLeave}
      >
        <MegaMenu
          isOpen={activeDropdown === "Services"}
          onMouseEnter={() => handleMouseEnter("Services")}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default Navbar;
