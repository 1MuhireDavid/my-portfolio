"use client";

import dynamic from "next/dynamic";

const Hero3DScene = dynamic(() => import("./Hero3DScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 dark:from-purple-600 dark:via-pink-600 dark:to-red-600 animate-pulse" />
  ),
});

const Hero3D = () => {
  return (
    <div className="w-full h-full">
      <Hero3DScene />
    </div>
  );
};

export default Hero3D;
