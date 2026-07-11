"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Java Backend Apprentice",
    org: "AmaliTech Rwanda",
    period: "March 2026 — Present",
    bullets: [
      "Specializing in Java backend development with Spring Boot as part of AmaliTech's software engineering apprenticeship program.",
      "Building toward AWS Cloud certification alongside hands-on backend training.",
      "Applying existing full-stack experience (React, Next.js, Node.js) to backend-focused coursework and projects.",
    ],
  },
];

const Experience = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-16 px-6 bg-white dark:bg-[#181818]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <SectionHeading title="Experience" align="center" />
          <ScrollReveal variant="fade" delay={0.15}>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-2 text-center">
              Where I&apos;m applying and growing my skills right now.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative pl-10">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-400 via-pink-500 to-transparent" />

          {EXPERIENCE.map((entry, index) => (
            <ScrollReveal
              key={entry.role}
              variant="up"
              delay={index * 0.1}
              className="relative mb-8 last:mb-0"
            >
              <span className="absolute -left-10 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-md ring-4 ring-white dark:ring-[#181818]">
                <BriefcaseIcon className="h-4 w-4" />
              </span>

              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                className="rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-[#121212] p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold dark:text-white">
                    {entry.role} · {entry.org}
                  </h3>
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    {entry.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm md:text-base text-gray-600 dark:text-gray-400 list-disc pl-4">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
