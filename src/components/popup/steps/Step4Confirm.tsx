import { FaCalendar, FaClock } from "react-icons/fa";
import { BookingFormData } from "../types";

interface Step4ConfirmProps {
    formData: BookingFormData;
    setFormData: (data: BookingFormData) => void;
    selectedDate: Date | null;
    selectedTimeSlot: string;
    onSubmit: (e: React.FormEvent) => void;
    onBack: () => void;
    flowType: string;
}

const Step4Confirm = ({
    formData,
    setFormData,
    selectedDate,
    selectedTimeSlot,
    onSubmit,
    onBack,
    flowType,
}: Step4ConfirmProps) => {
    return (
        <div className="w-full h-full p-8 overflow-y-auto custom-scrollbar bg-white">
            <div className="max-w-lg mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Confirm booking:
                </h2>
                <p className="text-gray-600 mb-6">
                    Let's talk about your {flowType === "book-call" ? "call" : "project"}{" "}
                    💬
                </p>

                {/* Booking details */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-2 border">
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

                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Your name*
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
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
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
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
                            value={formData.phone}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
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
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
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
                        onClick={onBack}
                        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg transition-all"
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Step4Confirm;
