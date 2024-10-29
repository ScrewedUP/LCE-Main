import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Users,
  BookOpen,
  Briefcase,
  ChevronRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Program {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const programs: Program[] = [
  {
    id: 1,
    title: "Startup Incubator",
    description:
      "Turn your innovative ideas into successful businesses with our comprehensive incubation program.",
    icon: <Rocket className="w-12 h-12 text-indigo-600" />,
    features: [
      "Mentorship from industry experts",
      "Access to funding opportunities",
      "Co-working space",
      "Networking events",
    ],
  },
  {
    id: 2,
    title: "Accelerator Program",
    description:
      "Supercharge your startup's growth with our intensive accelerator program and incubation support.",
    icon: <Users className="w-12 h-12 text-green-600" />,
    features: [
      "Tailored curriculum",
      "Investor connections",
      "Product development support",
      "Market entry strategies",
    ],
  },
  {
    id: 3,
    title: "Entrepreneurship Workshops",
    description:
      "Enhance your entrepreneurial skills with our hands-on workshops and seminars.",
    icon: <BookOpen className="w-12 h-12 text-purple-600" />,
    features: [
      "Business model canvas",
      "Pitch deck creation",
      "Financial planning",
      "Marketing strategies",
    ],
  },
  {
    id: 4,
    title: "Corporate Innovation",
    description:
      "Foster innovation within your organization through our tailored corporate programs.",
    icon: <Briefcase className="w-12 h-12 text-orange-600" />,
    features: [
      "Innovation workshops",
      "Intrapreneurship training",
      "Design thinking sessions",
      "Startup collaboration opportunities",
    ],
  },
];

const ProgramCard: React.FC<{ program: Program }> = ({ program }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
  >
    <div className="p-6">
      <div className="flex items-center mb-4">
        {program.icon}
        <h3 className="text-2xl font-bold text-gray-800 ml-4">
          {program.title}
        </h3>
      </div>
      <p className="text-gray-600 mb-4">{program.description}</p>
      <ul className="space-y-2 mb-6">
        {program.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <Check className="w-5 h-5 mr-2 text-green-500" />
            {feature}
          </li>
        ))}
      </ul>
      <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300">
        Learn More
      </Button>
    </div>
  </motion.div>
);

const Programs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-20 lg:pb-32 bg-gradient-to-br from-green-600 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <circle
                key={i}
                cx={i * 25}
                cy={i * 25}
                r="10"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Our <span className="text-yellow-400">Programs</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-3xl mx-auto">
              Empowering entrepreneurs at every stage of their journey
            </p>
            <Button className="bg-white text-green-600 hover:bg-green-50 transition-colors duration-300 rounded-full px-8 py-3 text-lg font-semibold">
              Explore Programs
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-100 to-transparent"></div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Discover Our Programs
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-green-600 text-white hover:bg-green-700 transition-colors duration-300 rounded-full px-8 py-3">
            View All Programs
            <ChevronRight className="w-5  h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Programs;
