"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import DarkModeToggle from "./DarkModeToggle";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Experience", path: "#experience" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#project" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.path))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 dark:bg-[#121212] bg-white/90 bg-opacity-90 shadow-lg backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href={"/"}
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          MUHIRE DAVID
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              aria-current={activeSection === link.path ? "true" : undefined}
              className={`relative text-lg font-medium transition-colors duration-300 ${
                activeSection === link.path
                  ? "text-purple-500 dark:text-purple-400"
                  : "text-gray-800 dark:text-white hover:text-pink-400"
              }`}
            >
              {link.title}
              {activeSection === link.path && (
                <motion.span
                  layoutId="navbar-active-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-600"
                />
              )}
            </Link>
          ))}
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <DarkModeToggle />
          <button
            onClick={() => setNavbarOpen((prev) => !prev)}
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
            aria-expanded={navbarOpen}
            className="dark:text-white focus:outline-none"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-white dark:bg-[#121212] shadow-lg"
          >
            <ul className="flex flex-col p-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="block py-2 text-gray-800 dark:text-white text-lg font-medium hover:text-pink-400 transition-colors duration-300"
                    onClick={() => setNavbarOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
