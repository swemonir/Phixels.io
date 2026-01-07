import { FaCheckCircle, FaCalendar, FaClock } from "react-icons/fa";
import { BookingFormData, InitialFormData } from "../types";

interface Step5SuccessProps {
    flowType: string;
    selectedDate: Date | null;
    selectedTimeSlot: string;
    bookingFormData: BookingFormData;
    initialFormData: InitialFormData;
}

const Step5Success = ({
    flowType,
    selectedDate,
    selectedTimeSlot,
    bookingFormData,
    initialFormData,
}: Step5SuccessProps) => {
    return (
        <div className="w-full h-full flex items-center justify-center p-8 bg-white">
            <div className="text-center max-w-md w-full">
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
                <div className="bg-gray-50 rounded-lg p-6 text-left space-y-3 shadow-inner">
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
                                    <strong>Project Details:</strong> {initialFormData.message}
                                </p>
                            )}
                        </div>
                    )}
                </div>

                <p className="text-sm text-gray-500 mt-4">Closing automatically...</p>
            </div>
        </div>
    );
};

export default Step5Success;
