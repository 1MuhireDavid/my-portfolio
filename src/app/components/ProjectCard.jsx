import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="hover:skew-y-3 transform transition-transform duration-300 light: border">
      {/* Image Section */}
      <div
        className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden"
        style={{
          background: `url(${imgUrl}) no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500">
          {/* GitHub Link */}
          <Link
            href={gitUrl}
            aria-label={`GitHub link for ${title}`}
            className="h-14 w-14 flex items-center justify-center border-2 border-[#AD87BE] rounded-full hover:border-white transition-all duration-300"
          >
            <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] group-hover:text-white transition-all duration-300" />
          </Link>
          {/* Preview Link */}
          <Link
            href={previewUrl}
            aria-label={`Preview link for ${title}`}
            className="h-14 w-14 flex items-center justify-center border-2 border-[#AD87BE] rounded-full hover:border-white transition-all duration-300 ml-4"
          >
            <EyeIcon className="h-8 w-8 text-[#ADB7BE] group-hover:text-white transition-all duration-300" />
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="dark:bg-[#181818] dark:text-white rounded-b-xl py-6 px-4 mt-3">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="dark:text-[#ADB7BE] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
