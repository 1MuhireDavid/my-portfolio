"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "MY LICENCE",
    description: "A platform to help users prepare for their provisional driving license tests.",
    image: "/images/projects/license.png",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "https://mylicencefn.vercel.app/",
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "A full-stack e-commerce web application with payment integration.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "https://imc.rw/",
  },
  {
    id: 3,
    title: "Budget Tracker Mobile App",
    description: "A mobile app for tracking expenses and managing budgets effectively.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "#",
    previewUrl: "https://expo.dev/artifacts/eas/oYPMwjCSCVqhGdYJT1JHx1.apk",
  },
  {
    id: 4,
    title: "IKIGEMBE MOVIES",
    description: "A mobile app for discovering and watching movies.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "https://www.figma.com/design/0WVcKU02P6e0CDkbjoskFH/IKIGEMBE-movie-website?node-id=0-1&p=f&t=vD7Y17jdLFvRs7Vu-0",
  },
];

const ProjectsSection = () => {
  const [activeTag, setActiveTag] = useState("All");

  const handleTagChange = (tag) => {
    setActiveTag(tag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(activeTag)
  );

  return (
    <section id="project" className="py-16 px-6 bg-gray-100 dark:bg-[#121212]">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          My Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-2">
          Explore a selection of my recent projects showcasing my skills and expertise
          in web and mobile development.
        </p>
      </div>

      {/* Tags Section */}
      <div className="flex justify-center items-center gap-4 mb-8">
        {["All", "Web", "Mobile"].map((tag) => (
          <ProjectTag
            key={tag}
            onClick={() => handleTagChange(tag)}
            name={tag}
            isSelected={activeTag === tag}
          />
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tag}
            previewUrl={project.previewUrl}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
