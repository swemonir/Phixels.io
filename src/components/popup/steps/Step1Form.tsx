import { useState, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { InitialFormData } from "../types";

interface Step1FormProps {
  formData: InitialFormData;
  setFormData: (data: InitialFormData) => void;
  onNext: () => void;
  flowType: string;
}

const Step1Form = ({
  formData,
  setFormData,
  onNext,
  flowType,
}: Step1FormProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setFormData({
        ...formData,
        fileName: e.target.files[0].name,
      });
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
        <div className="border shadow-lg rounded-lg px-6 py-8">
          <div className="mb-5">
            <h3 className="text-xl font-bold text-gray-800">
              {flowType === "start-project"
                ? "Let's Connect"
                : "We respond promptly, typically within"}{" "}
              {flowType !== "start-project" && (
                <span className="text-blue-500">30 minutes</span>
              )}
            </h3>
            <p className="text-xs text-red-500 mt-1">* Mandatory Field</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
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
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all text-black bg-gray-50"
                placeholder="Enter Full Name"
              />
            </div>

            <div className="flex gap-4 justify-between items-center ">
              <div className="flex-1">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all text-black bg-gray-50"
                  placeholder="Enter Email Address"
                />
              </div>

              <div className="flex-1">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="border border-gray-300 rounded-lg p-2.5">
                    <select className="text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none text-black bg-gray-50">
                      <option>🇧🇩 +880</option>
                      <option>🇺🇸 +1</option>
                      <option>🇬🇧 +44</option>
                      <option>🇮🇳 +91</option>
                    </select>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className="flex-1 border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all text-black bg-gray-50"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
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
                    onClick={() => setFormData({ ...formData, budget })}
                    className={`border px-4 py-2 rounded-full transition-colors ${
                      formData.budget === budget
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
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
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
                <span>Add File</span>
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
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                Next
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
        {/* <div className="mt-6 pt-6 border-t border-gray-200">
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
                </div> */}
      </div>
    </div>
  );
};

export default Step1Form;
