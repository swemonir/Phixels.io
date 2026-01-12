import { useState, useRef, useEffect } from "react";
import { FaStar, FaFilePdf, FaTimes } from "react-icons/fa";
import { InitialFormData } from "../types";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

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

interface FileWithPreview {
  file: File;
  previewUrl: string | null;
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
  const [selectedFiles, setSelectedFiles] = useState<FileWithPreview[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles: FileWithPreview[] = Array.from(e.target.files).map(
        (file) => ({
          file,
          previewUrl: file.type.startsWith("image/")
            ? URL.createObjectURL(file)
            : null,
        })
      );

      setSelectedFiles((prev) => [...prev, ...newFiles]);

      // Update formData with all file names
      const allFileNames = [...selectedFiles, ...newFiles]
        .map((f) => f.file.name)
        .join(", ");
      setFormData({
        ...formData,
        fileName: allFileNames,
      });

      // Reset input value to allow selecting the same file again
      e.target.value = "";
    }
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);

    // Revoke the preview URL to free memory
    if (selectedFiles[index].previewUrl) {
      URL.revokeObjectURL(selectedFiles[index].previewUrl!);
    }

    setSelectedFiles(newFiles);

    // Update formData with remaining file names
    const allFileNames = newFiles.map((f) => f.file.name).join(", ");
    setFormData({
      ...formData,
      fileName: allFileNames,
    });
  };

  // Cleanup preview URLs on unmount
  useEffect(() => {
    return () => {
      selectedFiles.forEach(({ previewUrl }) => {
        if (previewUrl) URL.revokeObjectURL(previewUrl);
      });
    };
  }, [selectedFiles]);

  return (
    <div className="w-full md:h-full flex flex-col bg-transparent overflow-visible md:overflow-hidden ">
      {/* Scrollable Content */}
      <div className="w-full md:flex-1 overflow-visible md:overflow-y-auto p-2 md:p-8 custom-scrollbar ">
        <div className="border shadow-lg rounded-lg px-6 py-4 bg-white">
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

            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
              <div className="flex-1 w-full">
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

              <div className="flex-1 w-full">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="project-phone-input">
                  <PhoneInput
                    international
                    defaultCountry="BD"
                    value={formData.phone}
                    onChange={(value) =>
                      setFormData({
                        ...formData,
                        phone: value || "", // Handle undefined/null
                      })
                    }
                    className="flex-1 border border-gray-300 rounded-lg p-2.5 text-sm focus-within:ring-2 focus-within:ring-blue-400 focus-within:border-blue-400 outline-none transition-all text-black bg-gray-50"
                  />
                  <style jsx global>{`
                    .PhoneInputInput {
                      background: transparent;
                      border: none;
                      outline: none;
                      font-size: 0.875rem; /* text-sm */
                      color: inherit;
                      height: 100%;
                    }
                    .PhoneInputInput:focus {
                      box-shadow: none;
                      border: none;
                      outline: none;
                    }
                  `}</style>
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
                    className={`border px-4 py-2 rounded-full transition-colors ${formData.budget === budget
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

            <div className="w-full">
              <div className="grid grid-cols-4 gap-3 max-h-[200px] overflow-y-auto scrollbar-hidden">
                <label className="inline-flex items-center gap-2 px-4 py-1 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors text-sm font-medium shrink-0 h-[40px] justify-center">
                  <span>Add Files</span>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*,application/pdf"
                  />
                </label>

                {selectedFiles.length > 0 ? (
                  <>
                    {selectedFiles.map(({ file, previewUrl }, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg border border-gray-200 shrink-0 h-[40px]"
                      >
                        {file.type.startsWith("image/") && previewUrl ? (
                          <div className="w-6 h-6 rounded border overflow-hidden shrink-0">
                            <img
                              src={previewUrl}
                              alt="preview"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : file.type === "application/pdf" ? (
                          <div className="w-6 h-6 bg-red-50 rounded flex items-center justify-center text-red-500 shrink-0">
                            <FaFilePdf size={12} />
                          </div>
                        ) : (
                          <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center text-gray-500 shrink-0">
                            <FaStar size={12} />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-medium text-gray-700 truncate">
                            {file.name}
                          </p>
                          <p className="text-[8px] text-gray-500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(index)}
                          className="p-0.5 hover:bg-gray-200 rounded-full transition-colors text-gray-400 hover:text-red-500 shrink-0"
                        >
                          <FaTimes size={10} />
                        </button>
                      </div>
                    ))}
                  </>
                ) : (
                  <p className="text-sm text-gray-600 col-span-3 my-auto">
                    No files chosen
                  </p>
                )}
              </div>
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
