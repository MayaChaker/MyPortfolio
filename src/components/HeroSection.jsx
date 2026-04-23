import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Button from "@ui/Button";
import ProjectButton from "@ui/ProjectButton";
import { FiGithub } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { LuLinkedin } from "react-icons/lu";
import { FaArrowDownLong } from "react-icons/fa6";

function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "Fullstack Web Developer";
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [text]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-24 md:pt-32">
        <span className="text-blue-500 font-bold block tracking-widest text-sm md:text-base mb-4">
          HELLO, I'M
        </span>
        <h1 className="font-bold text-center text-6xl md:text-9xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 [.light_&]:from-blue-600 [.light_&]:via-purple-600 [.light_&]:to-pink-600 bg-clip-text text-transparent">
          Maya Chaker
        </h1>
        <span className="text-xl md:text-3xl font-semibold text-gray-400 mb-8 h-[40px] flex items-center justify-center gap-1 pt-4 [.light_&]:text-gray-600">
          {text}
          <span
            className="animate-pulse text-gray-400 [.light_&]:text-gray-600"
            style={{
              animationDuration: "0.8s",
            }}
          >
            |
          </span>
        </span>

        <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto mb-10 [.light_&]:text-gray-700">
          <span className="block">
            I build complete web applications from frontend interfaces to backend systems using
            <span className="text-blue-500 font-medium"> React</span>,
            <span className="text-blue-500 font-medium"> Node.js</span> and
            <span className="text-blue-500 font-medium"> MySQL</span>.
          </span>
          Computer Science graduate with hands-on experience developing full-stack
          applications, including a hospital management system with
          authentication, role-based access, and real-world workflows. I enjoy
          building both user-friendly interfaces and structured backend systems.
        </p>
        <div className="flex gap-9 items-center justify-center mt-5">
          <span>
            <Button />
          </span>
          <span>
            <ProjectButton />
          </span>
        </div>
        <div className="flex gap-6 text-2xl items-center justify-center pt-10">
          <a
            href="https://github.com/MayaChaker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-gray-800/50 [.light_&]:bg-gray-200 [.light_&]:text-gray-500 p-3 rounded-full hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-transparent hover:border-blue-500/30">
              <FiGithub />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/maya-chaker-9025a7387"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-gray-800/50 [.light_&]:bg-gray-200 [.light_&]:text-gray-500 p-3 rounded-full hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-transparent hover:border-blue-500/30">
              <LuLinkedin />
            </div>
          </a>
          <div className="bg-gray-800/50 [.light_&]:bg-gray-200 [.light_&]:text-gray-500 p-3 rounded-full hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-transparent hover:border-blue-500/30">
            <CiMail />
          </div>
        </div>
        <a href="mayachaker06@gmail.com">
          <div className="text-4xl text-gray-500 mt-10 animate-bounce">
            <FaArrowDownLong />
          </div>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
