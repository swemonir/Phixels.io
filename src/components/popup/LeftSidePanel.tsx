import { useState } from "react";
import {
    FaCheckCircle,
    FaStar,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const testimonials = [
    {
        name: "Adam Johnston",
        role: "CEO - Last Call Trivia, AI Gaming Solution",
        image: "https://avatar.iran.liara.run/public/boy",
        text: "JPLoft gave us an amazing AI gaming solution, improving speed, accuracy, & engagement.",
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
            <div className="flex items-center gap-3 mb-8">
                <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full border-2 border-red-400 hover:bg-red-50 transition-colors shrink-0"
                >
                    <FaChevronLeft size={14} className="text-red-500" />
                </button>

                <div className="flex-1">
                    <div className="text-center mb-4">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-gray-100"
                        />
                    </div>

                    <p className="text-center text-sm text-gray-700 mb-4 leading-relaxed">
                        {testimonial.text}
                    </p>

                    <div className="text-center">
                        <h4 className="font-bold text-gray-900 text-base">
                            {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-500 mb-3">{testimonial.role}</p>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-900">Clutch</span>
                            <span className="text-sm font-semibold">5.0</span>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400" size={12} />
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-1 text-blue-500 text-xs">
                            <MdVerified size={14} />
                            <span>Verified Review</span>
                        </div>
                    </div>
                </div>

                <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full border-2 border-red-400 hover:bg-red-50 transition-colors shrink-0"
                >
                    <FaChevronRight size={14} className="text-red-500" />
                </button>
            </div>

            {/* Two Column Benefits */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-8">
                <div>
                    <p className="font-semibold text-gray-800 text-sm mb-3">
                        Our Experts Provide Free:
                    </p>
                    <div className="space-y-2">
                        <div className="flex items-start gap-2 text-xs text-gray-700">
                            <FaCheckCircle
                                className="text-red-500 mt-0.5 flex-shrink-0"
                                size={12}
                            />
                            <span>Detailed Project Roadmap</span>
                        </div>
                        <div className="flex items-start gap-2 text-xs text-gray-700">
                            <FaCheckCircle
                                className="text-red-500 mt-0.5 flex-shrink-0"
                                size={12}
                            />
                            <span>Preliminary Cost Estimate</span>
                        </div>
                        <div className="flex items-start gap-2 text-xs text-gray-700">
                            <FaCheckCircle
                                className="text-red-500 mt-0.5 flex-shrink-0"
                                size={12}
                            />
                            <span>Timeline Breakdown</span>
                        </div>
                        <div className="flex items-start gap-2 text-xs text-gray-700">
                            <FaCheckCircle
                                className="text-red-500 mt-0.5 flex-shrink-0"
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
            <div className="mt-auto pt-6 border-t border-gray-200">
                <p className="text-center text-sm font-semibold text-gray-700 mb-4">
                    We are Trusted by
                </p>
                <div className="flex items-center justify-center gap-6 flex-wrap">
                    <div className="text-xl font-bold text-gray-800">WFFA</div>
                    <div className="text-base font-semibold text-gray-700">
                        Whirlpool
                    </div>
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
