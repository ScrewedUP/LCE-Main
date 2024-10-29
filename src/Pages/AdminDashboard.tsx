import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import {
  Calendar,
  GraduationCap,
  Users,
  Building2,
  List,
  LogOut,
  PlusCircle,
  ChevronRight,
  Target,
  Clock,
  User,
  Menu,
} from "lucide-react";
import { useAuth } from "../auth/AuthProvider";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { email, logout } = useAuth();
  const [activeSection, setActiveSection] = useState("Add Events");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  const handleBackButton = () => {
    navigate("/");
  };
  const sidebarItems = [
    { title: "Add Events", icon: <Calendar className="mr-2 h-5 w-5" /> },
    { title: "Add Programs", icon: <GraduationCap className="mr-2 h-5 w-5" /> },
    { title: "Add Admin", icon: <Users className="mr-2 h-5 w-5" /> },
    { title: "Add Startup", icon: <Building2 className="mr-2 h-5 w-5" /> },
    { title: "Startup List", icon: <List className="mr-2 h-5 w-5" /> },
    { title: "Admin List", icon: <List className="mr-2 h-5 w-5" /> },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "Add Events":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-white">Events</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Event
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 text-white">
                  <DialogHeader>
                    <DialogTitle>Add New Event</DialogTitle>
                    <DialogDescription>
                      Enter the details for the new event.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="event-name">Event Name</Label>
                      <Input
                        id="event-name"
                        placeholder="Enter event name"
                        className="bg-gray-800 text-white border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="event-date">Event Date</Label>
                      <Input
                        id="event-date"
                        type="date"
                        className="bg-gray-800 text-white border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="event-description">Description</Label>
                      <Input
                        id="event-description"
                        placeholder="Enter event description"
                        className="bg-gray-800 text-white border-gray-700"
                      />
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      Add Event
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Tech Conference 2024",
                  date: "June 15, 2024",
                  description:
                    "Annual tech conference featuring industry leaders",
                },
                {
                  name: "Startup Pitch Night",
                  date: "July 2, 2024",
                  description: "Exciting pitch event for new startups",
                },
                {
                  name: "AI Workshop",
                  date: "August 10, 2024",
                  description:
                    "Hands-on workshop on the latest AI technologies",
                },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900 border-none shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    <CardHeader className="bg-purple-800 bg-opacity-50 backdrop-blur-sm">
                      <CardTitle className="flex items-center text-lg text-white">
                        <Calendar className="mr-2 h-5 w-5 text-purple-300" />
                        {event.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-300 mb-2">
                        {event.description}
                      </p>
                      <div className="flex items-center text-sm text-purple-300">
                        <Clock className="mr-1 h-4 w-4" />
                        {event.date}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case "Add Programs":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-white">Programs</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-blue hover:bg-blue text-white">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Program
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 text-white">
                  <DialogHeader>
                    <DialogTitle>Add New Program</DialogTitle>
                    <DialogDescription>
                      Enter the details for the new program.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="program-name">Program Name</Label>
                      <Input
                        id="program-name"
                        placeholder="Enter program name"
                        className="bg-gray-800 text-white border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="program-duration">Duration (weeks)</Label>
                      <Input
                        id="program-duration"
                        type="number"
                        min="1"
                        className="bg-gray-800 text-white border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="program-description">Description</Label>
                      <Input
                        id="program-description"
                        placeholder="Enter program description"
                        className="bg-gray-800 text-white border-gray-700"
                      />
                    </div>
                    <Button className="w-full bg-blue hover:bg-blue text-white">
                      Add Program
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Summer Accelerator",
                  duration: "12 weeks",
                  description: "Intensive program for early-stage startups",
                },
                {
                  name: "Founder's Bootcamp",
                  duration: "6 weeks",
                  description: "Crash course in entrepreneurship fundamentals",
                },
                {
                  name: "Tech Innovators Program",
                  duration: "8 weeks",
                  description: "Focused on cutting-edge technology projects",
                },
              ].map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden bg-gradient-to-br from-blue to-cyan-900 border-none shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    <CardHeader className="bg-blue bg-opacity-50 backdrop-blur-sm">
                      <CardTitle className="flex items-center text-lg text-white">
                        <GraduationCap className="mr-2 h-5 w-5 text-blue" />
                        {program.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-300 mb-2">
                        {program.description}
                      </p>
                      <div className="flex items-center text-sm text-white">
                        <Clock className="mr-1 h-4 w-4" />
                        Duration: {program.duration}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case "Add Admin":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-white">Admins</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Admin
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 text-white">
                  <DialogHeader>
                    <DialogTitle>Add New Admin</DialogTitle>
                    <DialogDescription>
                      Enter the details for the new admin.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-name">Admin Name</Label>
                      <Input
                        id="admin-name"
                        placeholder="Enter admin name"
                        className="bg-gray-800 text-white border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-email">Email</Label>
                      <Input
                        id="admin-email"
                        type="email"
                        placeholder="Enter admin email"
                        className="bg-gray-800 text-white border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-role">Role</Label>
                      <Input
                        id="admin-role"
                        placeholder="Enter admin role"
                        className="bg-gray-800 text-white border-gray-700"
                      />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Add Admin
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "John Doe",
                  email: "john@example.com",
                  role: "Super Admin",
                },
                {
                  name: "Jane Smith",
                  email: "jane@example.com",
                  role: "Content Manager",
                },
                {
                  name: "Alex Johnson",
                  email: "alex@example.com",
                  role: "Event Coordinator",
                },
              ].map((admin, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden bg-gradient-to-br from-green-900 to-teal-900 border-none shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    <CardHeader className="bg-green-800 bg-opacity-50 backdrop-blur-sm">
                      <CardTitle className="flex items-center text-lg text-white">
                        <User className="mr-2 h-5 w-5 text-green-300" />
                        {admin.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-300 mb-2">
                        {admin.email}
                      </p>
                      <div className="flex items-center text-sm text-green-300">
                        <Users className="mr-1 h-4 w-4" />
                        Role: {admin.role}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case "Add Startup":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-white">Startups</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Startup
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 text-white">
                  <DialogHeader>
                    <DialogTitle>Add New Startup</DialogTitle>
                    <DialogDescription>
                      Enter the details for the new startup.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="startup-name">Startup Name</Label>
                      <Input
                        id="startup-name"
                        placeholder="Enter startup name"
                        className="bg-gray-800 text-white border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="startup-industry">Industry</Label>
                      <Input
                        id="startup-industry"
                        placeholder="Enter industry"
                        className="bg-gray-800 text-white border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="startup-description">Description</Label>
                      <Input
                        id="startup-description"
                        placeholder="Enter startup description"
                        className="bg-gray-800 text-white border-gray-700"
                      />
                    </div>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                      Add Startup
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "TechInnovate",
                  industry: "AI Solutions",
                  description: "Developing cutting-edge AI technologies",
                },
                {
                  name: "GreenGrow",
                  industry: "Sustainable Agriculture",
                  description:
                    "Revolutionizing farming with eco-friendly solutions",
                },
                {
                  name: "HealthHub",
                  industry: "Healthcare Technology",
                  description: "Creating innovative health monitoring devices",
                },
              ].map((startup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden bg-gradient-to-br from-orange-900 to-red-900 border-none shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    <CardHeader className="bg-orange-800 bg-opacity-50 backdrop-blur-sm">
                      <CardTitle className="flex items-center text-lg text-white">
                        <Building2 className="mr-2 h-5 w-5 text-orange-300" />
                        {startup.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-300 mb-2">
                        {startup.description}
                      </p>
                      <div className="flex items-center text-sm text-orange-300">
                        <Target className="mr-1 h-4 w-4" />
                        Industry: {startup.industry}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="text-white">Select a section from the sidebar</div>
        );
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <AnimatePresence>
        {(isSidebarOpen || window.innerWidth >= 768) && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full md:w-64 bg-gradient-to-b from-purple-900 to-indigo-900"
          >
            <div className="p-4">
              <h2
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 cursor-pointer"
                onClick={handleBackButton}
              >
                LCE
              </h2>
            </div>
            <ScrollArea className="h-[calc(100vh-8rem)]">
              <div className="px-3 py-2">
                <nav className="space-y-1">
                  {sidebarItems.map((item, index) => (
                    <Button
                      key={index}
                      variant={
                        activeSection === item.title ? "default" : "ghost"
                      }
                      className="w-full justify-start text-white hover:text-purple-200 hover:bg-purple-800 transition-all duration-200"
                      onClick={() => {
                        setActiveSection(item.title);
                        setIsSidebarOpen(false);
                      }}
                    >
                      {item.icon}
                      {item.title}
                    </Button>
                  ))}
                </nav>
              </div>
            </ScrollArea>
            <div className="absolute bottom-4 left-4 right-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-auto px-2 justify-start text-white hover:text-purple-200 hover:bg-purple-800 transition-all duration-200"
                  >
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarFallback className="bg-purple-600 text-white">
                        {email[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-56 bg-gray-800 text-white border-gray-700"
                >
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="hover:bg-gray-700"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-gray-800 border-b border-gray-700 p-4 flex justify-between items-center">
          <Button
            variant="ghost"
            className="md:hidden text-white hover:text-purple-200"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Admin Dashboard
          </h1>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-6">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
