"use client";

import { useEffect, useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaCheckCircle,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { usePopup } from "@/context/PopupContext";

const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  return { num1, num2, answer: num1 + num2 };
};

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

const TimeoutPopup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    protectNDA: false,
  });

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { isOpen, openPopup, closePopup } = usePopup();
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0 });
  const [captchaInput, setCaptchaInput] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const reopenTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setCaptcha(generateCaptcha());
    const initialTimer = setTimeout(() => {
      openPopup();
    }, 30000);

    return () => {
      clearTimeout(initialTimer);
      if (reopenTimerRef.current) clearTimeout(reopenTimerRef.current);
    };
  }, [openPopup]);

  const handleClose = () => {
    closePopup();
    if (reopenTimerRef.current) clearTimeout(reopenTimerRef.current);
    reopenTimerRef.current = setTimeout(() => {
      openPopup();
    }, 60000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (parseInt(captchaInput) !== captcha.answer) {
      setErrorMsg("Incorrect captcha result.");
      return;
    }

    const submissionData = {
      ...formData,
      meetingTime: startDate ? startDate.toString() : "Not selected",
      fileName: selectedFile ? selectedFile.name : "No file",
      captchaAnswer: captchaInput,
      submittedAt: new Date().toISOString(),
    };

    console.log("=== FORM SUBMISSION DATA ===");
    console.log(submissionData);
    console.log("============================");

    if (!formRef.current) return;
    setStatus("submitting");

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_id",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_id",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key"
      );

      if (result.text === "OK") {
        setStatus("success");
        if (reopenTimerRef.current) clearTimeout(reopenTimerRef.current);
        setTimeout(() => closePopup(), 3000);
      } else {
        setStatus("error");
        setErrorMsg("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setErrorMsg("Something went wrong. Please check your config.");
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  if (!isOpen) return null;

  const testimonial = testimonials[currentTestimonial];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 rounded-3xl shadow-2xl max-w-6xl w-full flex flex-col relative max-h-[95vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors shadow-lg"
        >
          <AiOutlineClose size={18} />
        </button>

        {/* Header - Centered at top */}
        <div className="w-full text-center pt-6 pb-4 px-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
            Pause! Before You Press <span className="text-red-500">X</span>, See
            What You Could Be Missing!
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* Left Side */}
          <div className="w-full md:w-[40%] bg-white p-8 flex flex-col relative">
            {/* Testimonial Carousel */}
            <div className="flex items-center gap-3 mb-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border-2 border-red-400 hover:bg-red-50 transition-colors flex-shrink-0"
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
                  <p className="text-xs text-gray-500 mb-3">
                    {testimonial.role}
                  </p>
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
                className="p-2 rounded-full border-2 border-red-400 hover:bg-red-50 transition-colors flex-shrink-0"
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

          {/* Right Side - Form */}
          <div className="w-full md:w-[60%] p-8 bg-white overflow-y-auto border">
            <div className="border shadow-lg rounded-lg px-6 py-8 m-2">
              <div className="mb-5">
                <h3 className="text-base font-bold text-gray-800">
                  We respond promptly, typically within{" "}
                  <span className="text-blue-500">30 minutes</span>
                </h3>
                <p className="text-xs text-red-500 mt-1">* Mandatory Field</p>
              </div>

              {status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center min-h-[300px]">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <FaCheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mt-2">
                    We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all text-black bg-gray-50"
                      placeholder="Enter Full Name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all text-black bg-gray-50"
                      placeholder="Enter Email Address"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select className="border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none text-black bg-gray-50">
                        <option>🇧🇩 +880</option>
                        <option>🇺🇸 +1</option>
                        <option>🇬🇧 +44</option>
                        <option>🇮🇳 +91</option>
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="flex-1 border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all text-black bg-gray-50"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                  </div>

                  {/* Schedule Meeting Field */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Schedule Meeting
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date: Date | null) => setStartDate(date)}
                      showTimeSelect
                      dateFormat="MMMM d, yyyy h:mm aa"
                      placeholderText="Select Date & Time"
                      className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all text-black bg-gray-50"
                      wrapperClassName="w-full"
                    />
                    <input
                      type="hidden"
                      name="meeting_time"
                      value={startDate ? startDate.toString() : ""}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={3}
                      className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all text-black resize-none bg-gray-50"
                      placeholder="Share Project Details / Overview of Your Idea (Help Us Come Back Stronger)"
                    />
                  </div>

                  <div className="flex items-center gap-4 justify-between">
                    <div className="flex items-center gap-4">
                      <label className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors text-sm font-medium">
                        <span>📎 Add File</span>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                      <span className="text-sm text-gray-600">
                        {selectedFile ? selectedFile.name : "No file chosen"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="nda"
                        checked={formData.protectNDA}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            protectNDA: e.target.checked,
                          })
                        }
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="nda" className="text-sm text-gray-700">
                        Protect Under NDA
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-700 text-sm whitespace-nowrap">
                        Are you human? <span className="text-git a-500">*</span>
                      </span>
                      <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg border border-blue-200">
                        <span className="font-bold text-gray-700 text-sm">
                          {captcha.num1}+{captcha.num2}=
                        </span>
                        <input
                          type="text"
                          className="w-24 p-1.5 text-center border border-gray-300 rounded-md focus:border-blue-500 outline-none text-sm text-black bg-white"
                          value={captchaInput}
                          onChange={(e) => setCaptchaInput(e.target.value)}
                          placeholder="CAPTCHA Result"
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? "Sending..." : "Submit"}
                    </button>
                  </div>

                  {errorMsg && (
                    <p className="text-red-500 text-xs text-center mt-2">
                      {errorMsg}
                    </p>
                  )}
                </form>
              )}
            </div>
            {/* Rating */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2 text-sm">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={18} />
                  ))}
                </div>
                <span className="text-gray-700">
                  Rated <span className="font-bold text-blue-600">4.8</span> by{" "}
                  <span className="font-bold text-blue-600">1000+</span> Happy
                  Customers.
                </span>
              </div>
              <p className="text-center text-xs text-gray-500 mt-1">
                <span className="font-bold text-blue-600">10+ Years</span> of
                Industry-experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeoutPopup;
