import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, GraduationCap, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  description,
  icon: Icon,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
  >
    <div className="flex items-center mb-6">
      <Icon className="w-10 h-10 mr-4 text-indigo-600" />
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 text-lg">{description}</p>
  </motion.div>
);

const AboutUs: React.FC = () => {
  const sections = [
    {
      title: "About Us",
      description:
        "LCE is dedicated to fostering innovation and entrepreneurship, providing a supportive ecosystem for startups and visionaries to thrive.",
      icon: Users,
    },
    {
      title: "What We Offer",
      description:
        "We offer mentorship, funding opportunities, state-of-the-art facilities, and a global network to help turn your ideas into successful businesses.",
      icon: BookOpen,
    },
    {
      title: "Alumni",
      description:
        "Our alumni network consists of successful entrepreneurs who have gone through our program and are now making waves in various industries.",
      icon: GraduationCap,
    },
    {
      title: "Team",
      description:
        "Our team of experienced mentors, industry experts, and dedicated staff work tirelessly to support and guide our entrepreneurs.",
      icon: Users2,
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-20 lg:pb-32 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-[repeat(20,_minmax(0,_1fr))] grid-rows-[repeat(10,_minmax(0,_1fr))] opacity-5 pointer-events-none">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white"></div>
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              About <span className="text-yellow-400">LCE</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-3xl mx-auto">
              Discover our mission, vision, and the team behind Launch, Create,
              Elevate
            </p>
            <Button className="bg-white text-indigo-600 hover:bg-indigo-50 transition-colors duration-300 text-lg px-8 py-3 rounded-full font-semibold">
              Learn More
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-100 to-transparent"></div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <AboutSection key={index} {...section} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <Button className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 text-lg px-8 py-3 rounded-full font-semibold">
            Join Our Community
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
