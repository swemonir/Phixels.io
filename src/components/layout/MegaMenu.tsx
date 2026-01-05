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
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-full w-full bg-white shadow-xl border-t border-gray-100 z-50"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="container mx-auto px-4 sm:px-8 lg:px-20 xl:px-32 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {megaMenuCategories.map((category, index) => (
                <div key={index} className="flex flex-col space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-2 border-b border-gray-100 pb-2">
                    <span className="text-red-600 bg-red-50 p-2 rounded-lg">
                      {getCategoryIcon(category.title)}
                    </span>
                    <h3 className="font-bold text-gray-800 text-lg">
                      {category.title}
                    </h3>
                  </div>

                  {/* Sub-items */}
                  <ul className="space-y-2">
                    {category.subItems.map((item, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={item.href}
                          className="group flex items-center justify-between text-gray-600 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-md transition-all duration-200 text-sm font-medium"
                        >
                          <span>{item.label}</span>
                          <FaChevronRight className="opacity-0 group-hover:opacity-100 text-xs transition-opacity transform group-hover:translate-x-1" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom CTA or Info */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center bg-gray-50 rounded-lg p-4">
              <div>
                <h4 className="font-semibold text-gray-800">
                  Need a Custom Solution?
                </h4>
                <p className="text-sm text-gray-500">
                  We build tailored software to meet your specific business
                  goals.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn btn-sm bg-red-600 text-white border-none hover:bg-red-700"
              >
                Talk to an Expert
              </Link>
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
