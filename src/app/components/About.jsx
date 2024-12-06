"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const About = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-4 text-lg leading-relaxed">
          <li>Node.js</li>
          <li>Express</li>
          <li>Postgres</li>
          <li>Sequelize</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-4 text-lg leading-relaxed">
          <li>University of Rwanda</li>
          <li>FreeCodeCamp</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-4 text-lg leading-relaxed">
          <li>FreeCodeCamp</li>
          <li>IT Essentials</li>
        </ul>
      ),
    },
  ];

  return (
    <section className="text-white bg-[#121212]" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-12 px-6 xl:gap-16 sm:py-20 xl:px-20">
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/images/about.jpg"
            alt="About Me"
            width={500}
            height={500}
            className="object-cover w-full h-auto hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="mt-8 md:mt-0 flex flex-col h-full">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            About Me
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-300">
            I am a full-stack web developer passionate about creating
            interactive and responsive web applications. I specialize in modern
            web technologies like JavaScript, React, Node.js, PostgreSQL, and
            more. I love collaborating with others and continuously strive to
            expand my knowledge and skills.
          </p>

          {/* Tabs Section */}
          <div className="flex flex-row justify-start mt-8 space-x-4">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>

          {/* Tab Content Section */}
          <div
            className="mt-8 p-4 rounded-lg border border-gray-700 bg-[#181818] text-gray-300 transition-all duration-500"
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
