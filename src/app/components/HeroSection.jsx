"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const HeroSection = () => {
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
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700">
              Hello, I&apos;m {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "David Muhire",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
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
            words={`I am David Muhire, a passionate developer skilled in building responsive web and mobile applications. 
              I specialize in creating seamless user experiences and delivering high-quality, scalable solutions. 
              Let’s work together to bring your ideas to life!`}
            className="mt-4 dark:text-gray-300"
          />
          <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
            <Link href="/contact">
              <ButtonsCard>Hire Me</ButtonsCard>
            </Link>
            <Link href="/resume">
              <ButtonsCard>Download CV</ButtonsCard>
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="place-items-center col-span-4 mt-8 lg:mt-0">
          <div className="relative w-[250px] h-[300px] lg:w-[400px] lg:h-[400px]">
            <div className="w-full bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 dark:from-purple-600 dark:via-pink-600 dark:to-red-600 rounded-full shadow-2xl flex items-center justify-center ml-12 lg:ml-0">
              <Image
                src="/images/hero-image.png"
                alt="David Muhire Hero"
                layout="intrinsic"
                width={300}
                height={300}
                className="rounded-full"
                style={{ height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
