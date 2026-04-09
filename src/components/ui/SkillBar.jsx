import React from "react";

function SkillBar({ name, level, color }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300 font-medium [.light_&]:text-gray-700">
          {name}
        </span>
        <span className="text-gray-400 text-sm [.light_&]:text-gray-500">
          {level}%
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5 [.light_&]:bg-gray-300">
        <div
          className={` h-2.5 rounded-full ${color}`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;
