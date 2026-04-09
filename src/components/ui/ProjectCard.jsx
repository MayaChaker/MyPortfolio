import React from "react";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  const gradientColor =
    project.color === "blue"
      ? "from-blue-500 to-cyan-500"
      : project.color === "pink"
        ? "from-pink-500 to-purple-500"
        : "from-green-500 to-teal-500";
  return (
    <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all mb-8 [.light_&]:bg-gray-100 [.light_&]:border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <span
          className={`px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${gradientColor}`}
        >
          {project.role}
        </span>
        <div className="flex gap-4">
          <a
            href={project.liveLink}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
          <a
            href={project.repoLink}
            className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors text-sm font-medium [.light_&]:text-gray-700 [.light_&]:border-gray-300 [.light_&]:hover:bg-gray-200"
          >
            <FaGithub />
            Code
          </a>
        </div>
      </div>
      <h3 className="text-3xl font-bold text-white mb-4 [.light_&]:text-gray-900">
        {project.title}
      </h3>
      <p className="text-gray-400 mb-6 text-lg [.light_&]:text-gray-600">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-8 [.light_&]:text-gray-700">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-lg text-sm text-gray-300 [.light_&]:bg-gray-200 [.light_&]:border-gray-300 [.light_&]:text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <ul className="space-y-3">
        {project.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-gray-400 [.light_&]:text-gray-600"
          >
            <span
              className={`mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0 [.light_&]:text-gray-700`}
            ></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;
