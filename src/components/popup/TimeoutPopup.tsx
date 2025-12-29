"use client";

import { useEffect, useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Close icon
import { FaCheckCircle } from "react-icons/fa"; // Success icon
import { MdOutlineTimer } from "react-icons/md"; // Timer icon (optional)
import Image from "next/image";
import emailjs from '@emailjs/browser';

// Simple fallback captcha
const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return { num1, num2, answer: num1 + num2 };
};

const TimeoutPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0 });
    const [captchaInput, setCaptchaInput] = useState("");
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const reopenTimerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setCaptcha(generateCaptcha());

        const initialTimer = setTimeout(() => {
            setIsOpen(true);
        }, 30000); // 30 seconds initial delay

        return () => {
            clearTimeout(initialTimer);
            if (reopenTimerRef.current) clearTimeout(reopenTimerRef.current);
        };
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        // Clear any existing reopen timer to avoid multiple timers
        if (reopenTimerRef.current) clearTimeout(reopenTimerRef.current);

        // Reopen after 1 minute (60000ms)
        reopenTimerRef.current = setTimeout(() => {
            setIsOpen(true);
        }, 60000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg("");

        if (parseInt(captchaInput) !== captcha.answer) {
            setErrorMsg("Incorrect captcha result.");
            return;
        }

        if (!formRef.current) return;

        setStatus("submitting");

        try {
            // NOTE: Replace specific string IDs with your actual EmailJS IDs or environment variables
            // Ideally use process.env.NEXT_PUBLIC_...
            const result = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_id',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_id',
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_key'
            );

            if (result.text === 'OK') {
                setStatus("success");
                // Stop the popup from reopening if successfully submitted
                if (reopenTimerRef.current) clearTimeout(reopenTimerRef.current);
                setTimeout(() => setIsOpen(false), 3000);
            } else {
                setStatus("error");
                setErrorMsg("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus("error");
            setErrorMsg("Something went wrong. Please check your config.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity duration-300">
            {/* Main Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-5xl w-full flex flex-col md:flex-row relative animate-fade-in-up">

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors"
                >
                    <AiOutlineClose size={20} />
                </button>

                {/* Left Side: Testimonial / Promo */}
                <div className="w-full md:w-5/12 bg-linear-to-br from-blue-50 to-indigo-100 p-8 flex flex-col justify-center items-center text-center relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-red-500 via-purple-500 to-blue-500" />

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                        Pause! Before You Press <span className="text-red-500">X</span>, See What You Could Be Missing!
                    </h2>

                    {/* Placeholder for Testimonial Avatar */}
                    <div className="w-20 h-20 bg-gray-300 rounded-full mb-4 overflow-hidden border-4 border-white shadow-md">
                        {/* Replace with actual image if available */}
                        <img src="https://avatar.iran.liara.run/public/boy" alt="User" />
                    </div>

                    <p className="text-gray-700 italic mb-4 text-sm md:text-base">
                        "Handling last-minute changes and challenges, Phixels delivered exceptionally."
                    </p>

                    <h4 className="font-bold text-gray-900">Jake Adler</h4>
                    <span className="text-xs text-gray-500">Owner - Music Streaming Platform</span>

                    <div className="mt-8 text-left w-full space-y-2">
                        <p className="font-semibold text-gray-800 text-sm">Our Experts Provide Free:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li className="flex items-center gap-2"><FaCheckCircle className="text-red-500" size={14} /> Detailed Project Roadmap</li>
                            <li className="flex items-center gap-2"><FaCheckCircle className="text-red-500" size={14} /> Preliminary Cost Estimate</li>
                            <li className="flex items-center gap-2"><FaCheckCircle className="text-red-500" size={14} /> Timeline Breakdown</li>
                        </ul>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full md:w-7/12 p-8 bg-white">
                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-gray-800">
                            We respond promptly, typically within <span className="text-blue-500">30 minutes</span>
                        </h3>
                        <p className="text-xs text-red-500 mt-1">* Mandatory Field</p>
                    </div>

                    {status === "success" ? (
                        <div className="h-full flex flex-col items-center justify-center text-center min-h-[300px]">
                            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaCheckCircle size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">Message Sent!</h3>
                            <p className="text-gray-600 mt-2">We'll get back to you shortly.</p>
                        </div>
                    ) : (
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-black"
                                    placeholder="Enter Full Name"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-black"
                                    placeholder="Enter Email Address"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md">
                                        🌐
                                    </span>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full border border-gray-300 rounded-r-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-black"
                                        placeholder="Enter Phone Number"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
                                <textarea
                                    name="message"
                                    required
                                    rows={3}
                                    className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-black"
                                    placeholder="Share Project Details / Overview of Your Idea"
                                />
                            </div>

                            <div className="flex items-center gap-4 pt-2">
                                <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-md border border-blue-100">
                                    <span className="font-bold text-gray-700 text-sm">{captcha.num1} + {captcha.num2} = </span>
                                    <input
                                        type="number"
                                        className="w-16 p-1 text-center border border-gray-300 rounded focus:border-blue-500 outline-none text-sm text-black"
                                        value={captchaInput}
                                        onChange={(e) => setCaptchaInput(e.target.value)}
                                        placeholder="?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="flex-1 bg-[#EF4444] hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? 'Sending...' : 'Submit'}
                                </button>
                            </div>

                            {errorMsg && <p className="text-red-500 text-xs text-center mt-2">{errorMsg}</p>}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TimeoutPopup;
