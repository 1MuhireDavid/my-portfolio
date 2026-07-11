"use client";
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import ScrollReveal, {
  staggerContainerVariants,
  staggerItemVariants,
} from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const projectsData = [
  {
    id: 1,
    title: "Ricks Global Link Group",
    description:
      "A one-stop service platform for Kigali, Rwanda — flight, hotel, and car rental booking, real estate, government services (Irembo, RURA, RRA), bank agent services, and the NTUMA premium concierge service, all with a 24/7, 30-minute response guarantee.",
    image: "/images/projects/ricks-global-link.png",
    tag: ["All", "Web"],
    techStack: ["Next.js", "React", "Tailwind CSS"],
    features: [
      "Round-trip / one-way flight, hotel, and car rental booking flow",
      "NTUMA concierge service requests for errands and business support",
      "Live WhatsApp support widget for 24/7 response",
    ],
    gitUrl: "#",
    previewUrl: "https://ricksgloballinkgroup.rw/",
  },
  {
    id: 2,
    title: "Kepa Eco Villa",
    description:
      "A boutique villa booking site for a garden retreat in Nyagatare, Rwanda — showcasing suites and grounds with a direct reservation flow and guest sign-in.",
    image: "/images/projects/kepa-eco-villa.png",
    tag: ["All", "Web"],
    techStack: ["Next.js", "React", "Tailwind CSS"],
    features: [
      "Room and grounds gallery with a full reservation flow",
      "Guest sign-in and food & drinks menu browsing",
      "WhatsApp inquiry widget for direct guest contact",
    ],
    gitUrl: "#",
    previewUrl: "https://www.kepaecovilla.rw/",
  },
  {
    id: 3,
    title: "MY LICENCE",
    description: "A platform to help users prepare for their provisional driving license tests.",
    image: "/images/projects/license.png",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "https://mylicencefn.vercel.app/",
  },
  {
    id: 4,
    title: "E-commerce App",
    description: "A full-stack e-commerce web application with payment integration.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "https://imc.rw/",
  },
  {
    id: 5,
    title: "Budget Tracker Mobile App",
    description: "A mobile app for tracking expenses and managing budgets effectively.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "#",
    previewUrl: "https://expo.dev/artifacts/eas/oYPMwjCSCVqhGdYJT1JHx1.apk",
  },
  {
    id: 6,
    title: "IKIGEMBE MOVIES",
    description: "A movie streaming platform with a Django REST API backend, AWS S3 storage, and CloudFront delivery.",
    image: "/images/projects/4.jpg",
    tag: ["All", "Web"],
    techStack: ["Django REST Framework", "PostgreSQL", "AWS S3", "CloudFront", "JWT Auth"],
    gitUrl: "#",
    previewUrl: "https://www.figma.com/design/0WVcKU02P6e0CDkbjoskFH/IKIGEMBE-movie-website?node-id=0-1&p=f&t=vD7Y17jdLFvRs7Vu-0",
  },
];

const ProjectsSection = () => {
  const [activeTag, setActiveTag] = useState("All");
  const shouldReduceMotion = useReducedMotion();

  const handleTagChange = (tag) => {
    setActiveTag(tag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(activeTag)
  );

  return (
    <section id="project" className="py-16 px-6 bg-gray-100 dark:bg-[#121212]">
      {/* Section Header */}
      <div className="mb-10">
        <SectionHeading title="My Projects" align="center" />
        <ScrollReveal variant="fade" delay={0.15}>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-2 text-center">
            Explore a selection of my recent projects showcasing my skills and expertise
            in web and mobile development.
          </p>
        </ScrollReveal>
      </div>

      {/* Tags Section */}
      <ScrollReveal variant="fade" delay={0.2} className="flex justify-center items-center gap-4 mb-8">
        {["All", "Web", "Mobile"].map((tag) => (
          <ProjectTag
            key={tag}
            onClick={() => handleTagChange(tag)}
            name={tag}
            isSelected={activeTag === tag}
          />
        ))}
      </ScrollReveal>

      {/* Projects Grid */}
      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainerVariants}
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.id} variants={staggerItemVariants} className="h-full">
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project.tag}
              techStack={project.techStack}
              features={project.features}
              previewUrl={project.previewUrl}
              gitUrl={project.gitUrl}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
