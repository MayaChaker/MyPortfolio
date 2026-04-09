import React from "react";

function Button() {
  return (
    <a href="#contact">
      <button className="bg-gradient-to-r from-blue-500 to-purple-500 w-[150px] h-[50px] rounded-[55px] text-white px-6 cursor-pointer text-center font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 hover:brightness-110">
        Contact Us
      </button>
    </a>
  );
}

export default Button;
