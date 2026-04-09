import React, { useState } from "react";
import Mode from "@ui/Mode";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-gray-900/95 [.light_&]:bg-white/95 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">
          {"<MAYA />"}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center font-medium text-gray-300 [.light_&]:text-gray-700">
          {["Home", "About", "Skills", "Projects", "Clients", "Contact"].map(
            (item) => (
              <li key={item} className="relative group cursor-pointer">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-500 transition-colors duration-300 block py-2"
                >
                  {item}
                </a>
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ),
          )}
          <li>
            <Mode />
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Mode />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 [.light_&]:text-gray-700 hover:text-blue-500 transition-colors text-2xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900/95 [.light_&]:bg-white/95 backdrop-blur-md shadow-lg md:hidden flex flex-col items-center py-8 gap-6 transition-all duration-300 border-b border-gray-800 [.light_&]:border-gray-200">
          {["Home", "About", "Skills", "Projects", "Clients", "Contact"].map(
            (item) => (
              <a
                href={`#${item.toLowerCase()}`}
                key={item}
                className="text-gray-300 [.light_&]:text-gray-700 text-lg font-medium hover:text-blue-500 transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ),
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
