"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16 bg-gradient-to-b from-gray-900 via-black to-gray-800 relative overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-full bg-opacity-50">
    {/* Background decorative shapes */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 opacity-20 blur-2xl"></div>
    <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-gradient-to-br from-indigo-500 to-blue-400 rounded-full blur-3xl opacity-50"></div>
  </div>

  <div className="relative grid grid-cols-1 sm:grid-cols-12 z-10">
    <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
      <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
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
        />
      </h1>
      <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        aperiam quas culpa esse ut, magni nulla officia soluta maxime
        voluptas rem est libero iusto nisi repellendus alias? Velit, vero
        ea!
      </p>
      <div className="mt-6">
        <Link
          href="/#contact"
          className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-pink-500 hover:scale-105 transform transition text-white"
        >
          Hire Me
        </Link>
        <Link
          href="/"
          className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:scale-105 transform transition text-white mt-3"
        >
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
            Download CV
          </span>
        </Link>
      </div>
    </div>
    <div className="col-span-4 place-self-center mt-8 lg:mt-0">
      <div className="relative lg:w-[400px] lg:h-[400px]">
        <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] bg-gradient-to-tr from-purple-400 via-pink-400 to-red-400 rounded-full shadow-2xl">
          <Image
            src="/images/hero-image.png"
            alt="hero image"
            layout="intrinsic"
            width={300}
            height={200}
            objectFit="cover"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default HeroSection;