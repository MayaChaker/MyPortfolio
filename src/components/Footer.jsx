import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 [.light_&]:bg-gray-100 [.light_&]:border-gray-200 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          {/* Logo & Tagline */}
          <div>
            <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
              {"<MAYA />"}
            </div>
            <p className="text-gray-400 text-sm [.light_&]:text-gray-600">
              Building the web, one line at a time
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <SocialLink href="https://github.com" icon={<FaGithub />} />
            <SocialLink href="https://linkedin.com" icon={<FaLinkedin />} />
            <SocialLink
              href="mailto:your.email@example.com"
              icon={<FaEnvelope />}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8 [.light_&]:border-gray-300"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 [.light_&]:text-gray-600">
          {/* Copyright */}
          <p>
            © {new Date().getFullYear()} Maya Chaker. Crafted with{" "}
            <span className="text-pink-70">♥</span> using React & Tailwind CSS
          </p>

          {/* Nav Links */}
          <ul className="flex gap-8">
            {["Home", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-blue-500 transition-colors cursor-pointer"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 [.light_&]:bg-gray-200 [.light_&]:text-gray-600 [.light_&]:hover:bg-gray-300 [.light_&]:hover:text-gray-900"
    >
      {icon}
    </a>
  );
}

export default Footer;
