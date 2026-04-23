import React from "react";
import { FaPaperPlane, FaDownload } from "react-icons/fa";
import ContactCard from "./ui/ContactCard";
import { contactMethods } from "@/Data/contact";

function ContactSection() {
  return (
    <div className="container mx-auto px-4 py-24 pb-32">
      <div className="text-center mb-16">
        <span className="text-blue-500 font-bold tracking-widest text-sm uppercase">
          Let's Connect
        </span>
        <h2 className="text-5xl font-extrabold text-white mt-4 mb-6 [.light_&]:text-gray-900">
          Contact Us
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed [.light_&]:text-gray-600">
          I am currently open to opportunities as a Junior Full-Stack. Feel free
          to reach out if you are looking for a motivated developer ready to
          learn and contribute.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        {contactMethods.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a
          href="mailto:mayachaker06@gmail.com"
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-3 transform hover:-translate-y-1"
        >
          <FaPaperPlane /> Send Message
        </a>
        <a
          href="/MayaChaker_CV PDF.pdf"
          download
          className="px-8 py-4 bg-transparent border-2 border-gray-600 text-white rounded-full font-bold text-lg hover:bg-gray-800 hover:border-gray-500 transition-all flex items-center gap-3 [.light_&]:text-gray-900 [.light_&]:border-gray-300 [.light_&]:hover:bg-gray-200"
        >
          <FaDownload /> Download CV
        </a>
      </div>
    </div>
  );
}

export default ContactSection;
