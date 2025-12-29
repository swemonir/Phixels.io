"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <span
          className={`p-2 rounded-full border border-gray-700 ${
            isOpen ? "text-[#ED1F24]" : "text-gray-500"
          }`}
        >
          {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-400 leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
};

const AboutFAQ = () => {
  const faqs = [
    {
      q: "How long does a design project take?",
      a: "Project timelines vary depending on complexity and scope. Typically, a branding project takes 2-4 weeks, while a full website redesign might take 4-8 weeks. We provide detailed timelines during our initial consultation.",
    },
    {
      q: "Why is design monks different?",
      a: "We combine data-driven insights with creative excellence. Our team acts as your partner, not just a vendor, ensuring every design decision aligns with your business goals.",
    },
    {
      q: "How do we ensure project success?",
      a: "We follow a rigorous process involving research, strategy, iteration, and testing. Regular check-ins and transparent communication keep you involved at every step.",
    },
    {
      q: "Is Phixels working in an eco-friendly way?",
      a: "Yes, we are committed to sustainable digital practices, optimizing our workflows and digital products for energy efficiency.",
    },
    {
      q: "What design tools do you use?",
      a: "We utilize industry-standard tools like Figma, Adobe Creative Cloud (Photoshop, Illustrator, After Effects), and Webflow/Next.js for development.",
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-8 lg:px-20 xl:px-56 bg-black">
      <div className="text-center mb-16">
        <p className="text-[#1DBF73] font-medium tracking-widest text-sm uppercase mb-3">
          FAQ
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif italic">
          Your Questions <br />
          <span className="not-italic font-sans">Answered?</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </div>
  );
};

export default AboutFAQ;
