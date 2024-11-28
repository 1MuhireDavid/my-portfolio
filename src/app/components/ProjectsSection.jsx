"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A clean and responsive React.js portfolio showcasing projects.",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/example/react-portfolio",
    previewUrl: "https://example.com/portfolio",
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "A full-stack e-commerce web application with payment integration.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/example/ecommerce-app",
    previewUrl: "https://example.com/ecommerce",
  },
  {
    id: 3,
    title: "Mobile Task Manager",
    description: "A mobile app for managing tasks efficiently, built with React Native.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/example/task-manager",
    previewUrl: "https://example.com/task-manager",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="project" className="bg-[#121212] text-white py-16 px-6">
      <h2 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
        My Projects
      </h2>
      <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto">
        Explore a selection of my recent projects showcasing my skills and
        expertise in web and mobile development.
      </p>

      {/* Tags Section */}
      <div className="flex justify-center items-center gap-4 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
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
