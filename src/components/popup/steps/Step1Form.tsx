import { useState, useRef, useEffect } from "react";
import { FaStar, FaFilePdf, FaTimes } from "react-icons/fa";
import { InitialFormData } from "../types";

interface Step1FormProps {
  formData: InitialFormData;
  setFormData: (data: InitialFormData) => void;
  onNext: () => void;
  flowType: string;
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
  previewUrl: string | null;
  setPreviewUrl: (url: string | null) => void;
}

const Step1Form = ({
  formData,
  setFormData,
  onNext,
  flowType,
  selectedFile,
  setSelectedFile,
  previewUrl,
  setPreviewUrl,
}: Step1FormProps) => {
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setFormData({
        ...formData,
        fileName: file.name,
      });

      if (file.type.startsWith("image/")) {
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      } else {
        setPreviewUrl(null);
      }
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setFormData({
      ...formData,
      fileName: "",
    });
  };

  return (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-2 md:p-8 custom-scrollbar">
        <div className="border shadow-lg rounded-lg px-6 py-4">
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
              <label className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors text-sm font-medium shrink-0">
                <span>Add File</span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*,application/pdf"
                />
              </label>

              {selectedFile ? (
                <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg border border-gray-200">
                  {selectedFile.type.startsWith("image/") && previewUrl ? (
                    <div className="w-10 h-10 rounded border overflow-hidden shrink-0">
                      <img
                        src={previewUrl}
                        alt="preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : selectedFile.type === "application/pdf" ? (
                    <div className="w-10 h-10 bg-red-50 rounded flex items-center justify-center text-red-500 shrink-0">
                      <FaFilePdf size={20} />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-gray-500 shrink-0">
                      <FaStar size={20} />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-700 truncate">
                      {selectedFile.name}
                    </p>
                    <p className="text-[10px] text-gray-500">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    className="p-1 hover:bg-gray-200 rounded-full transition-colors text-gray-400 hover:text-red-500"
                  >
                    <FaTimes size={14} />
                  </button>
                </div>
              ) : (
                <span className="text-sm text-gray-600">No file chosen</span>
              )}
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
      </div>
    </div>
  );
};

export default Step1Form;
