import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Search,
  Clock,
  MapPin,
  Filter,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
}

// Simulated API call
const fetchEvents = (): Promise<Event[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Startup Pitch Night",
          date: "2024-06-15",
          time: "18:00 - 21:00",
          location: "LCE Main Hall",
          description:
            "Join us for an exciting evening of innovative startup pitches!",
          category: "Networking",
        },
        {
          id: 2,
          title: "Tech Innovation Workshop",
          date: "2024-07-02",
          time: "10:00 - 16:00",
          location: "LCE Workshop Space",
          description:
            "Learn about the latest tech trends and how to apply them to your startup.",
          category: "Workshop",
        },
        {
          id: 3,
          title: "Investor Networking Mixer",
          date: "2024-07-20",
          time: "19:00 - 22:00",
          location: "LCE Rooftop Lounge",
          description:
            "Connect with potential investors and grow your network.",
          category: "Networking",
        },
        {
          id: 4,
          title: "AI in Startups Seminar",
          date: "2024-08-05",
          time: "14:00 - 17:00",
          location: "LCE Auditorium",
          description:
            "Explore how AI can revolutionize your startup and industry.",
          category: "Seminar",
        },
        {
          id: 5,
          title: "Founder's Fireside Chat",
          date: "2024-08-15",
          time: "19:00 - 21:00",
          location: "LCE Lounge",
          description:
            "An intimate discussion with successful founders about their journeys.",
          category: "Talk",
        },
        {
          id: 6,
          title: "Hackathon: Future of FinTech",
          date: "2024-09-01",
          time: "09:00 - 21:00",
          location: "LCE Innovation Lab",
          description:
            "A day-long hackathon to create innovative FinTech solutions.",
          category: "Hackathon",
        },
      ]);
    }, 1000); // Simulate network delay
  });
};

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
  >
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
        <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full">
          {event.category}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{event.description}</p>
      <div className="flex items-center text-gray-500 mb-2">
        <Calendar className="w-4 h-4 mr-2 text-indigo-600" />
        <span>{event.date}</span>
      </div>
      <div className="flex items-center text-gray-500 mb-2">
        <Clock className="w-4 h-4 mr-2 text-indigo-600" />
        <span>{event.time}</span>
      </div>
      <div className="flex items-center text-gray-500 mb-4">
        <MapPin className="w-4 h-4 mr-2 text-indigo-600" />
        <span>{event.location}</span>
      </div>
      <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300">
        Register Now
      </Button>
    </div>
  </motion.div>
);

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents().then((data) => {
      setEvents(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-20 lg:pb-32 bg-gradient-to-br from-purple-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <line
                key={i}
                x1="0"
                y1={i * 10}
                x2="100"
                y2={i * 10 + 5}
                stroke="white"
                strokeWidth="0.5"
              />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <line
                key={i + 10}
                x1={i * 10}
                y1="0"
                x2={i * 10 + 5}
                y2="100"
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
              Upcoming <span className="text-yellow-400">Events</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-3xl mx-auto">
              Join us for inspiring talks, workshops, and networking
              opportunities
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-2 text-gray-400" />
                <Input
                  className="pl-10 pr-4 py-2 rounded-full"
                  placeholder="Search events..."
                />
              </div>
              <Button className="bg-yellow-400 text-gray-800 hover:bg-yellow-300 transition-colors duration-300 rounded-full px-6 py-2">
                <Filter className="w-4 h-4 mr-2" />
                Filter Events
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-100 to-transparent"></div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Discover Our Events
        </h2>
        {loading ? (
          <div className="text-center text-2xl text-gray-600">
            Loading events...
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
        <div className="text-center mt-12">
          <Button className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 rounded-full px-8 py-3">
            View All Events
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Events;
