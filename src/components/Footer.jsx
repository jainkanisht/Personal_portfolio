import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="contacts"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl gap-4">
        <li className="flex gap-2 items-center hover:text-blue-400 transition-colors duration-300">
          <MdOutlineEmail size={20} className="hover:text-blue-400 transition-colors duration-300" />
          kanisht580@gmail.com
        </li>
        <li className="flex gap-2 items-center hover:text-blue-400 transition-colors duration-300">
          <CiLinkedin className="hover:text-blue-400 transition-colors duration-300" />
          <a href="https://www.linkedin.com/in/kanisht-jain-69030b260/" className="hover:text-blue-400">
            LinkedIn
          </a>
        </li>
        <li className="flex gap-2 items-center hover:text-blue-400 transition-colors duration-300">
          <FaGithub className="hover:text-blue-400 transition-colors duration-300" />
          <a href="https://github.com/jainkanisht" className="hover:text-blue-400 ">
            Github
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;