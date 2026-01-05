"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { megaMenuCategories } from "@/data/servicesData";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaCogs,
  FaBrain,
  FaChevronRight,
} from "react-icons/fa";

interface MegaMenuProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  isOpen,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [activeCategory, setActiveCategory] = React.useState<string>(
    megaMenuCategories[0].title
  );

  const activeCategoryData = megaMenuCategories.find(
    (c) => c.title === activeCategory
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full mx-auto w-[77%] bg-white shadow-xl border-t border-gray-100 z-50 left-1/2 -translate-x-1/2 "
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={{
            backgroundColor: "transparent",
          
          }}
        >
          <div className="container mx-auto px-4 sm:px-8 lg:px-20 py-8 bg-white rounded-b-xl">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Side: Categories */}
              <div className="w-full lg:w-1/4 border-r border-gray-100 pr-4">
                <ul className="space-y-2">
                  {megaMenuCategories.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setActiveCategory(category.title)}
                        className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-200 ${
                          activeCategory === category.title
                            ? "bg-red-50 text-red-600 font-medium"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {getCategoryIcon(category.title)}
                          <span>{category.title}</span>
                        </div>
                        {activeCategory === category.title && (
                          <FaChevronRight className="text-sm" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side: Sub-items */}
              <div className="w-full lg:w-3/4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      {activeCategory}
                    </h3> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {activeCategoryData?.subItems.map((item, subIndex) => (
                        <Link
                          key={subIndex}
                          href={item.href}
                          className="group flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
                        >
                          <div className="flex items-center gap-3">
                            {/* <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-xs  group-hover:bg-red-600 group-hover:text-white transition-colors">
                              {item.label.charAt(0)}
                            </div> */}
                            <span className="text-gray-600 font-medium group-hover:text-gray-900">
                              {item.label}
                            </span>
                          </div>
                          <FaChevronRight className="text-gray-300 group-hover:text-red-600 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom CTA */}
                {/* <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-gray-800">
                      Not sure what you need?
                    </h4>
                    <p className="text-sm text-gray-500">
                      Schedule a free consultation with our experts.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="px-6 py-2.5 bg-gray-900 text-white rounded-full hover:bg-red-600 transition-colors font-medium text-sm"
                  >
                    Book Consultation
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Helper function to get icon based on category title
const getCategoryIcon = (title: string) => {
  if (title.includes("App")) return <FaMobileAlt size={20} />;
  if (title.includes("Web")) return <FaLaptopCode size={20} />;
  if (title.includes("Software")) return <FaCogs size={20} />;
  if (title.includes("Artificial")) return <FaBrain size={20} />;
  return <FaLaptopCode size={20} />;
};

export default MegaMenu;
