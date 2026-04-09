import React from "react";

function InfoCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors [.light_&]:bg-gray-100 [.light_&]:border-gray-200">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 text-white text-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 [.light_&]:text-gray-900">{title}</h3>
      <p className="text-gray-400 text-sm [.light_&]:text-gray-600">{description}</p>
    </div>
  );
}

export default InfoCard;
