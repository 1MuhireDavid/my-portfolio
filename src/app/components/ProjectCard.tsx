"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  imgUrl: string;
  tags: string[];
  techStack?: string[];
  features?: string[];
  gitUrl: string;
  previewUrl: string;
};

const ProjectCard = ({
  imgUrl,
  title,
  description,
  tags,
  techStack = [],
  features = [],
  gitUrl,
  previewUrl,
}: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    x.set((event.clientX - bounds.left) / bounds.width - 0.5);
    y.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const hasRepo = Boolean(gitUrl) && gitUrl !== "#";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={shouldReduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 800 }}
      className="h-full flex flex-col rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#181818] shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative h-52 md:h-60 group overflow-hidden">
        <Image
          src={imgUrl}
          alt={`${title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/0 group-hover:bg-black/70 transition-colors duration-300">
          {hasRepo ? (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${title}`}
              className="opacity-0 group-hover:opacity-100 h-12 w-12 flex items-center justify-center border-2 border-white/60 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              <CodeBracketIcon className="h-6 w-6 text-white" />
            </Link>
          ) : (
            <span
              aria-label="Source code is private"
              title="Source code is private"
              className="opacity-0 group-hover:opacity-100 h-12 w-12 flex items-center justify-center border-2 border-white/30 rounded-full cursor-not-allowed transition-opacity duration-300"
            >
              <LockClosedIcon className="h-5 w-5 text-white/60" />
            </span>
          )}
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${title}`}
            className="opacity-0 group-hover:opacity-100 h-12 w-12 flex items-center justify-center border-2 border-white/60 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white" />
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 py-6 px-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <h5 className="text-xl font-semibold mb-2 dark:text-white">{title}</h5>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {description}
        </p>

        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {features.length > 0 && (
          <ul className="mt-4 space-y-1 text-sm text-gray-600 dark:text-gray-400 list-disc pl-4">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-5 flex gap-4 text-sm font-medium">
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 dark:text-purple-400 hover:underline"
          >
            Live Demo →
          </Link>
          {hasRepo && (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:underline"
            >
              Source
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
