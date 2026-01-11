import { useState } from "react";
import { BookedSlot } from "../types";

interface Step3TimeProps {
  selectedDate: Date | null;
  selectedTimeSlot: string;
  setSelectedTimeSlot: (time: string) => void;
  onNext: () => void;
  onBack: () => void;
  bookedSlots: BookedSlot[];
}

const Step3Time = ({
  selectedDate,
  selectedTimeSlot,
  setSelectedTimeSlot,
  onNext,
  onBack,
  bookedSlots,
}: Step3TimeProps) => {
  const [errorMsg, setErrorMsg] = useState("");

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

  const formatDate = (date: Date): string => {
    return date.toISOString().split("T")[0];
  };

  const isSlotBooked = (date: Date, time: string): boolean => {
    return bookedSlots.some(
      (slot) => slot.date === formatDate(date) && slot.time === time
    );
  };

  const timeSlots = generateTimeSlots();
  const availableTimeSlots = selectedDate
    ? timeSlots.filter((time) => !isSlotBooked(selectedDate, time))
    : [];

  const handleNext = () => {
    if (!selectedTimeSlot) {
      setErrorMsg("Please select a time slot");
      return;
    }
    setErrorMsg("");
    onNext();
  };

  return (
    <div className="w-full h-full  overflow-y-auto custom-scrollbar bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto">
        <div className="bg-white  p-6 border  shadow-lg rounded-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            {selectedDate
              ? selectedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "short",
                  day: "numeric",
                })
              : "Select a date"}
          </h3>

          <p className="text-sm text-gray-500 mb-4">
            Select a time for your call.
          </p>

          <div className="space-y-2 max-h-75 overflow-y-auto pr-2 custom-scrollbar">
            {availableTimeSlots.length > 0 ? (
              availableTimeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTimeSlot(time)}
                  className={`w-full py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                    selectedTimeSlot === time
                      ? "bg-red-500 text-white"
                      : "bg-gray-50 text-gray-700 hover:bg-red-100"
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

          {errorMsg && (
            <p className="text-red-500 text-sm mt-4 text-center">{errorMsg}</p>
          )}

          <div className="flex gap-3 mt-6">
            <button
              onClick={onBack}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition-all"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!selectedTimeSlot}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3Time;
