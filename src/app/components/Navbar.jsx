"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useSession, signOut } from "next-auth/react";
import DarkModeToggle from "./DarkModeToggle"; // Import the toggle component

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#project" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 dark:bg-[#121212] bg-opacity-90 shadow-lg backdrop-blur-md">
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
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="dark:text-white text-lg font-medium hover:text-pink-400 transition-colors duration-300"
            >
              {link.title}
            </Link>
          ))}
          {/* Login/Logout Button */}
          {session ? (
            <button
              onClick={() => signOut()}
              className="dark:text-white text-lg font-medium hover:text-pink-400 transition-colors duration-300"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => (window.location.href = "/login")}
              className="dark:text-white text-lg font-medium hover:text-pink-400 transition-colors duration-300"
            >
              Login
            </button>
          )}
          {/* Dark Mode Toggle */}
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-white focus:outline-none"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>

          {/* Mobile Menu Dropdown */}
          {navbarOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-[#121212] rounded-md shadow-lg">
              <ul className="flex flex-col space-y-2 p-4">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      className="block text-white text-lg font-medium hover:text-pink-400 transition-colors duration-300"
                      onClick={() => setNavbarOpen(false)}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
                <li>
                  {/* Login/Logout Button for Mobile */}
                  {session ? (
                    <button
                      onClick={() => {
                        signOut();
                        setNavbarOpen(false);
                      }}
                      className="w-full text-left text-white text-lg font-medium hover:text-pink-400 transition-colors duration-300"
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        (window.location.href = "/login");
                        setNavbarOpen(false);
                      }}
                      className="w-full text-left text-white text-lg font-medium hover:text-pink-400 transition-colors duration-300"
                    >
                      Login
                    </button>
                  )}
                </li>
                {/* Dark Mode Toggle for Mobile */}
                <li>
                  <DarkModeToggle />
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
