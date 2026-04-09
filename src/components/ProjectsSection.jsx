import React from "react";
import ProjectCard from "@ui/ProjectCard";
import { projects } from "@Data/projects";

function ProjectsSection() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <span className="text-blue-500 font-bold tracking-widest text-sm uppercase">
          My Work
        </span>
        <h2 className="text-5xl font-extrabold text-white mt-4 mb-4 [.light_&]:text-gray-900">
          featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
