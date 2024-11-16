"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Rocket,
  Lightbulb,
  Users,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const scrollToContent = () => {
    const contentElement = document.getElementById("content");
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-500 to-purple-600">
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute left-0 top-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L100,0 L100,100 Q50,20 0,100 Z"
              fill="rgba(255,255,255,0.1)"
            />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 leading-tight">
              Launch, Create, Elevate
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl mb-12 max-w-3xl mx-auto">
              Where visionaries become leaders and ideas transform into
              world-changing realities
            </p>
            <Button
              className="bg-white text-sky-600 hover:bg-sky-100 transition-all duration-300 text-xl px-10 py-6 rounded-full font-semibold transform hover:scale-105"
              onClick={scrollToContent}
            >
              Discover Our Universe
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={scrollToContent}
        >
          <ChevronDown className="w-12 h-12 text-white" />
        </motion.div>
      </section>

      <div id="content">
        {/* About LCE Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-5xl font-bold mb-8 text-sky-600">
                  About LCE
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  Launch, Create, Elevate (LCE) is the launchpad for the next
                  generation of world-changing ideas. Founded by visionaries
                  who've walked the entrepreneurial path, we understand the
                  challenges and triumphs that define the startup journey.
                </p>
                <p className="text-xl text-gray-700 mb-6">
                  Our ecosystem is a melting pot of innovation, where
                  cutting-edge technology meets creative problem-solving. We
                  don't just nurture ideas; we catapult them into the
                  stratosphere of success.
                </p>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute -top-5 -left-5 w-full h-full bg-sky-200 rounded-lg transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="LCE Innovation Hub"
                  className="rounded-lg shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-16 text-sky-600">
              Our Launchpad to Success
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Visionary Mentorship",
                  icon: Users,
                  description:
                    "Connect with industry titans who've been in your shoes",
                },
                {
                  title: "Cosmic Funding",
                  icon: Rocket,
                  description:
                    "Access to a galaxy of investors ready to fuel your dreams",
                },
                {
                  title: "Innovation Nexus",
                  icon: Lightbulb,
                  description:
                    "State-of-the-art facilities that spark creativity and collaboration",
                },
                {
                  title: "Growth Accelerator",
                  icon: TrendingUp,
                  description:
                    "Tailored programs to skyrocket your startup's trajectory",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-xl text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni Success Stories */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-16 text-sky-600">
              Stellar Alumni Success Stories
            </h2>
            <div className="space-y-12">
              {[
                {
                  name: "NanoHealth",
                  description: "Revolutionizing healthcare with nanotechnology",
                  image:
                    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                },
                {
                  name: "GreenFuture",
                  description: "Pioneering sustainable energy solutions",
                  image:
                    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                },
                {
                  name: "CyberShield",
                  description:
                    "Next-gen cybersecurity powered by quantum computing",
                  image:
                    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                },
              ].map((alumni, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row items-center gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="md:w-1/2">
                    <img
                      src={alumni.image}
                      alt={alumni.name}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-3xl font-bold mb-4 text-gray-800">
                      {alumni.name}
                    </h3>
                    <p className="text-xl text-gray-600">
                      {alumni.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-16 text-sky-600">
              Meet Our Visionary Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Dr. Elena Quantum",
                  role: "Founder & Quantum Innovator",
                  image:
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                },
                {
                  name: "Alex Nebula",
                  role: "Chief Disruption Officer",
                  image:
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                },
                {
                  name: "Zara Stardust",
                  role: "Head of Galactic Expansion",
                  image:
                    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                },
                {
                  name: "Kai Singularity",
                  role: "AI & Robotics Maestro",
                  image:
                    "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative mb-4 inline-block">
                    <div className="absolute inset-0 bg-sky-200 rounded-full transform rotate-6 scale-105"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 object-cover rounded-full relative z-10"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-1 text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-xl text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-sky-500 to-purple-600">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-5xl font-bold mb-8">
              Ready to Launch Your Stellar Idea?
            </h2>
            <p className="text-2xl mb-12 max-w-3xl mx-auto">
              Join our constellation of innovators and turn your vision into a
              supernova of success. The universe is waiting for your
              breakthrough.
            </p>
            <Button className="bg-white text-sky-600 hover:bg-sky-100 transition-all duration-300 text-xl px-10 py-6 rounded-full font-semibold transform hover:scale-105">
              Initiate Launch Sequence
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
