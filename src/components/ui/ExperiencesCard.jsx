import React from "react";

function ExperiencesCard({ num, title }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl hover:border-blue-500 transition-colors flex flex-col items-center justify-center text-center [.light_&]:bg-gray-100">
      <div className="mb-4 text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        {num}
      </div>

      <p className="text-gray-400 text-xl [.light_&]:text-gray-600">{title}</p>
    </div>
  );
}

export default ExperiencesCard;
