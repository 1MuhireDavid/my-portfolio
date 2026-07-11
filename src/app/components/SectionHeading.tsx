"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type SectionHeadingProps = {
  title: string;
  align?: "left" | "center";
  className?: string;
};

const SectionHeading = ({
  title,
  align = "left",
  className = "",
}: SectionHeadingProps) => {
  const shouldReduceMotion = useReducedMotion();
  const isCentered = align === "center";

  return (
    <div className={`${isCentered ? "text-center" : ""} ${className}`}>
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 inline-block">
        {title}
      </h2>
      <motion.div
        className={`h-1 w-20 mt-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 ${
          isCentered ? "mx-auto" : ""
        }`}
        style={{ transformOrigin: isCentered ? "50% 50%" : "0% 50%" }}
        initial={shouldReduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
};

export default SectionHeading;
