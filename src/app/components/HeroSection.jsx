"use client";
import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Hero3D from "./Hero3D";

const TECH_STACK = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Spring Boot",
  "AWS Cloud",
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/1MuhireDavid",
    path: "M12 .5C5.73.5.5 5.73.5 12c0 5.07 3.29 9.36 7.86 10.86.57.1.78-.25.78-.55v-2.08c-3.2.7-3.87-1.53-3.87-1.53-.52-1.32-1.27-1.67-1.27-1.67-1.03-.7.08-.68.08-.68 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.63 1.23 3.28.94.1-.73.4-1.23.72-1.51-2.55-.3-5.22-1.28-5.22-5.68 0-1.26.45-2.3 1.18-3.11-.12-.29-.52-1.48.11-3.08 0 0 .97-.31 3.18 1.19.92-.26 1.92-.39 2.91-.39s1.99.13 2.91.39c2.21-1.5 3.18-1.19 3.18-1.19.63 1.6.23 2.79.11 3.08.73.81 1.18 1.85 1.18 3.11 0 4.41-2.68 5.37-5.23 5.67.41.36.77 1.07.77 2.15v3.18c0 .3.21.65.79.55A10.5 10.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhire-david-648939379",
    path: "M22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.24.79 24 1.77 24h20.46c.98 0 1.77-.76 1.77-1.73V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9.03h3.56v11.42zM5.34 7.55c-1.14 0-1.88-.78-1.88-1.75 0-.98.75-1.75 1.9-1.75s1.87.76 1.87 1.75c0 .97-.73 1.75-1.88 1.75zm15.11 12.91h-3.56v-5.83c0-1.46-.54-2.45-1.88-2.45-1.03 0-1.64.7-1.91 1.38-.1.25-.13.6-.13.95v5.95H9.41s.05-9.66 0-10.66h3.56v1.51c.47-.73 1.32-1.78 3.22-1.78 2.35 0 4.11 1.54 4.11 4.87v6.06z",
  },
];

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden dark:bg-gradient-to-b from-gray-900 to-black dark:from-gray-800 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:from-purple-700 dark:via-pink-700 dark:to-red-700 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-gradient-to-br from-indigo-500 to-blue-500 dark:from-indigo-700 dark:to-blue-700 rounded-full blur-3xl opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-6 px-6 lg:px-16 py-16">
        {/* Text Content */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700">
              Hello, I&apos;m {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "David Muhire",
                1000,
                "a Full Stack Developer",
                1000,
                "a Cloud Enthusiast",
                1000,
                "a UI/UX-Minded Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-slate-700 dark:text-gray-100"
            />
          </h1>
          <TextGenerateEffect
            duration={2}
            filter={false}
            words={`I build fast, scalable web and mobile applications with React, Next.js, and Node.js.
              Right now I'm deepening my backend range with Spring Boot and building toward AWS Cloud —
              so the systems I ship hold up as well in production as they do in a demo.`}
            className="mt-4 dark:text-gray-300"
          />

          {/* Tech stack strip */}
          <motion.ul
            initial={shouldReduceMotion ? false : "hidden"}
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06, delayChildren: 0.6 } },
            }}
            className="mt-6 flex flex-wrap gap-2 justify-center sm:justify-start"
            aria-label="Core technologies"
          >
            {TECH_STACK.map((tech) => (
              <motion.li
                key={tech}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full border border-purple-400/30 bg-white/5 backdrop-blur-sm text-slate-700 dark:text-gray-200 hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors duration-300"
              >
                {tech}
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
            <Link href="#contact">
              <ButtonsCard>Hire Me</ButtonsCard>
            </Link>
            <a href="/david cv.pdf" download>
              <ButtonsCard>Download CV</ButtonsCard>
            </a>
          </div>

          {/* Social links */}
          <div className="mt-6 flex gap-3 justify-center sm:justify-start">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full border border-white/10 text-slate-600 dark:text-gray-300 hover:text-white hover:bg-purple-500 hover:border-purple-500 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </motion.div>

        {/* 3D Content */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="place-items-center col-span-4 mt-8 lg:mt-0"
        >
          <div className="relative w-[250px] h-[300px] lg:w-[400px] lg:h-[400px] ml-12 lg:ml-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 dark:from-purple-600 dark:via-pink-600 dark:to-red-600 rounded-full shadow-2xl opacity-40 blur-2xl" />
            <Hero3D />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-2 text-slate-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.span
            animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-current p-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
          </motion.span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
