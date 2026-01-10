import { useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO - TechFlow Solutions",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Phixels.io transformed our digital presence. Their team's attention to detail and technical expertise is unmatched.",
    rating: 5.0,
    verified: true,
  },
  {
    name: "David Chen",
    role: "Founder - StartUp Inc",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Incredible speed and quality. They delivered our MVP weeks ahead of schedule without cutting corners.",
    rating: 5.0,
    verified: true,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director - CreativePulse",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "The design team is phenomenal. They captured our brand voice perfectly and increased our conversion by 150%.",
    rating: 5.0,
    verified: true,
  },
  {
    name: "Michael Chang",
    role: "Product Manager - InnovateSoft",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    text: "Professional, responsive, and skilled. Working with Phixels feels like having an in-house expert team.",
    rating: 5.0,
    verified: true,
  },
  {
    name: "Jessica Thompson",
    role: "CEO - ApexSolutions",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
    text: "We finally found a partner we can trust. Phixels handled our complex backend migration seamlessly.",
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
    <div className="w-full md:w-full bg-white p-8 flex flex-col relative h-full ">
      {/* Testimonial Carousel */}
      <div className="flex items-center gap-3 mb-8 relative">
        <button
          onClick={prevTestimonial}
          className="z-10 p-2 rounded-full border-2 border-red-400 hover:bg-red-50 transition-colors shrink-0"
        >
          <FaChevronLeft size={14} className="text-red-500" />
        </button>

        <div className="flex-1 overflow-hidden relative min-h-[220px]">
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

              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                  <span className="font-bold text-gray-900 text-xs">
                    Clutch
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
          <p className="font-semibold text-gray-800 text-sm mb-3">
            Our Experts Provide Free:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs text-gray-700">
              <FaCheckCircle
                className="text-red-500 mt-0.5 shrink-0"
                size={12}
              />
              <span>Detailed Project Roadmap</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-700">
              <FaCheckCircle
                className="text-red-500 mt-0.5 shrink-0"
                size={12}
              />
              <span>Preliminary Cost Estimate</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-700">
              <FaCheckCircle
                className="text-red-500 mt-0.5 shrink-0"
                size={12}
              />
              <span>Timeline Breakdown</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-700">
              <FaCheckCircle
                className="text-red-500 mt-0.5 shrink-0"
                size={12}
              />
              <span>Risk Assessment Overview</span>
            </div>
          </div>
        </div>

        <div>
          <p className="font-semibold text-gray-800 text-sm mb-3">
            Have a Question? Let's Talk!
          </p>
          <div className="space-y-1.5 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-purple-600">📞</span>
              <span>(303) 335-0405</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-600">✉️</span>
              <span>sales@jploft.com</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600">🇺🇸</span>
              <span>
                700 N Colorado Blvd, Ste #200
                <br />
                Denver, CO 80206
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Brands */}
      <div className=" mt-auto pt-6 ">
        <p className="text-center text-sm font-semibold text-gray-700 mb-4">
          We are Trusted by
        </p>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <div className="text-xl font-bold text-gray-800">WFFA</div>
          <div className="text-base font-semibold text-gray-700">Whirlpool</div>
          <div className="text-xl font-bold" style={{ color: "#D32F2F" }}>
            Red Bull
          </div>
          <div className="text-xl font-bold text-gray-900">NIKE</div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidePanel;
