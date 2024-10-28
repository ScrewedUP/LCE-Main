import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Upload } from "lucide-react";

type FormData = {
  startupName: string;
  industry: string;
  sector: string;
  categories: string;
  natureOfEntity: string;
  brandName: string;
  entityRegistrationStatus: string;
  innovationModel: string;
  teamSize: string;
  incubationStatus: string;
  currentStage: string;
  fundingStatus: string;
  startupIndiaRegistration: string;
  businessDescription: string;
  incorporationNumber: string;
  incorporationDate: string;
  incorporationCertificate: File | null;
  tanGst: string;
  iprApplication: string;
  addressLine1: string;
  addressLine2: string;
  state: string;
  city: string;
  district: string;
  pinCode: string;
  founderName: string;
  designation: string;
  mobileNumber: string;
  founderAddress: string;
  panNumber: string;
  aadharNumber: string;
  dippNumber: string;
  equity: number | null;
  publishProfile: string;
  pitchDeck: File | null;
  logo: File | null;
  termsAccepted: boolean;
};

const initialFormData: FormData = {
  startupName: "",
  industry: "",
  sector: "",
  categories: "",
  natureOfEntity: "",
  brandName: "",
  entityRegistrationStatus: "",
  innovationModel: "",
  teamSize: "",
  incubationStatus: "",
  currentStage: "",
  fundingStatus: "",
  startupIndiaRegistration: "",
  businessDescription: "",
  incorporationNumber: "",
  incorporationDate: "",
  incorporationCertificate: null,
  tanGst: "",
  iprApplication: "",
  addressLine1: "",
  addressLine2: "",
  state: "",
  city: "",
  district: "",
  pinCode: "",
  founderName: "",
  designation: "",
  mobileNumber: "",
  founderAddress: "",
  panNumber: "",
  aadharNumber: "",
  dippNumber: "",
  equity: null,
  publishProfile: "",
  pitchDeck: null,
  logo: null,
  termsAccepted: false,
};

