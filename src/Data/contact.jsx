import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export const contactMethods = [
  {
    icon: <FaEnvelope className="text-3xl text-white" />,
    title: "Email",
    value: "mayachaker06@gmail.com",
    link: "mailto:mayachaker06@gmail.com",
    color: "bg-gray-700",
  },
  {
    icon: <FaLinkedin className="text-3xl text-white" />,
    title: "LinkedIn",
    value: "Maya-chaker",
    link: "https://www.linkedin.com/in/maya-chaker-9025a7387",
    color: "bg-gray-700",
  },
  {
    icon: <FaGithub className="text-3xl text-white" />,
    title: "GitHub",
    value: "MayaChaker",
    link: "https://github.com/MayaChaker",
    color: "bg-gray-700",
  },
];
