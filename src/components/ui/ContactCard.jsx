import React from "react";

function ContactCard({ contact }) {
  return (
    <a
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-gray-500 hover:bg-gray-800 transition-all duration-300 group [.light_&]:bg-gray-100 [.light_&]:border-gray-200 [.light_&]:hover:bg-white"
    >
      <div
        className={`w-14 h-14 rounded-xl ${contact.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 [.light_&]:bg-gray-500 `}
      >
        {contact.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 [.light_&]:text-gray-900">
        {contact.title}
      </h3>
      <p className="text-gray-400 group-hover:text-blue-400 transition-colors [.light_&]:text-gray-600 [.light_&]:group-hover:text-blue-600">
        {contact.value}
      </p>
    </a>
  );
}

export default ContactCard;
