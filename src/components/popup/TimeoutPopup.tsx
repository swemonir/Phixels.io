"use client";

import { useEffect, useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaCheckCircle,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaCalendar,
  FaClock,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { usePopup, FlowType } from "@/context/PopupContext";

// Types
type StepType = "initial-form" | "calendar" | "booking-form" | "success";

interface BookedSlot {
  id: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM AM/PM
  userName: string;
  userEmail: string;
}

interface InitialFormData {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
  fileName: string;
}

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Helper functions
const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  return { num1, num2, answer: num1 + num2 };
};

const formatDate = (date: Date): string => {
  return date.toISOString().split("T")[0];
};

const generateTimeSlots = (): string[] => {
  const slots: string[] = [];
  for (let hour = 9; hour <= 17; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const period = hour >= 12 ? "PM" : "AM";
      const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
      const displayMinute = minute.toString().padStart(2, "0");
      slots.push(`${displayHour}:${displayMinute} ${period}`);
    }
  }
  return slots;
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
  // Context
  const { isOpen, flowType, closePopup, resetPopup } = usePopup();

  // Step management
  const [currentStep, setCurrentStep] = useState<StepType>("initial-form");

  // Form data
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

  // Calendar & time slot state
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  // Booking management
  const [bookedSlots, setBookedSlots] = useState<BookedSlot[]>([
    // Mock data
    {
      id: "1",
      date: "2026-01-08",
      time: "10:00 AM",
      userName: "John Doe",
      userEmail: "john@example.com",
    },
    {
      id: "2",
      date: "2026-01-08",
      time: "2:30 PM",
      userName: "Jane Smith",
      userEmail: "jane@example.com",
    },
  ]);

  // UI state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const reopenTimerRef = useRef<NodeJS.Timeout | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize based on flow type
  useEffect(() => {
    if (isOpen) {
      if (flowType === "book-call") {
        setCurrentStep("calendar");
      } else if (flowType === "start-project") {
        setCurrentStep("initial-form");
      } else if (flowType === "timeout") {
        setCurrentStep("initial-form");
      }
    }
  }, [isOpen, flowType]);

  // Timeout popup auto-open (only for timeout flow)
  useEffect(() => {
    if (flowType === "timeout") {
      const initialTimer = setTimeout(() => {
        // openPopup() is called from context
      }, 30000);

      return () => {
        clearTimeout(initialTimer);
        if (reopenTimerRef.current) clearTimeout(reopenTimerRef.current);
      };
    }
  }, [flowType]);

  // Handlers
  const handleClose = () => {
    closePopup();
    resetPopup();
    setCurrentStep("initial-form");
    setSelectedDate(null);
    setSelectedTimeSlot("");
    setStatus("idle");
    setErrorMsg("");

    if (flowType === "timeout" && reopenTimerRef.current) {
      clearTimeout(reopenTimerRef.current);
      reopenTimerRef.current = setTimeout(() => {
        // openPopup() for timeout
      }, 60000);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setInitialFormData({
        ...initialFormData,
        fileName: e.target.files[0].name,
      });
    }
  };

  // Step 1: Initial form submit (Start Project flow)
  const handleInitialFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("=== STEP 1: INITIAL PROJECT FORM DATA ===");
    console.log({
      ...initialFormData,
      submittedAt: new Date().toISOString(),
    });
    console.log("=========================================");

    // Move to calendar step
    setCurrentStep("calendar");
  };

  // Step 2: Calendar & time slot selection
  const handleCalendarNext = () => {
    if (!selectedDate || !selectedTimeSlot) {
      setErrorMsg("Please select both date and time slot");
      return;
    }

    setErrorMsg("");

    // Pre-fill booking form with initial data if from Start Project flow
    if (flowType === "start-project") {
      setBookingFormData({
        name: initialFormData.name,
        email: initialFormData.email,
        phone: initialFormData.phone,
        message: "",
      });
    }

    setCurrentStep("booking-form");
  };

  // Step 3: Booking form submit
  const handleBookingFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("=== STEP 3: BOOKING FORM DATA ===");
    console.log({
      ...bookingFormData,
      selectedDate: selectedDate?.toLocaleDateString(),
      selectedTime: selectedTimeSlot,
      submittedAt: new Date().toISOString(),
    });
    console.log("=================================");

    // Add to booked slots
    const newSlot: BookedSlot = {
      id: Date.now().toString(),
      date: formatDate(selectedDate!),
      time: selectedTimeSlot,
      userName: bookingFormData.name,
      userEmail: bookingFormData.email,
    };

    setBookedSlots([...bookedSlots, newSlot]);
    setCurrentStep("success");

    // Auto-close after 3 seconds
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  // Calendar helpers
  const isSlotBooked = (date: Date, time: string): boolean => {
    return bookedSlots.some(
      (slot) => slot.date === formatDate(date) && slot.time === time
    );
  };

  const getDaysInMonth = (date: Date): (Date | null)[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const isPastDate = (date: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
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
  const timeSlots = generateTimeSlots();
  const availableTimeSlots = selectedDate
    ? timeSlots.filter((time) => !isSlotBooked(selectedDate, time))
    : timeSlots;

  // Render different steps
  const renderContent = () => {
    // SUCCESS STATE
    if (currentStep === "success") {
      return (
        <div className="flex items-center justify-center min-h-[400px] p-8">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaCheckCircle size={40} />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {flowType === "book-call"
                ? "Call Scheduled!"
                : "Project Discussion Scheduled!"}
            </h3>
            <p className="text-gray-600 mb-6">
              {flowType === "book-call"
                ? "Your call has been successfully scheduled"
                : "Your project discussion has been scheduled successfully"}
            </p>

            {/* Display combined data */}
            <div className="bg-gray-50 rounded-lg p-6 text-left space-y-3">
              <h4 className="font-bold text-gray-800 mb-3">Booking Details:</h4>

              <div className="flex items-center gap-2 text-sm text-gray-700">
                <FaCalendar className="text-purple-500" />
                <span>
                  {selectedDate?.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-700">
                <FaClock className="text-purple-500" />
                <span>{selectedTimeSlot} (30 minutes)</span>
              </div>

              <div className="border-t pt-3 mt-3">
                <p className="text-sm text-gray-600">
                  <strong>Name:</strong> {bookingFormData.name}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Email:</strong> {bookingFormData.email}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Phone:</strong> {bookingFormData.phone}
                </p>
              </div>

              {flowType === "start-project" && initialFormData.budget && (
                <div className="border-t pt-3 mt-3">
                  <p className="text-sm text-gray-600">
                    <strong>Budget:</strong> {initialFormData.budget}
                  </p>
                  {initialFormData.message && (
                    <p className="text-sm text-gray-600">
                      <strong>Project Details:</strong>{" "}
                      {initialFormData.message}
                    </p>
                  )}
                </div>
              )}
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Closing automatically...
            </p>
          </div>
        </div>
      );
    }

    // CALENDAR & TIME SLOT SELECTION
    if (currentStep === "calendar") {
      const days = getDaysInMonth(currentMonth);
      const monthName = currentMonth.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });

      return (
        <div className="flex flex-col md:flex-row gap-6 p-8">
          {/* Calendar */}
          <div className="flex-1">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() =>
                    setCurrentMonth(
                      new Date(
                        currentMonth.getFullYear(),
                        currentMonth.getMonth() - 1
                      )
                    )
                  }
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FaChevronLeft size={18} />
                </button>
                <h3 className="text-lg font-bold text-gray-800">{monthName}</h3>
                <button
                  onClick={() =>
                    setCurrentMonth(
                      new Date(
                        currentMonth.getFullYear(),
                        currentMonth.getMonth() + 1
                      )
                    )
                  }
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FaChevronRight size={18} />
                </button>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 gap-2 mb-2">
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center text-xs font-semibold text-gray-500 py-2"
                    >
                      {day}
                    </div>
                  )
                )}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-2">
                {days.map((day, index) => {
                  if (!day) {
                    return (
                      <div key={`empty-${index}`} className="aspect-square" />
                    );
                  }

                  const isSelected =
                    selectedDate &&
                    formatDate(selectedDate) === formatDate(day);
                  const isPast = isPastDate(day);
                  const isToday = formatDate(day) === formatDate(new Date());

                  return (
                    <button
                      key={index}
                      onClick={() => !isPast && setSelectedDate(day)}
                      disabled={isPast}
                      className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
                        isSelected
                          ? "bg-purple-500 text-white"
                          : isPast
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : isToday
                          ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {day.getDate()}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Time Slots */}
          <div className="flex-1">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                {selectedDate
                  ? selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "short",
                      day: "numeric",
                    })
                  : "Select a date"}
              </h3>

              {selectedDate ? (
                <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                  {availableTimeSlots.length > 0 ? (
                    availableTimeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTimeSlot(time)}
                        className={`w-full py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                          selectedTimeSlot === time
                            ? "bg-purple-500 text-white"
                            : "bg-gray-50 text-gray-700 hover:bg-purple-100"
                        }`}
                      >
                        {time}
                      </button>
                    ))
                  ) : (
                    <p className="text-center text-gray-500 py-8">
                      No available slots for this date
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-center text-gray-500 py-8">
                  Please select a date to view available time slots
                </p>
              )}

              {errorMsg && (
                <p className="text-red-500 text-sm mt-4">{errorMsg}</p>
              )}

              <button
                onClick={handleCalendarNext}
                disabled={!selectedDate || !selectedTimeSlot}
                className="w-full mt-6 bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      );
    }

    // BOOKING FORM
    if (currentStep === "booking-form") {
      return (
        <div className="p-8 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Confirm booking:
            </h2>
            <p className="text-gray-600 mb-6">
              Let's talk about your{" "}
              {flowType === "book-call" ? "call" : "project"} 💬
            </p>

            {/* Booking details */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <FaCalendar className="text-purple-500" />
                <span>
                  <strong>When:</strong>{" "}
                  {selectedDate?.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  at {selectedTimeSlot}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <FaClock className="text-purple-500" />
                <span>
                  <strong>Duration:</strong> 30 minutes
                </span>
              </div>
            </div>

            <form onSubmit={handleBookingFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your name*
                </label>
                <input
                  type="text"
                  required
                  value={bookingFormData.name}
                  onChange={(e) =>
                    setBookingFormData({
                      ...bookingFormData,
                      name: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all text-black bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your email*
                </label>
                <input
                  type="email"
                  required
                  value={bookingFormData.email}
                  onChange={(e) =>
                    setBookingFormData({
                      ...bookingFormData,
                      email: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all text-black bg-white"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Please share your whatsapp number (optional).
                </label>
                <input
                  type="tel"
                  value={bookingFormData.phone}
                  onChange={(e) =>
                    setBookingFormData({
                      ...bookingFormData,
                      phone: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all text-black bg-white"
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Please share anything that will help prepare for our meeting
                  (optional).
                </label>
                <textarea
                  value={bookingFormData.message}
                  onChange={(e) =>
                    setBookingFormData({
                      ...bookingFormData,
                      message: e.target.value,
                    })
                  }
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all text-black resize-none bg-white"
                  placeholder="Share any details..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                Book event
              </button>

              <button
                type="button"
                onClick={() => setCurrentStep("calendar")}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg transition-all"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      );
    }

    // INITIAL FORM (Start Project / Timeout)
    return (
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Left Side - Testimonials & Info */}
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
                {flowType === "start-project"
                  ? "Let's Connect"
                  : "We respond promptly, typically within"}{" "}
                {flowType !== "start-project" && (
                  <span className="text-blue-500">30 minutes</span>
                )}
              </h3>
              <p className="text-xs text-red-500 mt-1">* Mandatory Field</p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleInitialFormSubmit}
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
                  value={initialFormData.name}
                  onChange={(e) =>
                    setInitialFormData({
                      ...initialFormData,
                      name: e.target.value,
                    })
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
                  value={initialFormData.email}
                  onChange={(e) =>
                    setInitialFormData({
                      ...initialFormData,
                      email: e.target.value,
                    })
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
                    value={initialFormData.phone}
                    onChange={(e) =>
                      setInitialFormData({
                        ...initialFormData,
                        phone: e.target.value,
                      })
                    }
                    className="flex-1 border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all text-black bg-gray-50"
                    placeholder="Enter Phone Number"
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
                      onClick={() =>
                        setInitialFormData({ ...initialFormData, budget })
                      }
                      className={`border px-4 py-2 rounded-full transition-colors ${
                        initialFormData.budget === budget
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
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  value={initialFormData.message}
                  onChange={(e) =>
                    setInitialFormData({
                      ...initialFormData,
                      message: e.target.value,
                    })
                  }
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all text-black resize-none bg-gray-50"
                  placeholder="Share Project Details / Overview of Your Idea (Help Us Come Back Stronger)"
                />
              </div>

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

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting"
                    ? "Sending..."
                    : flowType === "start-project"
                    ? "Next"
                    : "Submit"}
                </button>
              </div>

              {errorMsg && (
                <p className="text-red-500 text-xs text-center mt-2">
                  {errorMsg}
                </p>
              )}
            </form>
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
    );
  };

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

        {/* Header - Only show for non-success steps */}
        {currentStep !== "success" && (
          <div className="w-full text-center pt-6 pb-4 px-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              {currentStep === "calendar" ? (
                "Select Your Preferred Date & Time"
              ) : currentStep === "booking-form" ? (
                "Complete Your Booking"
              ) : flowType === "start-project" ? (
                "Let's Connect"
              ) : (
                <>
                  Pause! Before You Press{" "}
                  <span className="text-red-500">X</span>, See What You Could Be
                  Missing!
                </>
              )}
            </h2>
          </div>
        )}

        {/* Main Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default TimeoutPopup;
