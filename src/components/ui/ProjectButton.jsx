import React from "react";

function ProjectButton() {
  return (
    <a href="#projects">
      <div className="border-2 border-gray-500 hover:border-[#1f387e] bg-transparent text-white [.light_&]:text-gray-900 [.light_&]:border-gray-300 w-[150px] h-[50px] rounded-[55px] flex items-center justify-center cursor-pointer font-semibold transition-colors duration-300">
        View Projects
      </div>
    </a>
  );
}

export default ProjectButton;
