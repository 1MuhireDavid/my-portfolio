"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = stored ? stored === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDarkMode(shouldUseDark);
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) {
    return <div className="h-9 w-16 rounded-full" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggleDarkMode}
      role="switch"
      aria-checked={isDarkMode}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="relative h-9 w-16 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-inner transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 dark:focus:ring-offset-[#121212]"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-1 h-7 w-7 rounded-full bg-white dark:bg-gradient-to-br dark:from-purple-500 dark:to-pink-600 shadow-md flex items-center justify-center"
        style={{ left: isDarkMode ? "calc(100% - 1.75rem - 0.25rem)" : "0.25rem" }}
      >
        {isDarkMode ? (
          <MoonIcon className="h-4 w-4 text-white" />
        ) : (
          <SunIcon className="h-4 w-4 text-amber-500" />
        )}
      </motion.span>
    </button>
  );
};

export default DarkModeToggle;
