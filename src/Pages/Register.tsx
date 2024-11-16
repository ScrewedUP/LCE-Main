import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowLeft, Check, X } from "lucide-react";

const sectors = [
  "Agriculture",
  "Automotive",
  "Education",
  "Energy",
  "Finance",
  "Healthcare",
  "IT",
  "Manufacturing",
  "Retail",
  "Others",
];
const categories = [
  "B2B",
  "B2C",
  "B2B2C",
  "C2C",
  "D2C",
  "Hardware",
  "SaaS",
  "Marketplace",
  "Others",
];
const stages = [
  "Ideation",
  "Validation",
  "Early Traction",
  "Scaling",
  "Mature",
];
const designations = ["CEO", "CTO", "CFO", "COO", "CMO", "Other"];
const indianStates = [
  "Andhra Pradesh",
  "Karnataka",
  "Maharashtra",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
];
const citiesByState: { [key: string]: string[] } = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur"],
  Karnataka: ["Bangalore", "Mysore", "Hubli"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra"],
};

const formSchema = z.object({
  step1: z.object({
    name: z.string().min(1),
    entity_name: z.string().min(1),
    sector: z.string().min(1),
    categories: z.string().min(1),
    year: z.number().int().min(1900).max(new Date().getFullYear()),
    brand_name: z.string().optional(),
    entityRegistrationStatus: z.boolean(),
    stage: z.string().optional(),
    detailsText: z.string().optional(),
    size: z.number().int().min(1),
    incubation_status: z.boolean(),
    startupIndiaRegister: z.boolean(),
  }),
  step2: z.object({
    reg_number: z.string().min(1),
    reg_date: z.string().min(1),
    reg_certificate: z.string().min(1),
    gst: z.string().min(1),
    ipr: z.boolean(),
  }),
  step3: z.object({
    addrLine1: z.string().min(1),
    addLine2: z.string().min(1),
    state: z.string().min(1),
    city: z.string().min(1),
    district: z.string().min(1),
    pincode: z.number().int().min(100000).max(999999),
  }),
  step4: z.object({
    founderName: z.string().min(1),
    designation: z.string().min(1),
    mobile: z.string().min(10),
    address: z.string().min(1),
    equity: z.number().int().min(0).max(100),
    email: z.string().email("Invalid email address"),
    pitch_deck: z.string().min(1),
    Aadhar_Number: z.string().length(12),
    Pan_Number: z.string().length(10),
    Dipp_number: z.string().min(1),
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function Component() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [formData, setFormData] = useState<Partial<FormData>>({
    step1: {
      name: "",
      entity_name: "",
      sector: "",
      categories: "",
      year: new Date().getFullYear(),
      entityRegistrationStatus: false,
      size: 1,
      incubation_status: false,
      startupIndiaRegister: false,
      brand_name: "",
      stage: "",
      detailsText: "",
    },
    step2: {
      reg_number: "",
      reg_date: "",
      reg_certificate: "",
      gst: "",
      ipr: false,
    },
    step3: {
      addrLine1: "",
      addLine2: "",
      state: "",
      city: "",
      district: "",
      pincode: 100000,
    },
    step4: {
      founderName: "",
      designation: "",
      mobile: "",
      address: "",
      equity: 0,
      email: "",
      pitch_deck: "",
      Aadhar_Number: "",
      Pan_Number: "",
      Dipp_number: "",
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: formData,
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const flattenedData = {
        ...data.step1,
        ...data.step2,
        ...data.step3,
        ...data.step4,
        password: "tempPass",
      };

      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(flattenedData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const responseData = await response.json();
      console.log(responseData);

      setShowSuccessModal(true);
    } catch (error) {
      console.error("Registration error:", error);
      setShowFailureModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    step: keyof FormData,
    field: string,
    value: any
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: {
        ...prevData[step],
        [field]: value,
      },
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name of Startup *</Label>
                <Input
                  id="name"
                  {...register("step1.name")}
                  onChange={(e) =>
                    handleInputChange("step1", "name", e.target.value)
                  }
                  value={formData.step1?.name || ""}
                />
              </div>
              <div>
                <Label htmlFor="entity_name">Entity Name *</Label>
                <Input
                  id="entity_name"
                  {...register("step1.entity_name")}
                  onChange={(e) =>
                    handleInputChange("step1", "entity_name", e.target.value)
                  }
                  value={formData.step1?.entity_name || ""}
                />
              </div>
              <div>
                <Label htmlFor="sector">Sector *</Label>
                <Controller
                  name="step1.sector"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleInputChange("step1", "sector", value);
                      }}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Sector" />
                      </SelectTrigger>
                      <SelectContent>
                        {sectors.map((sector) => (
                          <SelectItem key={sector} value={sector}>
                            {sector}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div>
                <Label htmlFor="categories">Categories *</Label>
                <Controller
                  name="step1.categories"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleInputChange("step1", "categories", value);
                      }}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div>
                <Label htmlFor="year">Year of Establishment *</Label>
                <Input
                  id="year"
                  type="number"
                  {...register("step1.year", { valueAsNumber: true })}
                  onChange={(e) =>
                    handleInputChange("step1", "year", parseInt(e.target.value))
                  }
                  value={formData.step1?.year || ""}
                />
              </div>
              <div>
                <Label htmlFor="brand_name">Brand Name</Label>
                <Input
                  id="brand_name"
                  {...register("step1.brand_name")}
                  onChange={(e) =>
                    handleInputChange("step1", "brand_name", e.target.value)
                  }
                  value={formData.step1?.brand_name || ""}
                />
              </div>
              <div>
                <Label>Entity Registration Status</Label>
                <Controller
                  name="step1.entityRegistrationStatus"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      onValueChange={(value) => {
                        const boolValue = value === "true";
                        field.onChange(boolValue);
                        handleInputChange(
                          "step1",
                          "entityRegistrationStatus",
                          boolValue
                        );
                      }}
                      value={field.value ? "true" : "false"}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="true" id="registered" />
                        <Label htmlFor="registered">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="false" id="not-registered" />
                        <Label htmlFor="not-registered">No</Label>
                      </div>
                    </RadioGroup>
                  )}
                />
              </div>
              <div>
                <Label htmlFor="stage">Current Stage</Label>
                <Controller
                  name="step1.stage"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleInputChange("step1", "stage", value);
                      }}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Stage" />
                      </SelectTrigger>
                      <SelectContent>
                        {stages.map((stage) => (
                          <SelectItem key={stage} value={stage}>
                            {stage}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="detailsText">Details</Label>
                <Textarea
                  id="detailsText"
                  {...register("step1.detailsText")}
                  onChange={(e) =>
                    handleInputChange("step1", "detailsText", e.target.value)
                  }
                  value={formData.step1?.detailsText || ""}
                />
              </div>
              <div>
                <Label htmlFor="size">Team Size *</Label>
                <Input
                  id="size"
                  type="number"
                  {...register("step1.size", { valueAsNumber: true })}
                  onChange={(e) =>
                    handleInputChange("step1", "size", parseInt(e.target.value))
                  }
                  value={formData.step1?.size || ""}
                />
              </div>
              <div>
                <Label>Incubation Status</Label>
                <Controller
                  name="step1.incubation_status"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      onValueChange={(value) => {
                        const boolValue = value === "true";
                        field.onChange(boolValue);
                        handleInputChange(
                          "step1",
                          "incubation_status",
                          boolValue
                        );
                      }}
                      value={field.value ? "true" : "false"}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="true" id="incubated" />
                        <Label htmlFor="incubated">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="false" id="not-incubated" />
                        <Label htmlFor="not-incubated">No</Label>
                      </div>
                    </RadioGroup>
                  )}
                />
              </div>
              <div>
                <Label>Registered under Startup India Program</Label>
                <Controller
                  name="step1.startupIndiaRegister"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      onValueChange={(value) => {
                        const boolValue = value === "true";
                        field.onChange(boolValue);
                        handleInputChange(
                          "step1",
                          "startupIndiaRegister",
                          boolValue
                        );
                      }}
                      value={field.value ? "true" : "false"}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="true"
                          id="registered-startup-india"
                        />
                        <Label htmlFor="registered-startup-india">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="false"
                          id="not-registered-startup-india"
                        />
                        <Label htmlFor="not-registered-startup-india">No</Label>
                      </div>
                    </RadioGroup>
                  )}
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="reg_number">Registration Number *</Label>
                <Input
                  id="reg_number"
                  {...register("step2.reg_number")}
                  onChange={(e) =>
                    handleInputChange("step2", "reg_number", e.target.value)
                  }
                  value={formData.step2?.reg_number || ""}
                />
              </div>
              <div>
                <Label htmlFor="reg_date">Registration Date *</Label>
                <Input
                  id="reg_date"
                  type="date"
                  {...register("step2.reg_date")}
                  onChange={(e) =>
                    handleInputChange("step2", "reg_date", e.target.value)
                  }
                  value={formData.step2?.reg_date || ""}
                />
              </div>
              <div>
                <Label htmlFor="reg_certificate">
                  Registration Certificate *
                </Label>
                <Input
                  id="reg_certificate"
                  {...register("step2.reg_certificate")}
                  onChange={(e) =>
                    handleInputChange(
                      "step2",
                      "reg_certificate",
                      e.target.value
                    )
                  }
                  value={formData.step2?.reg_certificate || ""}
                />
              </div>
              <div>
                <Label htmlFor="gst">GST Number *</Label>
                <Input
                  id="gst"
                  {...register("step2.gst")}
                  onChange={(e) =>
                    handleInputChange("step2", "gst", e.target.value)
                  }
                  value={formData.step2?.gst || ""}
                />
              </div>
              <div>
                <Label>IPR Status</Label>
                <Controller
                  name="step2.ipr"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      onValueChange={(value) => {
                        const boolValue = value === "true";
                        field.onChange(boolValue);
                        handleInputChange("step2", "ipr", boolValue);
                      }}
                      value={field.value ? "true" : "false"}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="true" id="ipr-yes" />
                        <Label htmlFor="ipr-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="false" id="ipr-no" />
                        <Label htmlFor="ipr-no">No</Label>
                      </div>
                    </RadioGroup>
                  )}
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="addrLine1">Address Line 1 *</Label>
                <Input
                  id="addrLine1"
                  {...register("step3.addrLine1")}
                  onChange={(e) =>
                    handleInputChange("step3", "addrLine1", e.target.value)
                  }
                  value={formData.step3?.addrLine1 || ""}
                />
              </div>
              <div>
                <Label htmlFor="addLine2">Address Line 2 *</Label>
                <Input
                  id="addLine2"
                  {...register("step3.addLine2")}
                  onChange={(e) =>
                    handleInputChange("step3", "addLine2", e.target.value)
                  }
                  value={formData.step3?.addLine2 || ""}
                />
              </div>
              <div>
                <Label htmlFor="state">State *</Label>
                <Controller
                  name="step3.state"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleInputChange("step3", "state", value);
                        handleInputChange("step3", "city", "");
                      }}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                      <SelectContent>
                        {indianStates.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div>
                <Label htmlFor="city">City *</Label>
                <Controller
                  name="step3.city"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleInputChange("step3", "city", value);
                      }}
                      value={field.value}
                      disabled={!watch("step3.state")}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select City" />
                      </SelectTrigger>
                      <SelectContent>
                        {watch("step3.state") &&
                          citiesByState[watch("step3.state")]?.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div>
                <Label htmlFor="district">District *</Label>
                <Input
                  id="district"
                  {...register("step3.district")}
                  onChange={(e) =>
                    handleInputChange("step3", "district", e.target.value)
                  }
                  value={formData.step3?.district || ""}
                />
              </div>
              <div>
                <Label htmlFor="pincode">PIN Code *</Label>
                <Input
                  id="pincode"
                  type="number"
                  {...register("step3.pincode", { valueAsNumber: true })}
                  onChange={(e) =>
                    handleInputChange(
                      "step3",
                      "pincode",
                      parseInt(e.target.value)
                    )
                  }
                  value={formData.step3?.pincode || ""}
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="founderName">Founder Name *</Label>
                <Input
                  id="founderName"
                  {...register("step4.founderName")}
                  onChange={(e) =>
                    handleInputChange("step4", "founderName", e.target.value)
                  }
                  value={formData.step4?.founderName || ""}
                />
              </div>
              <div>
                <Label htmlFor="designation">Designation *</Label>
                <Controller
                  name="step4.designation"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleInputChange("step4", "designation", value);
                      }}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Designation" />
                      </SelectTrigger>
                      <SelectContent>
                        {designations.map((designation) => (
                          <SelectItem key={designation} value={designation}>
                            {designation}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div>
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  {...register("step4.mobile")}
                  onChange={(e) =>
                    handleInputChange("step4", "mobile", e.target.value)
                  }
                  value={formData.step4?.mobile || ""}
                />
              </div>
              <div>
                <Label htmlFor="address">Founder Address *</Label>
                <Input
                  id="address"
                  {...register("step4.address")}
                  onChange={(e) =>
                    handleInputChange("step4", "address", e.target.value)
                  }
                  value={formData.step4?.address || ""}
                />
              </div>
              <div>
                <Label htmlFor="equity">Equity (%) *</Label>
                <Input
                  id="equity"
                  type="number"
                  {...register("step4.equity", { valueAsNumber: true })}
                  onChange={(e) =>
                    handleInputChange(
                      "step4",
                      "equity",
                      parseInt(e.target.value)
                    )
                  }
                  value={formData.step4?.equity || ""}
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("step4.email")}
                  onChange={(e) =>
                    handleInputChange("step4", "email", e.target.value)
                  }
                  value={formData.step4?.email || ""}
                />
              </div>
              <div>
                <Label htmlFor="pitch_deck">Pitch Deck *</Label>
                <Input
                  id="pitch_deck"
                  {...register("step4.pitch_deck")}
                  onChange={(e) =>
                    handleInputChange("step4", "pitch_deck", e.target.value)
                  }
                  value={formData.step4?.pitch_deck || ""}
                />
              </div>
              <div>
                <Label htmlFor="Aadhar_Number">Aadhar Number *</Label>
                <Input
                  id="Aadhar_Number"
                  {...register("step4.Aadhar_Number")}
                  onChange={(e) =>
                    handleInputChange("step4", "Aadhar_Number", e.target.value)
                  }
                  value={formData.step4?.Aadhar_Number || ""}
                />
              </div>
              <div>
                <Label htmlFor="Pan_Number">PAN Number *</Label>
                <Input
                  id="Pan_Number"
                  {...register("step4.Pan_Number")}
                  onChange={(e) =>
                    handleInputChange("step4", "Pan_Number", e.target.value)
                  }
                  value={formData.step4?.Pan_Number || ""}
                />
              </div>
              <div>
                <Label htmlFor="Dipp_number">DIPP Number *</Label>
                <Input
                  id="Dipp_number"
                  {...register("step4.Dipp_number")}
                  onChange={(e) =>
                    handleInputChange("step4", "Dipp_number", e.target.value)
                  }
                  value={formData.step4?.Dipp_number || ""}
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 pt-20">
      <Card className="w-full max-w-4xl shadow-lg">
        <CardHeader className="bg-primary text-primary-foreground">
          <CardTitle className="text-center text-2xl font-bold">
            Startup Registration Form
          </CardTitle>
          <div className="flex justify-center space-x-8 mt-4">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`flex flex-col items-center ${
                  step === stepNumber
                    ? "text-white"
                    : "text-primary-foreground/60"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                    step === stepNumber
                      ? "bg-white text-primary"
                      : "bg-primary-foreground/20"
                  }`}
                >
                  {stepNumber}
                </div>
                <span className="text-sm mt-2 font-medium">
                  {stepNumber === 1
                    ? "Profile"
                    : stepNumber === 2
                    ? "Registration"
                    : stepNumber === 3
                    ? "Address"
                    : "Founder"}
                </span>
              </div>
            ))}
          </div>
        </CardHeader>
        <CardContent className="mt-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            {renderStep()}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
              )}
              {step < 4 ? (
                <Button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="ml-auto"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="ml-auto bg-green-600 hover:bg-green-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Registration Successful</DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center p-6">
            <div className="rounded-full bg-green-100 p-4">
              <Check className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <p className="text-center text-muted-foreground">
            Your startup has been successfully registered.
          </p>
        </DialogContent>
      </Dialog>

      <Dialog open={showFailureModal} onOpenChange={setShowFailureModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Registration Failed</DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center p-6">
            <div className="rounded-full bg-red-100 p-4">
              <X className="h-6 w-6 text-red-600" />
            </div>
          </div>
          <p className="text-center text-muted-foreground">
            There was an error registering your startup. Please try again.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
