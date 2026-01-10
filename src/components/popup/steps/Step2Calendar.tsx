import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Step2CalendarProps {
    selectedDate: Date | null;
    setSelectedDate: (date: Date | null) => void;
    onNext: () => void;
}

const Step2Calendar = ({
    selectedDate,
    setSelectedDate,
    onNext,
}: Step2CalendarProps) => {
    const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
    const [errorMsg, setErrorMsg] = useState("");

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

    const formatDate = (date: Date): string => {
        return date.toISOString().split("T")[0];
    };

    const days = getDaysInMonth(currentMonth);
    const monthName = currentMonth.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });

    const handleNext = () => {
        if (!selectedDate) {
            setErrorMsg("Please select a date");
            return;
        }
        setErrorMsg("");
        onNext();
    };

    return (
        <div className="w-full h-full p-8 overflow-y-auto custom-scrollbar bg-white flex items-center justify-center">
            <div className="max-w-md mx-auto w-full">
                <div className="bg-white rounded-lg p-6 border shadow-sm">
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
                        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                            <div
                                key={day}
                                className="text-center text-xs font-semibold text-gray-500 py-2"
                            >
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar grid */}
                    <div className="grid grid-cols-7 gap-2">
                        {days.map((day, index) => {
                            if (!day) {
                                return <div key={`empty-${index}`} className="aspect-square" />;
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
                                    className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all ${isSelected
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

                    {/* Error Message */}
                    {errorMsg && (
                        <p className="text-red-500 text-sm mt-4 text-center">{errorMsg}</p>
                    )}

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        disabled={!selectedDate}
                        className="w-full mt-6 bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Step2Calendar;
