"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  CodeBracketIcon,
  ServerIcon,
  CircleStackIcon,
  CloudIcon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import ScrollReveal, {
  staggerContainerVariants,
  staggerItemVariants,
} from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

type SkillCategory = {
  id: string;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  skills: string[];
  highlight?: boolean;
};

const CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: CodeBracketIcon,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: ServerIcon,
    skills: ["Node.js", "Django", "Express", "REST APIs"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: CircleStackIcon,
    skills: ["PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    id: "cloud",
    title: "Cloud",
    icon: CloudIcon,
    skills: ["AWS Cloud Practitioner", "CI/CD", "Render"],
  },
  {
    id: "tools",
    title: "Tools",
    icon: WrenchScrewdriverIcon,
    skills: ["Git & GitHub", "Figma", "Expo (React Native)", "Postman"],
  },
  {
    id: "learning",
    title: "Currently Learning",
    icon: RocketLaunchIcon,
    skills: ["Spring Boot", "AWS Solutions Architecture"],
    highlight: true,
  },
];

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="py-16 px-6 bg-gray-100 dark:bg-[#121212]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <SectionHeading title="Skills & Technologies" align="center" />
          <ScrollReveal variant="fade" delay={0.15}>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-2 text-center">
              A toolkit built for shipping full-stack products end to end —
              and actively growing into backend infrastructure and the cloud.
            </p>
          </ScrollReveal>
        </div>

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainerVariants}
        >
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={staggerItemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className={`relative rounded-2xl p-6 border transition-colors duration-300 ${
                  category.highlight
                    ? "border-transparent bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/15 dark:to-pink-500/15 ring-1 ring-purple-400/40"
                    : "border-gray-200 dark:border-gray-700 bg-white dark:bg-[#181818]"
                }`}
              >
                {category.highlight && (
                  <span className="absolute -top-3 right-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-semibold px-3 py-1 shadow-md">
                    In progress
                  </span>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`h-10 w-10 flex items-center justify-center rounded-xl ${
                      category.highlight
                        ? "bg-gradient-to-br from-purple-500 to-pink-600 text-white"
                        : "bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-300"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-sm rounded-full border transition-colors duration-300 ${
                        category.highlight
                          ? "border-purple-400/40 text-purple-700 dark:text-purple-200 bg-white/60 dark:bg-white/5"
                          : "border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-300"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
