"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface LeadPopupProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

const LeadPopup: React.FC<LeadPopupProps> = ({
  isOpen,
  onClose,
  serviceName,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes size={20} />
          </button>

          <div className="text-center mb-6">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              {serviceName
                ? `Get Started with ${serviceName}`
                : "Let's Build Something Great"}
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">
              Request a Free Consultation
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label text-xs font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered w-full text-sm"
                />
              </div>
              <div className="form-control">
                <label className="label text-xs font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="input input-bordered w-full text-sm"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label text-xs font-medium text-gray-700">
                Service Type
              </label>
              <select
                className="select select-bordered w-full text-sm font-normal"
                defaultValue={serviceName || "Other"}
              >
                <option>App Development</option>
                <option>Web Development</option>
                <option>Software Development</option>
                <option>AI & Integration</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label text-xs font-medium text-gray-700">
                Message
              </label>
              <textarea
                className="textarea textarea-bordered h-24 w-full text-sm"
                placeholder="Tell us about your project requirements..."
              ></textarea>
            </div>

            <button className="btn bg-red-600 hover:bg-red-700 text-white w-full border-none mt-2">
              Get Free Consultation
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LeadPopup;
