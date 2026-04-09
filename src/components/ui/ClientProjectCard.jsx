import React from "react";

function ClientProjectCard({ project }) {
  // Determine border color based on project color
  const borderColor =
    project.color === "blue"
      ? "border-t-blue-500"
      : project.color === "purple"
        ? "border-t-purple-500"
        : "border-t-green-500";

  // Determine icon background color
  const iconBg =
    project.color === "blue"
      ? "bg-blue-500/20"
      : project.color === "purple"
        ? "bg-purple-500/20"
        : "bg-green-500/20";

  return (
    <div
      className={`bg-gray-800/50 rounded-2xl p-8 border border-gray-700 border-t-4 ${borderColor} hover:transform hover:-translate-y-2 transition-all duration-300 [.light_&]:bg-gray-100 [.light_&]:border-gray-200`}
    >
      <div
        className={`w-16 h-16 rounded-xl ${iconBg} flex items-center justify-center mb-6`}
      >
        {project.icon}
      </div>

      <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block [.light_&]:text-gray-500">
        {project.subtitle}
      </span>

      <h3 className="text-2xl font-bold text-white mb-4 [.light_&]:text-gray-900">
        {project.title}
      </h3>

      <p className="text-gray-400 mb-6 text-sm leading-relaxed [.light_&]:text-gray-600">
        {project.description}
      </p>

      <div className="mb-8">
        <h4 className="text-xs font-bold text-gray-500 uppercase mb-3 tracking-wider">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300 border border-gray-600 [.light_&]:bg-gray-200 [.light_&]:border-gray-300 [.light_&]:text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-bold text-gray-500 uppercase mb-3 tracking-wider">
          Key Results
        </h4>
        <ul className="space-y-2">
          {project.results.map((result, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-gray-400 [.light_&]:text-gray-600"
            >
              <span
                className={`mt-1.5 w-1.5 h-1.5 rounded-full ${project.color === "blue" ? "bg-blue-500" : project.color === "purple" ? "bg-purple-500" : "bg-green-500"} shrink-0`}
              ></span>
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ClientProjectCard;
