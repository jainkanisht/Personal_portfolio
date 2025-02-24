import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaJava } from "react-icons/fa"; // Import Java icon
import { SiTailwindcss } from "react-icons/si"; // Import Tailwind CSS icon

const Experience = () => {
  return (
    <div id="experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills & Learning Journey</h1>
      <div className="flex flex-wrap items-center justify-around">
        {/* Skills Section */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss color="#38B2AC" size={50} /> {/* Tailwind CSS icon */}
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="orange" size={50} /> {/* Java icon for OOPs */}
          </span>
        </div>

        {/* Learning Journey Section */}
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 text-lg items-center">
            <span className="text-white">
              <h2 className="leading-tight mb-2">Frontend Development</h2>
              <p className="text-sm leading-tight font-thin">
                Self-Taught | Ongoing
              </p>
              <ul className="text-sm p-2">
                <li>- Proficient in HTML, CSS, JavaScript, and React.</li>
                <li>- Experience building responsive and interactive UIs.</li>
                <li>- Familiar with Tailwind CSS for styling.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight mb-2">Data Structures & Algorithms</h2>
              <p className="text-sm leading-tight font-thin">
                Self-Taught | Ongoing
              </p>
              <ul className="text-sm p-2">
                <li>- Strong understanding of DSA concepts in Java.</li>
                <li>- Solved 250+ problems on LeetCode.</li>
                <li>- Familiar with OOPs principles and design patterns.</li>
                <li>- Solved 150+ problems on GFG.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight mb-2">Projects & Portfolio</h2>
              <p className="text-sm leading-tight font-thin">
                Personal Projects | Ongoing
              </p>
              <ul className="text-sm p-2">
                <li>- Built a portfolio website using React and Tailwind CSS.</li>
                <li>- Developed small-scale applications to practice skills.</li>
                <li>- Actively contributing to open-source projects.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;