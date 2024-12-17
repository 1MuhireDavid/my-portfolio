"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useSession, signOut } from "next-auth/react";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#project" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-90 shadow-lg backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href={"/"}
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          MUHIRE DAVID
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="text-white text-lg font-medium hover:text-pink-400 transition-colors duration-300"
            >
              {link.title}
            </Link>
          ))}
          {/* Login/Logout Button */}
          {session ? (
            <button
              onClick={() => signOut()}
              className="text-white text-lg font-medium hover:text-pink-400 transition-colors duration-300"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => (window.location.href = '/login')}
              className="text-white text-lg font-medium hover:text-pink-400 transition-colors duration-300"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
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
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#121212] bg-opacity-95 flex flex-col items-center justify-center space-y-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="text-white text-2xl font-semibold hover:text-pink-400 transition-colors duration-300"
              onClick={() => setNavbarOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          {/* Login/Logout Button for Mobile */}
          {session ? (
            <button
              onClick={() => {
                signOut();
                setNavbarOpen(false);
              }}
              className="text-lg font-medium bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text hover:opacity-80"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                (window.location.href = '/login');
                setNavbarOpen(false);
              }}
              className="text-white text-2xl font-semibold hover:text-pink-400 transition-colors duration-300"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
