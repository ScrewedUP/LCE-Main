import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

interface Event {
  id: string;
  name: string;
  date: string;
  description: string;
  posterLink: string;
}

const fetchEvents = async (): Promise<Event[]> => {
  try {
    const response = await fetch("http://localhost:8080/events/getEvents");
    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }
    const events = await response.json();
    console.log(events);
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

const EventCard: React.FC<{ event: Event; onRegister: () => void }> = ({
  event,
  onRegister,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative h-48 w-full">
        <img
          src={event.posterLink}
          alt={event.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
          {event.name}
        </h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
        <div className="flex items-center text-gray-500 mb-4">
          <Calendar className="w-4 h-4 mr-2 text-indigo-600" />
          <span className="text-sm">{formatDate(event.date)}</span>
        </div>
        <Button
          className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300"
          onClick={onRegister}
        >
          Register Now
        </Button>
      </div>
    </motion.div>
  );
};

const RegistrationModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string, email: string, number: string) => void;
}> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const isFormValid =
    name.trim() !== "" && email.trim() !== "" && number.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      onSubmit(name, email, number);
      setName("");
      setEmail("");
      setNumber("");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register for Event</DialogTitle>
          <DialogDescription>
            Please fill in your details to register for this event.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <div className="flex flex-col">
              <Label htmlFor="name" className="pb-2">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="email" className="pb-2">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="number" className="pb-2">
                Phone
              </Label>
              <Input
                id="number"
                type="tel"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={!isFormValid}>
              Register
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    fetchEvents().then((data) => {
      setEvents(data);
      setFilteredEvents(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const filtered = events.filter(
      (event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [searchTerm, events]);

  const handleRegister = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleRegistrationSubmit = async (
    name: string,
    email: string,
    number: string
  ) => {
    try {
      const response = await fetch(
        "http://localhost:8080/registrations/registerEvent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            eventId: selectedEvent?.id,
            name,
            email,
            number,
          }),
        }
      );

      if (response.ok) {
        toast({
          title: "Registration Successful",
          description: "You have successfully registered for the event.",
          duration: 5000,
        });
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Error registering for event:", error);
      toast({
        title: "Registration Failed",
        description:
          "There was an error registering for the event. Please try again.",
        duration: 5000,
        variant: "destructive",
      });
    }

    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Simplified Hero Section */}
      <section className="py-12 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            Upcoming Events
          </h1>
          <p className="text-xl mb-8 text-center max-w-2xl mx-auto">
            Join us for inspiring talks, workshops, and networking opportunities
          </p>
          <div className="flex justify-center items-center space-x-4">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-10 pr-4 py-2 rounded-full w-full text-black"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button className="bg-white text-indigo-600 hover:bg-indigo-100 transition-colors duration-300 rounded-full px-6 py-2">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {loading ? (
          <div className="text-center text-2xl text-gray-600">
            Loading events...
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <EventCard
                    event={event}
                    onRegister={() => handleRegister(event)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleRegistrationSubmit}
      />
    </div>
  );
};

export default Events;
