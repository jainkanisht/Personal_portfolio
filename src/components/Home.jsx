import React from "react";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-start p-10 bg-blue-950">
      {/* Left Section */}
      <div className="w-full md:w-2/4 md:pt-10">
        <h1 className="text-3xl font-bold leading-normal tracking-tighter">
          Hello I am Kanisht .
        </h1>
        <p className="mt-4 my-4">
        As a beginner developer, I possess a versatile skill set in frontend development. I am proficient in crafting dynamic
web experiences. I am eager to contribute innovative solutions and grow in collaborative environments. Additionally, I am
committed to continuous learning and growth in development
        </p>
        <a
          href="#"
          className="bg-[#465697] mt-4 inline-block px-3 py-1.5 border rounded-2xl hover:opacity-85
          duration-300 hover:scale-105 font-semibold"
        >
          Contact Me
        </a>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
        <img
          src="https://files.oaiusercontent.com/file-Cxie4J7yw7S8mfn7HzHeEe?se=2025-02-22T05%3A35%3A04Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D39811f9a-27f8-42a2-8342-3d63ab8ceb42.webp&sig=IJKIZkAHTtzeiSd57gjjTdRVl9E0Zz1EkIpCuze3KnA%3D"
          alt="Portfolio"
          className="w-full md:w-2/5 border-none rounded-lg mx-auto"
        />
      </div>
    </div>
  );
};

export default Home;