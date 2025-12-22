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
    <div className="navbar bg-white shadow-md sticky top-0 z-50 px-4 sm:px-8 lg:px-20 xl:px-56">
      {/* LEFT: Logo */}
      <div className="navbar-start">
        <Link href="/" className=" text-xl text-black">
          <Image src={logo} alt="Logo" />
        </Link>
      </div>

      {/* RIGHT: Mobile Menu */}
      <div className="navbar-end lg:hidden">
        <button className="btn btn-sm btn-outline text-black mr-5">
          Click
        </button>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className=" text-black flex items-center gap-2 cursor-pointer"
          >
            ☰
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-3 shadow bg-white rounded-box w-56"
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

      {/* DESKTOP MENU */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.children ? (
                <details>
                  <summary className="text-black">{item.label}</summary>
                  <ul className="p-2 bg-white rounded-box shadow z-50">
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

          {/* Desktop CTA Button */}
          <li>
            <button className="btn btn-sm btn-outline text-black">Click</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
