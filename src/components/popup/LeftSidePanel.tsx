import { useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

import faca from "@/assets/trusted/faca.svg";
import data from "@/assets/trusted/datadojo.svg";
import revo from "@/assets/trusted/revo.svg";
import global from "@/assets/trusted/global.svg";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, FinTech Solutions (USA)",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Phixels.io transformed our complex financial concept into a seamless mobile experience. Their strategic roadmap saved us months of development time. Highly recommended for scalable app solutions.",
    rating: 5.0,
    verified: true,
  },
  {
    name: "Ahmed Al-Fayed",
    role: "CTO, RetailHub (UAE)",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Exceptional quality and communication. The team provided a transparent cost estimate upfront, and delivered the project exactly on the timeline promised. A true technical partner.",
    rating: 5.0,
    verified: true,
  },
  {
    name: "James Miller",
    role: "Founder, MedConnect (UK)",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    text: "We needed a secure and compliant healthcare app, and they delivered perfectly. Their risk assessment overview was an eye-opener and helped us avoid critical pitfalls early on.",
    rating: 5.0,
    verified: true,
  },
  {
    name: "Anita Roy ",
    role: "Product Manager, EdLearn Global (Singapore)",
    image: "https://randomuser.me/api/portraits/women/85.jpg",
    text: "I was impressed by their responsiveness. True to their word, they respond instantly. The UI/UX design they delivered for our learning platform is world-class.",
    rating: 5.0,
    verified: true,
  },
  {
    name: "Michael Chen",
    role: "Director of Operations, LogiMove (Canada)",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    text: "Finding a reliable global agency is hard, but Phixels made it easy. From the preliminary estimate to the final deployment, the process was professional and smooth. 5 stars!",
    rating: 5.0,
    verified: true,
  },
];

const LeftSidePanel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <div className="w-full md:w-full bg-transparent p-10 flex flex-col relative h-full ">
      {/* Testimonial Carousel */}
      <div className="flex items-center gap-5 mb-8 relative">
        <button
          onClick={prevTestimonial}
          className="z-10 p-2 rounded-full border-2 border-red-400 hover:bg-red-50 transition-colors shrink-0"
        >
          <FaChevronLeft size={14} className="text-red-500" />
        </button>

        <div className="flex-1 overflow-hidden relative min-h-55">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col items-center"
            >
              <div className="text-center mb-4 relative">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-gray-100 object-cover shadow-md"
                  />
                  <div className="absolute bottom-3 right-[calc(50%-40px)] bg-white rounded-full p-1 shadow-sm">
                    <MdVerified className="text-blue-500" size={16} />
                  </div>
                </div>
              </div>

              <p className="text-center text-sm text-gray-700 mb-4 leading-relaxed line-clamp-3 italic">
                "{testimonial.text}"
              </p>

              <div className="text-center">
                <h4 className="font-bold text-gray-900 text-base">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-gray-500 mb-3">{testimonial.role}</p>
              </div>

              <div className="flex items-center justify-center gap-4 ">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black">
                  <span className="font-bold text-xs text-white">
                    Fiverr
                  </span>
                  <span className="text-xs font-semibold">5.0</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" size={10} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={nextTestimonial}
          className="z-10 p-2 rounded-full border-2 border-red-400 hover:bg-red-50 transition-colors shrink-0"
        >
          <FaChevronRight size={14} className="text-red-500" />
        </button>
      </div>

      {/* Two Column Benefits */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-8 mt-4">
        <div>
          <p className="font-semibold text-gray-800 text-sm mb-3 ">
            Unlock $1,000 Worth of Value 100% Free:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs text-gray-700">
              <FaCheckCircle
                className="text-red-500 mt-0.5 shrink-0"
                size={12}
              />
              <span>Detailed Execution Roadmap.</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-700">
              <FaCheckCircle
                className="text-red-500 mt-0.5 shrink-0"
                size={12}
              />
              <span>Preliminary Budget Plan.</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-700">
              <FaCheckCircle
                className="text-red-500 mt-0.5 shrink-0"
                size={12}
              />
              <span>Go-to-Market Timeline.</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-700">
              <FaCheckCircle
                className="text-red-500 mt-0.5 shrink-0"
                size={12}
              />
              <span>Risk & Scalability Assessment.</span>
            </div>
          </div>
        </div>

        <div>
          <p className="font-semibold text-gray-800 text-sm mb-3">
            Have a Question? Let's Talk!
          </p>
          <div className="space-y-1.5 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-red-600">📞</span>
              <span>+880 1723 289090</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-600">✉️</span>
              <span>phixels.io@gmail.com</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600">BD</span>
              <span>112/2 Mohakhali, Dhaka, Bangladesh.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Brands */}
      {/* Trusted By */}
      <div className="mt-5 bg-black px-6 pb-6 pt-4 rounded-2xl border-2 border-white/50 box-border">
        <p className="text-lg font-medium text-white text-center ">
          We are Trusted by
        </p>

        <div className="flex items-center justify-between  mt-4">
          <Image
            src={faca}
            alt="faca"
            className="h-6 w-auto mix-blend-screen"
          />
          <Image
            src={data}
            alt="data"
            className="h-6 w-auto mix-blend-screen"
          />
          <Image
            src={revo}
            alt="revo"
            className="h-6 w-auto mix-blend-screen"
          />
          <Image
            src={global}
            alt="global"
            className="h-6 w-auto mix-blend-screen"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSidePanel;
