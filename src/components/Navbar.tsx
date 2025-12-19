"use client";

import Link from "next/link";

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
    <div className="navbar shadow-md sticky top-0 z-50 px-4 sm:px-8 lg:px-20 xl:px-56 bg-white">
      
      {/* LEFT: Logo */}
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl text-black">
          MyLogo
        </Link>
      </div>

      {/* RIGHT: Mobile Menu Button */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost text-black hover:text-white">
            ☰
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow rounded-box w-56"
          >
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.children ? (
                  <details>
                    <summary>{item.label}</summary>
                    <ul>
                      {item.children.map((child, i) => (
                        <li key={i}>
                          <Link href={child.link}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={item.link}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.children ? (
                <details>
                  <summary className="text-black">{item.label}</summary>
                  <ul className="p-2 rounded-box shadow">
                    {item.children.map((child, i) => (
                      <li key={i}>
                        <Link className="text-black" href={child.link}>{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link className="text-black" href={item.link}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-black">asdklfj</p>
    </div>
  );
};

export default Navbar;