export default function Component() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };

  const handleMultiSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, options } = e.target;
    const selectedValues = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setFormData((prev) => ({
      ...prev,
      [name]: selectedValues,
    }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  const InputField = ({
    label,
    name,
    type = "text",
    required = false,
    ...props
  }: {
    label: string;
    name: string;
    type?: string;
    required?: boolean;
    [key: string]: any;
  }) => (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
        {required && " *"}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name as keyof FormData] as string}
        onChange={handleInputChange}
        required={required}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        {...props}
      />
    </div>
  );

  const SelectField = ({
    label,
    name,
    options,
    required = false,
  }: {
    label: string;
    name: string;
    options: string[];
    required?: boolean;
  }) => (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
        {required && " *"}
      </label>
      <select
        id={name}
        name={name}
        value={formData[name as keyof FormData] as string}
        onChange={handleInputChange}
        required={required}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  const RadioField = ({
    label,
    name,
    options,
    required = false,
  }: {
    label: string;
    name: string;
    options: string[];
    required?: boolean;
  }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && " *"}
      </label>
      <div className="flex space-x-4">
        {options.map((option) => (
          <label key={option} className="inline-flex items-center">
            <input
              type="radio"
              name={name}
              value={option}
              checked={formData[name as keyof FormData] === option}
              onChange={handleInputChange}
              required={required}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-sm">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const FileUploadField = ({
    label,
    name,
    accept,
    required = false,
  }: {
    label: string;
    name: string;
    accept: string;
    required?: boolean;
  }) => (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
        {required && " *"}
      </label>
      <div className="flex items-center">
        <input
          type="file"
          id={name}
          name={name}
          onChange={handleFileChange}
          accept={accept}
          required={required}
          className="sr-only"
        />
        <label
          htmlFor={name}
          className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Upload className="h-5 w-5 inline-block mr-2" />
          Upload File
        </label>
        <span className="ml-3 text-sm text-gray-500">
          {formData[name as keyof FormData]
            ? (formData[name as keyof FormData] as File).name
            : "No file chosen"}
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Registration Form
        </h1>
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {[1, 2, 3, 4].map((step, index) => (
              <React.Fragment key={step}>
                <div
                  className={`w-full sm:w-1/4 text-center mb-4 sm:mb-0 ${
                    currentStep >= step ? "text-indigo-600" : "text-gray-400"
                  } ${step !== currentStep ? "hidden sm:block" : ""}`}
                >
                  <div
                    className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${
                      currentStep >= step
                        ? "border-indigo-600 bg-indigo-600 text-white"
                        : "border-gray-400"
                    }`}
                  >
                    {step}
                  </div>
                  <div className="mt-2 text-sm">
                    {step === 1 && "Profile"}
                    {step === 2 && "Registration"}
                    {step === 3 && "Address"}
                    {step === 4 && "Founder"}
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden sm:block w-full sm:w-auto border-t-2 border-gray-300 flex-grow mx-4" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Name of Startup" name="startupName" required />
              <SelectField
                label="Industry"
                name="industry"
                options={[
                  "Technology",
                  "Finance",
                  "Healthcare",
                  "Education",
                  "E-commerce",
                ]}
                required
              />
              <SelectField
                label="Sector"
                name="sector"
                options={[
                  "Artificial Intelligence",
                  "Blockchain",
                  "Internet of Things",
                  "SaaS",
                  "Fintech",
                ]}
                required
              />
              <SelectField
                label="Categories"
                name="categories"
                options={["B2B", "B2C", "D2C", "Hardware", "Software"]}
                required
              />
              <SelectField
                label="Nature of Entity"
                name="natureOfEntity"
                options={[
                  "Private Limited Company",
                  "Limited Liability Partnership",
                  "Partnership Firm",
                  "Sole Proprietorship",
                ]}
                required
              />
              <InputField label="Brand Name" name="brandName" />
              <RadioField
                label="Entity Registration Status"
                name="entityRegistrationStatus"
                options={["Yes", "No"]}
                required
              />
              <SelectField
                label="Innovation Model"
                name="innovationModel"
                options={[
                  "Product Innovation",
                  "Process Innovation",
                  "Business Model Innovation",
                  "Social Innovation",
                ]}
              />
              <SelectField
                label="Team Size"
                name="teamSize"
                options={["1-5", "6-15", "16-25", "26-50", "51+"]}
                required
              />
              <RadioField
                label="Incubation Status"
                name="incubationStatus"
                options={["Yes", "No"]}
                required
              />
              <SelectField
                label="Current Stage"
                name="currentStage"
                options={[
                  "Ideation",
                  "Validation",
                  "Early Traction",
                  "Scaling",
                ]}
                required
              />
              <RadioField
                label="Funding/Grants received"
                name="fundingStatus"
                options={["Yes", "No"]}
              />
              <RadioField
                label="Registered under Startup India program"
                name="startupIndiaRegistration"
                options={["Yes", "No"]}
                required
              />
              <div className="col-span-2">
                <label
                  htmlFor="businessDescription"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tell us something about your business
                </label>
                <textarea
                  id="businessDescription"
                  name="businessDescription"
                  value={formData.businessDescription}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Incorporation/Registration Number"
                name="incorporationNumber"
                required
              />
              <InputField
                label="Incorporation/Registration Date"
                name="incorporationDate"
                type="date"
                required
              />
              <FileUploadField
                label="Incorporation/Registration Certificate"
                name="incorporationCertificate"
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
              <InputField label="TAN/GST" name="tanGst" />
              <RadioField
                label="Have your startup applied for any IPR"
                name="iprApplication"
                options={["Yes", "No"]}
                required
              />
            </div>
          )}
          {currentStep === 3 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Address Line 1" name="addressLine1" required />
              <InputField label="Address Line 2" name="addressLine2" required />
              <SelectField
                label="State"
                name="state"
                options={["Maharashtra", "Karnataka", "Delhi"]}
                required
              />
              <SelectField
                label="City"
                name="city"
                options={["Mumbai", "Bangalore", "Delhi"]}
                required
              />
              <InputField label="District" name="district" />
              <InputField
                label="PIN Code"
                name="pinCode"
                required
                pattern="[0-9]{6}"
              />
            </div>
          )}
          {currentStep === 4 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Name" name="founderName" required />
              <SelectField
                label="Designation"
                name="designation"
                options={["Founder", "Co-Founder", "Director", "Partner"]}
                required
              />
              <InputField
                label="Mobile No."
                name="mobileNumber"
                type="tel"
                required
                pattern="[0-9]{10}"
              />
              <InputField label="Address" name="founderAddress" required />
              <InputField
                label="PAN Number"
                name="panNumber"
                pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
              />
              <InputField
                label="Aadhar Number"
                name="aadharNumber"
                pattern="[0-9]{12}"
              />
              <InputField label="DIPP Number" name="dippNumber" required />
              <InputField
                label="Equity (%)"
                name="equity"
                type="number"
                min="0"
                max="100"
              />
              <RadioField
                label="Publish Your Profile For Showcase"
                name="publishProfile"
                options={["Yes", "No"]}
              />
              <FileUploadField
                label="Pitch Deck"
                name="pitchDeck"
                accept=".pdf,.ppt,.pptx"
                required
              />
              <FileUploadField
                label="Your Logo"
                name="logo"
                accept=".jpg,.jpeg,.png"
                required
              />
              <div className="col-span-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    required
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    I accept the Terms & Conditions
                  </span>
                </label>
              </div>
              <p className="col-span-2 text-sm text-gray-500">
                Please Note: The Certificate of Recognition for Startup will be
                issued after verification of the application and documents
                submitted and final approval granted by the Govt of Raj.
              </p>
            </div>
          )}
          <div className="mt-8 flex justify-between">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 flex items-center"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Previous
              </button>
            )}
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center ml-auto"
              >
                Next
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 ml-auto"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
