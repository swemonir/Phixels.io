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
  const [bookingFormData, setBookingFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [bookedSlots, setBookedSlots] = useState<BookedSlot[]>([]);

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
        // Ensure we don't disrupt if user is doing something else?
        // Detailed requirements said "automatically reappear".
        // We'll stick to simple timeout for now.
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
    // Here you would integrate EmailJS or API call
    console.log("Submitting Booking:", {
      ...initialFormData,
      ...bookingFormData,
      selectedDate,
      selectedTimeSlot,
    });

    // Simulate specific successful submission
    handleNext();
  };

  // Populate booking form data from initial form data if moving from step 1
  useEffect(() => {
    if (initialFormData.email || initialFormData.name) {
      setBookingFormData((prev) => ({
        ...prev,
        name: initialFormData.name || prev.name,
        email: initialFormData.email || prev.email,
        phone: initialFormData.phone || prev.phone,
        message: initialFormData.message || prev.message,
      }));
    }
  }, [initialFormData]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl h-[90vh] md:h-[88vh] flex flex-col overflow-hidden relative"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-20 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={16} />
            </button>

            {/* Header Section */}
            <div className="w-full text-center shrink-0 relative px-12 mt-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Pause! Before You Press X, See What You Could Be Missing!
              </h2>
            </div>

            {/* Content Container */}
            <div className="flex flex-1 w-full overflow-hidden relative">
              {/* Left Side Panel - Hidden on mobile, visible on medium+ screens */}
              <div className="hidden md:block w-[40%]  h-auto mt-14">
                <LeftSidePanel />
              </div>

              {/* Right Side Content */}
              <div className="w-full md:w-[60%] h-full flex flex-col relative bg-white">
                {/* Mobile Header (optional, usually steps have their own headers) */}

                <div className="flex-1 overflow-hidden h-full justify-center items-center">
                  {step === 1 && (
                    <Step1Form
                      formData={initialFormData}
                      setFormData={setInitialFormData}
                      onNext={handleNext}
                      flowType={flowType}
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
                      formData={bookingFormData}
                      setFormData={setBookingFormData}
                      selectedDate={selectedDate}
                      selectedTimeSlot={selectedTimeSlot}
                      onSubmit={handleBookingSubmit}
                      onBack={handleBack}
                      flowType={flowType}
                    />
                  )}
                  {step === 5 && (
                    <Step5Success
                      flowType={flowType}
                      selectedDate={selectedDate}
                      selectedTimeSlot={selectedTimeSlot}
                      bookingFormData={bookingFormData}
                      initialFormData={initialFormData}
                    />
                  )}

                </div>

                {/* rating  */}
                <div className="mt-0 p-8 border-t border-gray-200 shrink-0">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-yellow-400"
                          size={18}
                        />
                      ))}
                    </div>
                    <span className="text-gray-700">
                      Rated{" "}
                      <span className="font-bold text-blue-600">4.8</span> by{" "}
                      <span className="font-bold text-blue-600">1000+</span>{" "}
                      Happy Customers.
                    </span>
                  </div>
                  <p className="text-center text-xs text-gray-500 mt-1">
                    <span className="font-bold text-blue-600">10+ Years</span>{" "}
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
