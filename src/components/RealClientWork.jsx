import React from "react";
import ClientProjectCard from "./ui/ClientProjectCard";
import { clientProjects } from "@/Data/clientProjects";

function RealClientWork() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <span className="text-blue-500 font-bold tracking-widest text-sm uppercase flex items-center justify-center gap-2">
          <span className="text-xl">✨</span> Real World Impact
        </span>
        <h2 className="text-5xl font-extrabold text-white mt-4 mb-4 [.light_&]:text-gray-900">
          Client Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto [.light_&]:text-gray-600">
          Trusted by businesses to deliver production-ready solutions that solve
          real-world challenges and drive measurable results
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {clientProjects.map((project, index) => (
          <ClientProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default RealClientWork;
