"use client";
import Image from "next/image";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const ContactHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData({ ...formData, budget });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Prepare template params
    // We append budget to the message since the template might not have a {{budget}} variable yet
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: `[Budget: ${formData.budget || 'Not specified'}] \n\n${formData.message}`,
    };

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      if (result.text === "OK") {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", budget: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="py-20 px-4 sm:px-8 lg:px-20 xl:px-56 bg-linear-to-b from-black to-[#0F0D1C] relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/10 blur-3xl rounded-full pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <p className="text-gray-400 font-medium tracking-widest text-sm uppercase mb-3">
          Get in Touch
        </p>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif italic">
          Have A Question Or <br />
          <span className="not-italic font-sans text-white">
            Just Want To Chat?
          </span>
        </h1>
      </div>

      <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl relative z-10 flex flex-col lg:flex-row gap-12 text-black">
        {/* Left: Info */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-serif italic">
            Tell Us Your <br />
            <span className="not-italic font-sans">
              Amazing <br /> Project Here
            </span>
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border border-gray-300 mt-1" />
              <p className="text-sm text-gray-600">
                I want a response in within 24 hours
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border border-gray-300 mt-1" />
              <p className="text-sm text-gray-600">
                We will arrange an NDA upon request
              </p>
            </div>
          </div>

          {/* Small image placeholder */}
          <div className="rounded-xl overflow-hidden h-40 bg-gray-900 relative mt-8">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop"
              alt="Team Support"
              fill
              className="object-cover opacity-80"
            />
          </div>
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-2/3">
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                <FaCheckCircle size={40} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Request Sent!</h3>
              <p className="text-gray-600 text-lg">We'll be in touch with you shortly.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 text-blue-600 underline hover:text-blue-800"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-b border-gray-200 focus:border-black py-3 px-4 outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-b border-gray-200 focus:border-black py-3 px-4 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+123 456789"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-b border-gray-200 focus:border-black py-3 px-4 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Project Budget
                </label>
                <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                  {[
                    "Less than $1k",
                    "$1k - $3k",
                    "$3k - $10k",
                    "$10k - $20k",
                    "More than $20k",
                  ].map((budget) => (
                    <button
                      type="button"
                      key={budget}
                      onClick={() => handleBudgetSelect(budget)}
                      className={`border px-4 py-2 rounded-full transition-colors ${formData.budget === budget
                        ? "bg-black text-white border-black"
                        : "border-gray-300 hover:bg-black hover:text-white"
                        }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="I want to create a website..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-b border-gray-200 focus:border-black py-3 px-4 outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-[#5836F5] hover:bg-[#4a2ce0] text-white px-8 py-3 rounded-md font-bold transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Request'} <FaArrowRight />
              </button>

              {status === "error" && (
                <p className="text-red-500 text-sm">Failed to send message. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
