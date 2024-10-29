import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Startup {
  id: number;
  name: string;
  icon: string;
  description: string;
  website: string;
  category: string;
}

const startups: Startup[] = [
  {
    id: 1,
    name: "TechInnovate",
    icon: "🚀",
    description:
      "AI-powered customer service platform revolutionizing support interactions.",
    website: "https://techinnovate.com",
    category: "AI & Machine Learning",
  },
  {
    id: 2,
    name: "GreenGrow",
    icon: "🌱",
    description:
      "Sustainable urban farming solutions for a greener future and support interactions.",
    website: "https://greengrow.com",
    category: "Sustainability",
  },
  {
    id: 3,
    name: "HealthHub",
    icon: "🏥",
    description:
      "Telemedicine app connecting rural areas with quality healthcare.",
    website: "https://healthhub.com",
    category: "Healthcare",
  },
  {
    id: 4,
    name: "EduTech",
    icon: "📚",
    description:
      "Personalized learning platform using AI to adapt to student needs.",
    website: "https://edutech.com",
    category: "Education",
  },
  {
    id: 5,
    name: "FinFlow",
    icon: "💰",
    description:
      "Blockchain-based financial services for seamless transactions and a decentralized platform.",
    website: "https://finflow.com",
    category: "FinTech",
  },
  {
    id: 6,
    name: "EcoTravel",
    icon: "🌍",
    description:
      "Sustainable travel planning app for eco-conscious adventurers.",
    website: "https://ecotravel.com",
    category: "Travel & Tourism",
  },
];

const StartupCard: React.FC<{ startup: Startup; onClick: () => void }> = ({
  startup,
  onClick,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-gray-200"
    onClick={onClick}
  >
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="text-4xl mb-2">{startup.icon}</div>
        <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full">
          {startup.category}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{startup.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{startup.description}</p>
      <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300">
        Learn More
      </Button>
    </div>
  </motion.div>
);

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  startup: Startup | null;
}> = ({ isOpen, onClose, startup }) => (
  <AnimatePresence>
    {isOpen && startup && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-white rounded-lg p-8 max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">{startup.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="text-6xl mb-6">{startup.icon}</div>
          <p className="text-gray-600 mb-6">{startup.description}</p>
          <div className="mb-6">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-semibold rounded-full">
              {startup.category}
            </span>
          </div>
          <a
            href={startup.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-indigo-600 hover:underline mb-6"
          >
            Visit Website
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <Button
            className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300"
            onClick={onClose}
          >
            Close
          </Button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Portfolio: React.FC = () => {
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-20 lg:pb-32 bg-gradient-to-br from-indigo-800 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <polygon
                key={i}
                points={`${i * 10},100 ${i * 10 + 5},0 ${i * 10 + 10},100`}
                fill="white"
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
              Our <span className="text-yellow-400">Portfolio</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-3xl mx-auto">
              Discover the innovative startups shaping the future with LCE
            </p>
            <Button className="bg-white text-orange-600 hover:bg-orange-50 transition-colors duration-300 rounded-full px-8 py-3 text-lg font-semibold">
              Explore Startups
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-100 to-transparent"></div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Featured Startups
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup) => (
            <StartupCard
              key={startup.id}
              startup={startup}
              onClick={() => setSelectedStartup(startup)}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-orange-600 text-white hover:bg-orange-700 transition-colors duration-300 rounded-full px-8 py-3">
            View All Startups
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
      <Modal
        isOpen={!!selectedStartup}
        onClose={() => setSelectedStartup(null)}
        startup={selectedStartup}
      />
    </div>
  );
};

export default Portfolio;
