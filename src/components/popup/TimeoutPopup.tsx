"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePopup } from "@/context/PopupContext";
import { InitialFormData, BookingFormData, BookedSlot } from "./types";
import LeftSidePanel from "./LeftSidePanel";
import Step1Form from "./steps/Step1Form";
import Step2Calendar from "./steps/Step2Calendar";
import Step3Time from "./steps/Step3Time";
import Step4Confirm from "./steps/Step4Confirm";
import Step5Success from "./steps/Step5Success";
import { FaStar, FaTimes } from "react-icons/fa";

const TimeoutPopup = () => {
  const { isOpen, closePopup, flowType, openPopup } = usePopup();
  const [step, setStep] = useState(1);
  const [initialFormData, setInitialFormData] = useState<InitialFormData>({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
    fileName: "",
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [bookedSlots, setBookedSlots] = useState<BookedSlot[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Revoke preview URL on close or change
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  // Reset step when popup opens or flow type changes
  useEffect(() => {
    if (isOpen) {
      setStep(1);
    }
  }, [isOpen, flowType]);

  // Auto-reopen logic (1 minute after close)
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        openPopup("timeout");
      }, 60000); // 60 seconds
      return () => clearTimeout(timer);
    }
  }, [isOpen, openPopup]);

  // Auto-close on Success
  useEffect(() => {
    if (step === 5) {
      const timer = setTimeout(() => {
        closePopup();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [step, closePopup]);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting Booking:", {
      ...initialFormData,
      selectedDate,
      selectedTimeSlot,
    });
    handleNext();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 md:p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-linear-to-l from-white/95 to-[#FEF4F4]/95 rounded-xl md:rounded-2xl shadow-2xl w-full max-w-7xl h-[90vh] md:h-[83vh] flex flex-col overflow-hidden relative"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 md:top-4 md:right-4 z-20 p-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors text-white hover:text-white"
            >
              <FaTimes size={16} />
            </button>

            {/* Header Section */}
            <div className="w-full text-center shrink-0 relative px-4 md:px-12 p-3">
              <h2 className="text-xl md:text-3xl font-bold text-gray-900 mt-6 md:mt-6">
                Wait! Before You Leave, Let’s Validate Your App Idea.
              </h2>
            </div>

            {/* Content Container */}
            <div className="flex flex-col md:flex-row flex-1 w-full overflow-y-auto md:overflow-hidden relative mb-6 custom-scrollbar">
              {/* Left Side Panel - Visible on all screens, top on mobile */}
              <div className="w-full md:w-[50%] h-auto mt-1 order-1 md:order-1">
                <LeftSidePanel />
              </div>

              {/* Right Side Content */}
              <div className="w-full md:w-[50%] h-auto flex flex-col relative bg-transparent order-2 md:order-2">
                {/* Mobile Header (optional, usually steps have their own headers) */}

                <div className="flex-1 w-full h-auto md:h-[90%] md:overflow-hidden justify-center items-center bg-transparent">
                  {step === 1 && (
                    <Step1Form
                      formData={initialFormData}
                      setFormData={setInitialFormData}
                      onNext={handleNext}
                      flowType={flowType}
                      selectedFile={selectedFile}
                      setSelectedFile={setSelectedFile}
                      previewUrl={previewUrl}
                      setPreviewUrl={setPreviewUrl}
                    />
                  )}
                  {step === 2 && (
                    <Step2Calendar
                      selectedDate={selectedDate}
                      setSelectedDate={setSelectedDate}
                      onNext={handleNext}
                      onBack={handleBack}
                    />
                  )}
                  {step === 3 && (
                    <Step3Time
                      selectedDate={selectedDate}
                      selectedTimeSlot={selectedTimeSlot}
                      setSelectedTimeSlot={setSelectedTimeSlot}
                      onNext={handleNext}
                      onBack={handleBack}
                      bookedSlots={bookedSlots}
                    />
                  )}
                  {step === 4 && (
                    <Step4Confirm
                      formData={initialFormData}
                      setFormData={setInitialFormData}
                      selectedDate={selectedDate}
                      selectedTimeSlot={selectedTimeSlot}
                      onSubmit={handleBookingSubmit}
                      onBack={handleBack}
                      flowType={flowType}
                      selectedFile={selectedFile}
                      setSelectedFile={setSelectedFile}
                      previewUrl={previewUrl}
                      setPreviewUrl={setPreviewUrl}
                    />
                  )}
                  {step === 5 && (
                    <Step5Success
                      flowType={flowType}
                      selectedDate={selectedDate}
                      selectedTimeSlot={selectedTimeSlot}
                      initialFormData={initialFormData}
                    />
                  )}
                </div>

                {/* rating  */}
                <div className=" shrink-0 bg-transparent ">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" size={18} />
                      ))}
                    </div>
                    <span className="text-gray-700">
                      Rated <span className="font-bold text-blue-600">4.9</span>{" "}
                      by <span className="font-bold text-blue-600">100+</span>{" "}
                      Happy Customers.
                    </span>
                  </div>
                  <p className="text-center text-xs text-gray-500 mt-1">
                    <span className="font-bold text-blue-600">8+ Years</span>{" "}
                    of Industry-experience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TimeoutPopup;
