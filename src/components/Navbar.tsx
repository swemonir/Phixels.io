"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";

const menuItems = [
  { label: "Home", link: "/" },
  {
    label: "Services",
    children: [
      { label: "Web Development", link: "/services/web" },
      { label: "UI/UX Design", link: "/services/ui-ux" },
      { label: "SEO Optimization", link: "/services/seo" },
    ],
  },
  { label: "About", link: "/about" },
  { label: "Contact", link: "/contact" },
];

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-md sticky top-14 z-40 px-4 sm:px-8 lg:px-20 xl:px-56">
      {/* LEFT: Logo */}
      <div className="navbar-start w-auto mr-auto">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" className="h-8 w-auto sm:h-10" />
        </Link>
      </div>

      {/* RIGHT: Mobile Menu (Visible on small screens) */}
      <div className="navbar-end lg:hidden flex w-auto">
        <button className="btn btn-sm bg-[#FF0000] text-white border-none hover:bg-red-700 mr-2 text-xs">
          Get Free Quote
        </button>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle text-black"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-white rounded-box w-52"
          >
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.children ? (
                  <details>
                    <summary className="text-black">{item.label}</summary>
                    <ul>
                      {item.children.map((child, i) => (
                        <li key={i}>
                          <Link className="text-black" href={child.link}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link className="text-black" href={item.link}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CENTER & RIGHT: Desktop Menu (Hidden on small screens) */}
      <div className="navbar-end hidden lg:flex w-full">
        <ul className="menu menu-horizontal gap-6 px-1 text-base font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.children ? (
                <details>
                  <summary className="text-black hover:text-[#FF0000] transition-colors">{item.label}</summary>
                  <ul className="p-2 bg-white rounded-box shadow-lg w-48">
                    {item.children.map((child, i) => (
                      <li key={i}>
                        <Link className="text-black hover:text-[#FF0000]" href={child.link}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link className="text-black hover:text-[#FF0000] transition-colors" href={item.link}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}

          {/* Desktop CTA Button */}
          <li>
            <Link href="/quote" className="btn btn-sm bg-[#FF0000] text-white border-none hover:bg-red-700 px-6 rounded-md">
              Get Free Quote
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
