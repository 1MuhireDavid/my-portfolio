"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const VARIANTS: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  left: {
    hidden: { opacity: 0, x: -32 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 32 },
    show: { opacity: 1, x: 0 },
  },
};

type ScrollRevealProps = {
  children: React.ReactNode;
  variant?: keyof typeof VARIANTS;
  delay?: number;
  duration?: number;
  className?: string;
};

const ScrollReveal = ({
  children,
  variant = "up",
  delay = 0,
  duration = 0.7,
  className,
}: ScrollRevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: "-60px" }}
      variants={VARIANTS[variant]}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

export const staggerContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};
