import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Star,
  Users,
  Zap,
  Coffee,
  Book,
  Rocket,
  Calendar,
  Globe,
  ChevronLeft,
  Clock,
  Award,
  DollarSign,
  Briefcase,
  Cpu,
  Network,
  Lightbulb,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Testimonial = ({
  text,
  author,
  role,
}: {
  text: string;
  author: string;
  role: string;
}) => (
  <Card className="bg-white shadow-lg rounded-xl p-6 mx-4 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between">
    <CardContent className="flex flex-col h-full">
      <p className="text-gray-600 mb-4 italic flex-grow">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center mt-auto">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-600 mr-4">
          {author[0]}
        </div>
        <div>
          <p className="font-semibold text-gray-800">{author}</p>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function Component() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      text: "LCE has been instrumental in turning our startup idea into a thriving business. Their mentorship and resources are unparalleled.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
    },
    {
      text: "The networking opportunities provided by LCE have opened doors we never thought possible. It's been a game-changer for our company.",
      author: "Michael Chen",
      role: "Founder, InnovateCo",
    },
    {
      text: "LCE's workshops and training sessions have equipped our team with the skills needed to compete in today's fast-paced market.",
      author: "Emily Rodriguez",
      role: "CTO, FutureTech",
    },
  ];

  return (
    <div className="h-screen font-medium text-lg">
      {/* Hero Section */}
      <section className="relative pt-52 lg:pt-60 pb-20 lg:pb-32 text-black">
        <div className="absolute lg:inset-0 lg:grid lg:grid-cols-[repeat(20,_minmax(0,_1fr))] grid-rows-[repeat(20,_minmax(0,_1fr))] opacity-50 pointer-events-none ">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-gray-200"></div>
          ))}
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex flex-col justify-center items-center h-full w-full px-4">
              <div className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl text-center w-full md:w-2/3 font-sans font-bold ">
                Transforming{" "}
                <span className="text-blue ">early-stage ideas</span> into{" "}
                <span className="text-orange-600 ">success</span>{" "}
              </div>
              <div className="mt-4 text-center font-semibold w-full sm:w-3/4 md:w-2/4 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-poppins">
                We provide comprehensive support to early-stage ideas, startups
                and entrepreneurs through our diverse and impactful ecosystem.
              </div>
              <div className="mt-4 text-center">
                <Button
                  variant="secondary"
                  className="font-poppins font-semibold  bg-black hover:bg-white hover:text-black hover:scale-110 text-white  hover:border-black hover:border-2 text-sm sm:text-base md:text-lg px-4 py-2 md:px-6 md:py-3"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-lg shadow-lg border border-orange-200"
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
                Our Mission
              </h2>
              <p className="text-gray-700 mb-8 text-xl">
                To foster innovation and entrepreneurship by providing a
                supportive ecosystem that nurtures ideas, facilitates growth,
                and transforms visionaries into successful entrepreneurs.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: <Zap size={24} />, text: "Nurture innovative ideas" },
                  {
                    icon: <Users size={24} />,
                    text: "Provide mentorship and guidance",
                  },
                  {
                    icon: <Star size={24} />,
                    text: "Facilitate access to resources",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-700 text-xl"
                  >
                    <div className="mr-4 text-orange-500">{item.icon}</div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-lg shadow-lg border border-purple-200"
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
                Our Vision
              </h2>
              <p className="text-gray-700 mb-8 text-xl">
                To be the catalyst for a thriving entrepreneurial ecosystem that
                drives economic growth, creates job opportunities, and
                positively impacts society through innovative solutions.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    icon: <Rocket size={24} />,
                    text: "Foster a culture of innovation",
                  },
                  {
                    icon: <Coffee size={24} />,
                    text: "Drive sustainable economic growth",
                  },
                  {
                    icon: <Book size={24} />,
                    text: "Create positive societal impact",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-700 text-xl"
                  >
                    <div className="mr-4 text-purple-500">{item.icon}</div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose LCE?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex justify-center items-center">
              <svg
                className="w-full h-auto max-w-md"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FF6B6B"
                  d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.4,42.2C65.4,55.2,55,66.7,42.1,74.6C29.2,82.5,14.6,86.9,-0.9,88.4C-16.4,89.9,-32.8,88.5,-46.4,81.3C-60,74.1,-70.8,61,-77.9,46.4C-85,31.8,-88.4,15.9,-87.6,0.5C-86.8,-14.9,-81.8,-29.8,-73.9,-43.2C-66,-56.6,-55.2,-68.5,-42.1,-76.3C-29,-84.1,-14.5,-87.8,0.2,-88.1C14.8,-88.5,29.6,-85.5,44.7,-76.4Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <div>
              <ul className="space-y-8">
                {[
                  {
                    icon: <Users className="text-orange-500" size={32} />,
                    title: "Expert Mentorship",
                    description:
                      "Learn from industry leaders and successful entrepreneurs",
                  },
                  {
                    icon: <Briefcase className="text-green-500" size={32} />,
                    title: "State-of-the-Art Facilities",
                    description:
                      "Access modern workspaces and cutting-edge technology",
                  },
                  {
                    icon: <Globe className="text-purple-500" size={32} />,
                    title: "Global Network",
                    description:
                      "Connect with a worldwide community of innovators",
                  },
                  {
                    icon: <Zap className="text-orange-500" size={32} />,
                    title: "Tailored Programs",
                    description:
                      "Customized support for your unique business needs",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="mr-6 p-3 bg-white rounded-full shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xl">
                        {item.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20">
            Our Services Timeline
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-300 to-purple-800"></div>
            {[
              {
                title: "Idea Validation",
                icon: <Zap size={32} />,
                description:
                  "We help you validate your idea and assess its market potential.",
              },
              {
                title: "Mentorship",
                icon: <Users size={32} />,
                description:
                  "Connect with experienced mentors who guide you through your entrepreneurial journey.",
              },
              {
                title: "Funding Support",
                icon: <DollarSign size={32} />,
                description:
                  "Access to investor networks and assistance in securing funding for your startup.",
              },
              {
                title: "Skill Development",
                icon: <Book size={32} />,
                description:
                  "Workshops and training sessions to enhance your entrepreneurial skills.",
              },
              {
                title: "Launch and Growth",
                icon: <Rocket size={32} />,
                description:
                  "Support in launching your product and scaling your business.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="relative mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full md:w-5/12"></div>
                  <div className="w-full md:w-2/12 flex justify-center mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-800 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="w-full md:w-5/12">
                    <div className="p-6 rounded shadow-lg border border-orange-200">
                      <div className="flex items-center mb-4">
                        <div className="mr-4 text-purple-500">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-xl">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "TechInnovate",
                description: "AI-powered customer service platform",
                funding: "$5M Series A",
                icon: <Zap size={32} />,
              },
              {
                name: "GreenGrow",
                description: "Sustainable urban farming solutions",
                funding: "$3M Seed Round",
                icon: <Briefcase size={32} />,
              },
              {
                name: "HealthHub",
                description: "Telemedicine app for rural areas",
                funding: "$8M Series B",
                icon: <Award size={32} />,
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-lg shadow-lg border border-orange-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3  rounded-full mr-4  ">{story.icon}</div>
                  <h3 className="text-2xl font-semibold">{story.name}</h3>
                </div>
                <p className="text-gray-600 mb-6 text-xl">
                  {story.description}
                </p>
                <p className="text-green-600 font-semibold text-xl">
                  Raised: {story.funding}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Our Clients Say
          </h2>
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-all duration-300 ease-in-out"
                animate={{ x: `-${currentTestimonial * 100}%` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Testimonial {...testimonial} />
                  </div>
                ))}
              </motion.div>
            </div>
            <button
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  prev > 0 ? prev - 1 : testimonials.length - 1
                )
              }
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-gray-600" size={24} />
            </button>
            <button
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  prev < testimonials.length - 1 ? prev + 1 : 0
                )
              }
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-gray-600" size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Startup Pitch Night",
                date: "June 15, 2024",
                time: "6:00 PM - 9:00 PM",
              },
              {
                title: "Tech Innovation Workshop",
                date: "July 2, 2024",
                time: "10:00 AM - 4:00 PM",
              },
              {
                title: "Investor Networking Mixer",
                date: "July 20, 2024",
                time: "7:00 PM - 10:00 PM",
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-orange-500" />
                  {event.date}
                </p>
                <p className="text-gray-600 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-orange-500" />
                  {event.time}
                </p>
                <Button className="mt-4 w-full bg-orange-600 text-white hover:bg-orange-700 transition-colors duration-300">
                  Register Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            Incubated Startups
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              <Cpu size={48} />,
              <Network size={48} />,
              <Lightbulb size={48} />,
              <Target size={48} />,
              <Globe size={48} />,
              <Rocket size={48} />,
              <Coffee size={48} />,
              <Book size={48} />,
            ].map((icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center p-4 bg-gray-100 rounded-lg"
              >
                <div className="text-gray-600">{icon}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            {[
              {
                question: "What types of startups does LCE support?",
                answer:
                  "LCE supports a wide range of startups across various industries, including technology, healthcare, sustainability, and more. We're particularly interested in innovative ideas that have the potential to make a significant impact.",
              },
              {
                question: "How long is the typical incubation period?",
                answer:
                  "The incubation period varies depending on the startup's needs and progress. Typically, it ranges from 6 to 18 months, but we work with each startup individually to determine the best timeline for their growth.",
              },
              {
                question: "What resources does LCE provide to startups?",
                answer:
                  "LCE provides a comprehensive suite of resources including mentorship, funding opportunities, workspace, networking events, workshops, and access to our partner network of investors and industry experts.",
              },
              {
                question: "How can I apply to join LCE?",
                answer:
                  "You can apply to join LCE through our online application process. Visit our 'Apply Now' page to submit your startup idea or business plan. We review applications on a rolling basis and will contact you for next steps.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with LCE</h2>
            <p className="mb-8">
              Subscribe to our newsletter for the latest news, events, and
              resources for entrepreneurs.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-white text-gray-800"
              />
              <Button className="bg-white text-orange-600 hover:bg-orange-100 transition-colors duration-300">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-blue text-white p-8">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="mb-6">
                  We'd love to hear from you. Fill out the form and we'll be in
                  touch as soon as possible.
                </p>
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 mr-4" />
                  <span>123 Innovation Street, Tech City, 12345</span>
                </div>
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 mr-4" />
                  <span>+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4" />
                  <span>info@lce.edu</span>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <Input id="name" className="w-full" />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Email
                    </label>
                    <Input id="email" type="email" className="w-full" />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message
                    </label>
                    <Textarea id="message" rows={4} className="w-full" />
                  </div>
                  <Button className="w-full bg-blue text-white hover:bg-orange-700 transition-colors duration-300">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">About LCE</h3>
              <p className="text-gray-400 text-lg">
                LCE is dedicated to fostering innovation and entrepreneurship,
                providing a supportive ecosystem for startups and visionaries.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {["About", "Services", "Events", "Contact"].map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center text-lg"
                    >
                      <ChevronRight className="w-5 h-5 mr-2" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
              <div className="flex space-x-6">
                {["Twitter", "LinkedIn", "Facebook", "Instagram"].map(
                  (social) => (
                    <Link
                      key={social}
                      to="#"
                      className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 rounded-full p-3"
                    >
                      <span className="sr-only">{social}</span>
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-lg">
              © 2024 LCE. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
