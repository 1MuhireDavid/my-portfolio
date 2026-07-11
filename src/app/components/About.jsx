"use client";
import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const QUICK_FACTS = [
  { label: "Role", value: "Full-Stack Developer" },
  { label: "Core Stack", value: "React · Next.js · Node.js" },
  { label: "Currently Learning", value: "Spring Boot · AWS Cloud" },
];

const EDUCATION = [
  { school: "University of Rwanda", detail: "BSc (Hons) Computer Engineering — Software Engineering, 2025" },
  { school: "FreeCodeCamp", detail: "Backend Development and APIs" },
  { school: "BAG Rwanda", detail: "Junior Software Development Program" },
];

const About = () => {
  return (
    <section className="dark:text-white dark:bg-[#121212]" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-12 px-6 xl:gap-16 sm:py-20 xl:px-20">
        {/* Image Section */}
        <ScrollReveal variant="left" className="relative flex justify-center md:justify-start">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* Decorative glow ring */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 opacity-30 blur-2xl" />
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl ring-1 ring-purple-500/20">
              <Image
                src="/images/profile.png"
                alt="Portrait of David Muhire"
                fill
                sizes="(max-width: 640px) 16rem, 20rem"
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 sm:-right-6 rounded-2xl bg-white dark:bg-[#181818] border border-gray-200 dark:border-gray-700 shadow-xl px-4 py-3">
              <p className="text-xs text-gray-500 dark:text-gray-400">Open to</p>
              <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
                New Opportunities
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Content Section */}
        <ScrollReveal variant="right" delay={0.15} className="mt-12 md:mt-0 flex flex-col h-full">
          <SectionHeading title="About Me" className="mb-4" />
          <p className="text-base md:text-lg leading-relaxed dark:text-gray-300">
            I&apos;m a full-stack developer who enjoys turning ambiguous problems into
            clean, reliable software. My day-to-day toolkit is React, Next.js, and
            Node.js, and I&apos;ve shipped everything from e-commerce platforms to
            mobile apps used by real customers. What keeps me in this field is the
            feedback loop — writing something, watching it work, then making it
            better.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed dark:text-gray-300">
            Right now I&apos;m deepening my backend range with Spring Boot and
            building toward AWS Cloud certifications, so I can design systems that
            hold up in production, not just in a demo. I care about clean
            architecture, performance, and the kind of user experience that doesn&apos;t
            need an explanation.
          </p>

          {/* Quick facts */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {QUICK_FACTS.map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-[#181818] px-4 py-3"
              >
                <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-500">
                  {fact.label}
                </p>
                <p className="text-sm font-medium mt-1 dark:text-gray-200">{fact.value}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-500 mb-3">
              Education
            </h3>
            <ul className="space-y-2">
              {EDUCATION.map((item) => (
                <li key={item.school} className="text-sm md:text-base dark:text-gray-300">
                  <span className="font-semibold dark:text-white">{item.school}</span>
                  {" — "}
                  {item.detail}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
