import * as React from "react";
import { format } from "date-fns";
import {
  BarChart3,
  Building2,
  Calendar,
  ChevronLeft,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  MoreVertical,
  Pencil,
  Plus,
  Trash2,
  Users,
  Menu,
  X,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/auth/AuthProvider";
import { useNavigate } from "react-router-dom";

type Event = {
  id: string;
  name: string;
  posterLink: string;
  date: string;
  description: string;
};

type Registration = {
  id: number;
  eventId: string;
  name: string;
  number: string;
  email: string;
};

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = React.useState("events");
  const [selectedEvent, setSelectedEvent] = React.useState<Event | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [events, setEvents] = React.useState<Event[]>([]);
  const [registrations, setRegistrations] = React.useState<Registration[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:8080/events/getEvents");
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
      setError("Failed to fetch events. Please try again later.");
    }
  };

  const fetchRegistrations = async (eventId: string) => {
    setIsLoading(true);
    setError(null);
    try {
      console.log("Fetching registrations for event:", eventId);
      const response = await fetch(
        `http://localhost:8080/registrations/getRegistrations/${eventId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch registrations");
      }
      const data = await response.json();
      console.log("Fetched registrations:", data);
      setRegistrations(data);
    } catch (error) {
      console.error("Error fetching registrations:", error);
      setError("Failed to fetch registrations. Please try again later.");
      setRegistrations([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowRegistrations = (event: Event) => {
    console.log("Showing registrations for event:", event.id);
    setSelectedEvent(event);
    fetchRegistrations(event.id);
  };

  const handleAddEvent = async (eventData: Omit<Event, "id">) => {
    try {
      const response = await fetch("http://localhost:8080/events/addEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });
      if (!response.ok) {
        throw new Error("Failed to add event");
      }
      fetchEvents(); // Refresh the events list
    } catch (error) {
      console.error("Error adding event:", error);
      setError("Failed to add event. Please try again later.");
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      <AppSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className="flex-1 lg:ml-64">
        <header className="sticky top-0 z-10 flex items-center justify-between bg-white p-4 shadow-sm lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </header>
        <main className="p-4 lg:p-8 overflow-y-auto">
          {activeSection === "events" && !selectedEvent && (
            <EventsView
              events={events}
              onShowRegistrations={handleShowRegistrations}
              onAddEvent={handleAddEvent}
            />
          )}
          {activeSection === "events" && selectedEvent && (
            <RegistrationsView
              event={selectedEvent}
              registrations={registrations}
              isLoading={isLoading}
              error={error}
              onBack={() => {
                setSelectedEvent(null);
                setRegistrations([]);
                setError(null);
              }}
            />
          )}
        </main>
      </div>
    </div>
  );
}

function AppSidebar({
  activeSection,
  onSectionChange,
  isOpen,
  onToggle,
}: {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { email, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600 text-white">
                <LayoutDashboard className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">LCE</h2>
                <p className="text-sm text-gray-500">Admin Dashboard</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={onToggle}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="space-y-6">
            <Button
              variant={activeSection === "events" ? "default" : "ghost"}
              className="w-full justify-start text-lg"
              onClick={() => onSectionChange("events")}
            >
              <Calendar className="mr-3 h-5 w-5" />
              Events
            </Button>
            <Button
              variant={activeSection === "programs" ? "default" : "ghost"}
              className="w-full justify-start text-lg"
              onClick={() => onSectionChange("programs")}
            >
              <GraduationCap className="mr-3 h-5 w-5" />
              Programs
            </Button>
            <Button
              variant={activeSection === "admins" ? "default" : "ghost"}
              className="w-full justify-start text-lg"
              onClick={() => onSectionChange("admins")}
            >
              <Users className="mr-3 h-5 w-5" />
              Admins
            </Button>
            <Button
              variant={activeSection === "startups" ? "default" : "ghost"}
              className="w-full justify-start text-lg"
              onClick={() => onSectionChange("startups")}
            >
              <Building2 className="mr-3 h-5 w-5" />
              Startups
            </Button>
            <Button
              variant={activeSection === "analytics" ? "default" : "ghost"}
              className="w-full justify-start text-lg"
              onClick={() => onSectionChange("analytics")}
            >
              <BarChart3 className="mr-3 h-5 w-5" />
              Analytics
            </Button>
          </nav>
        </div>
        <div className="p-6 border-t">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start">
                <Avatar className="h-8 w-8 mr-3">
                  <AvatarFallback>{email[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-semibold">{email}</span>
                  <span className="text-xs text-gray-500">Admin</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </aside>
  );
}

function EventsView({
  events,
  onShowRegistrations,
  onAddEvent,
}: {
  events: Event[];
  onShowRegistrations: (event: Event) => void;
  onAddEvent: (eventData: Omit<Event, "id">) => void;
}) {
  const [newEvent, setNewEvent] = React.useState({
    name: "",
    date: "",
    description: "",
    posterLink: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddEvent(newEvent);
    // Reset form
    setNewEvent({ name: "", date: "", description: "", posterLink: "" });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Events</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-4 sm:mt-0">
              <Plus className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Event</DialogTitle>
              <DialogDescription>
                Create a new event by filling out the form below.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Event Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={newEvent.name}
                  onChange={handleInputChange}
                  placeholder="Enter event name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Event Date</Label>
                <Input
                  id="date"
                  name="date"
                  type="datetime-local"
                  value={newEvent.date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={newEvent.description}
                  onChange={handleInputChange}
                  placeholder="Enter event description"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="posterLink">Poster Link</Label>
                <Input
                  id="posterLink"
                  name="posterLink"
                  value={newEvent.posterLink}
                  onChange={handleInputChange}
                  placeholder="Enter poster link"
                />
              </div>
              <Button type="submit" className="w-full">
                Create Event
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader className="p-0">
              <div className="relative aspect-video">
                <img
                  alt={event.name}
                  className="object-cover rounded-t-lg "
                  height={225}
                  src={event.posterLink}
                  style={{
                    aspectRatio: "400/225",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      className="absolute right-2 top-2"
                      size="icon"
                      variant="secondary"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Pencil className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl mb-2 font-poppins">
                {event.name}
              </CardTitle>
              <time className="text-sm text-gray-500 mb-2 block font-workSans">
                {format(new Date(event.date), "PPP")}
              </time>
              <p className="text-sm text-gray-600 font-workSans">
                {event.description}
              </p>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant="outline"
                onClick={() => onShowRegistrations(event)}
              >
                Show Registrations
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

function RegistrationsView({
  event,
  registrations,
  isLoading,
  error,
  onBack,
}: {
  event: Event;
  registrations: Registration[];
  isLoading: boolean;
  error: string | null;
  onBack: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            {event.name} - Registrations
          </h2>
          <p className="text-gray-500 mt-1">
            {format(new Date(event.date), "PPP")}
          </p>
        </div>
        <Button variant="outline" onClick={onBack} className="mt-4 sm:mt-0">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Button>
      </div>
      <Card>
        {isLoading ? (
          <div className="p-4 text-center">Loading registrations...</div>
        ) : error ? (
          <div className="p-4 text-center text-red-500">{error}</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {registrations && registrations.length > 0 ? (
                registrations.map((registration) => (
                  <TableRow key={registration.id}>
                    <TableCell>{registration.name}</TableCell>
                    <TableCell>{registration.email}</TableCell>
                    <TableCell>{registration.number}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Remove Registration
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    No registrations found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </Card>
    </div>
  );
}
