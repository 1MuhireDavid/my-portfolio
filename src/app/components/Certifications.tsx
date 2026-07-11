"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AcademicCapIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import ScrollReveal, {
  staggerContainerVariants,
  staggerItemVariants,
} from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const CERTIFICATIONS = [
  {
    title: "BSc (Hons) Computer Engineering — Software Engineering",
    year: "2025",
  },
  { title: "Backend Development and APIs", year: "2024" },
  { title: "Junior Software Development Program", year: "2023" },
  { title: "Introduction to Networks", year: "2022" },
  { title: "IT Essentials", year: "2021" },
];

const Certifications = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="certifications"
      className="py-16 px-6 bg-white dark:bg-[#181818]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <SectionHeading title="Certifications" align="center" />
          <ScrollReveal variant="fade" delay={0.15}>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-2 text-center">
              Formal training and credentials that back up the hands-on work.
            </p>
          </ScrollReveal>
        </div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainerVariants}
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.title}
              variants={staggerItemVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              className="flex items-start gap-4 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-[#121212] p-5 transition-colors duration-300 hover:border-purple-400 dark:hover:border-purple-500/50"
            >
              <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-300">
                <AcademicCapIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium dark:text-white leading-snug">
                  {cert.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  {cert.year}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Placeholder for upcoming AWS certification */}
          <motion.div
            variants={staggerItemVariants}
            className="flex items-start gap-4 rounded-xl border-2 border-dashed border-purple-300 dark:border-purple-500/30 p-5"
          >
            <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-purple-50 dark:bg-purple-500/5 text-purple-400">
              <PlusCircleIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium text-gray-500 dark:text-gray-400 leading-snug">
                AWS Certified Cloud Practitioner
              </p>
              <p className="text-sm text-purple-500 dark:text-purple-400 mt-1">
                In progress
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
