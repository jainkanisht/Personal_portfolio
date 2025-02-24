import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import the right arrow icon

const About = () => {
  return (
    <div
      id="about"
      className="text-white md:flex items-center justify-center bg-black bg-opacity-30
      rounded-lg lg:rounded-full p-6 md:p-12 mx-4 md:mx-20 shadow-xl mt-20 md:mt-36"
    >
      <div className="w-full mx-auto md:ml-48">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10 text-center md:text-left">
          About
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 justify-around">
          {/* Image Section */}
          <div className="flex justify-center md:justify-start">
            <img
              className="h-32 md:h-48 lg:h-80 rounded-lg shadow-lg"
              src="image.png"
              alt="About img"
            />
          </div>

          {/* Text Content Section */}
          <ul className="mt-6 md:mt-0 space-y-6 w-full md:w-auto">
            <div className="flex gap-6">
              <span className="w-full md:w-96">
                <div className="flex items-center gap-2">
                  <FaArrowRight className="text-xl" /> {/* Right arrow icon */}
                  <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                    Frontend Developer
                  </h1>
                </div>
                <p className="text-sm md:text-md leading-tight mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores explicabo deserunt asperiores quasi, vitae blanditiis
                  perferendis quos consectetur ea harum! Libero aut qui
                  similique recusandae provident consectetur sed itaque alias
                  sint ipsa?
                </p>
              </span>
            </div>
            <div className="flex gap-6">
              <span className="w-full md:w-96">
                <div className="flex items-center gap-2">
                  <FaArrowRight className="text-xl" /> {/* Right arrow icon */}
                  <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                    Database Developer
                  </h1>
                </div>
                <p className="text-sm md:text-md leading-tight mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores explicabo deserunt asperiores quasi, vitae blanditiis
                  perferendis quos consectetur ea harum!
                </p>
              </span>
            </div>
            <div className="flex gap-6">
              <span className="w-full md:w-96">
                <div className="flex items-center gap-2">
                  <FaArrowRight className="text-xl" /> {/* Right arrow icon */}
                  <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                    Backend Developer
                  </h1>
                </div>
                <p className="text-sm md:text-md leading-tight mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores explicabo deserunt asperiores quasi, vitae blanditiis
                  perferendis quos consectetur ea harum!
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;