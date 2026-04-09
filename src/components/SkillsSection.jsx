import React from "react";
import SkillBar from "@ui/SkillBar";
import skills from "@Data/skills";

function SkillsSection() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <span className="text-blue-500 font-bold tracking-widest text-sm uppercase">
          My Experiences
        </span>
        <h2 className="text-4xl font-extrabold text-white mt-2 [.light_&]:text-gray-900">
          Technical Skills
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 [.light_&]:bg-gray-100 [.light_&]:border-gray-200">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center [.light_&]:text-gray-900">
            <span className="w-1 h-8 bg-blue-500 mr-4 rounded-full"></span>
            Frontend
          </h3>
          {skills.frontend.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              level={skill.level}
              color="bg-gradient-to-r from-blue-500 to-cyan-400"
            />
          ))}
        </div>
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 [.light_&]:bg-gray-100 [.light_&]:border-gray-200">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center [.light_&]:text-gray-900">
            <span className="w-1 h-8 bg-pink-500 mr-4 rounded-full"></span>{" "}
            {/* Pink vertical bar */}
            Backend
          </h3>
          {skills.backend.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              level={skill.level}
              color="bg-gradient-to-r from-pink-500 to-purple-500"
            />
          ))}
        </div>
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 [.light_&]:bg-gray-100 [.light_&]:border-gray-200">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center [.light_&]:text-gray-900">
            <span className="w-1 h-8 bg-green-500 mr-4 rounded-full"></span>{" "}
            {/* Pink vertical bar */}
            Database
          </h3>
          {skills.database.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              level={skill.level}
              color="bg-gradient-to-r from-green-500 to-cyan-500"
            />
          ))}
        </div>
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 [.light_&]:bg-gray-100 [.light_&]:border-gray-200">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center [.light_&]:text-gray-900">
            <span className="w-1 h-8 bg-orange-500 mr-4 rounded-full"></span>{" "}
            {/* Pink vertical bar */}
            Tools & Deployment
          </h3>
          {skills.tools.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              level={skill.level}
              color="bg-gradient-to-r from-orange-500 to-red-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
