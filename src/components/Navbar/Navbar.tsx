import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Calendar, Users, BookOpen, Mail, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      title: "About",
      href: "/aboutus",
      icon: <Users className="w-5 h-5 mr-2" />,
      items: [
        {
          title: "About Us",
          href: "/aboutus",
          icon: <Home className="w-4 h-4 mr-2" />,
        },
        {
          title: "What do we offer",
          href: "/offer",
          icon: <BookOpen className="w-4 h-4 mr-2" />,
        },
        {
          title: "Alumni",
          href: "/alumni",
          icon: <Users className="w-4 h-4 mr-2" />,
        },
        {
          title: "Team",
          href: "/team",
          icon: <Users className="w-4 h-4 mr-2" />,
        },
      ],
    },
    {
      title: "Events",
      href: "/events",
      icon: <Calendar className="w-5 h-5 mr-2" />,
      items: [
        {
          title: "Upcoming",
          href: "/events/upcoming",
          icon: <Calendar className="w-4 h-4 mr-2" />,
        },
        {
          title: "Past Events",
          href: "/events/past",
          icon: <Calendar className="w-4 h-4 mr-2" />,
        },
        {
          title: "Workshops",
          href: "/events/workshops",
          icon: <Users className="w-4 h-4 mr-2" />,
        },
      ],
    },
    {
      title: "Programs",
      href: "/programs",
      icon: <Users className="w-5 h-5 mr-2" />,
    },
    {
      title: "Portfolio",
      href: "/portfolio",
      icon: <BookOpen className="w-5 h-5 mr-2" />,
    },

    {
      title: "Community",
      href: "/community",
      icon: <Mail className="w-5 h-5 mr-2" />,
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-15 w-auto" src="/LCE.svg" alt="LCE Logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <Link
                          to={item.href || "/"}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <NavigationMenuTrigger className="text-gray-800">
                            <span className="flex items-center">
                              {item.icon}
                              {item.title}
                            </span>
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                              {item.items.map((subItem) => (
                                <li key={subItem.title}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      to={subItem.href || "/"}
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                      <div className="flex items-center text-sm font-medium leading-none">
                                        {subItem.icon}
                                        <span>{subItem.title}</span>
                                      </div>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </Link>
                      </>
                    ) : (
                      <Link to={item.href || "/"}>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          <span className="flex items-center text-gray-800">
                            {item.icon}
                            {item.title}
                          </span>
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-800 hover:text-cyan">
              Login
            </Button>
            <Button
              className=" text-white hover:bg-cyan-700 transition-all duration-300"
              variant="default"
            >
              Apply Now
            </Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-cyan hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <motion.div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          {navItems.map((item) => (
            <div key={item.title}>
              <Link
                to={item.href || "/"}
                className="text-gray-700 hover:text-cyan block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
              {item.items && (
                <div className="pl-4">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.title}
                      to={subItem.href || "/"}
                      className="text-gray-600 hover:text-cyan block px-3 py-2 rounded-md text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-5">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-cyan mr-2 w-full justify-start"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Button>
          </div>
          <div className="mt-3 px-2">
            <Button
              className="bg-cyan-600 text-white hover:bg-cyan-700 transition-colors duration-300 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
