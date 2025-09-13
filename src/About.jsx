import React from 'react';
import { FaLaptopCode, FaServer, FaDatabase } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="About"
      className="text-gray-100 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-lg p-12 mb-16 shadow-lg mx-auto max-w-screen-lg overflow-hidden"
    >
      <h2
        className="text-5xl md:text-6xl font-extrabold mb-8 text-center md:text-left tracking-wide
                   bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
                   bg-clip-text text-transparent
                   drop-shadow-lg"
      >
        About Me
      </h2>

      <p className="text-md md:text-lg max-w-xl mb-12 mx-auto md:mx-0 text-center md:text-left text-indigo-200 leading-relaxed">
        Passionate about crafting elegant and efficient web applications by combining modern design with solid backend technologies.
      </p>

      <div className="flex flex-col md:flex-row md:justify-center md:gap-10">
        <ul className="space-y-10 md:space-y-0 md:flex md:gap-10 w-full justify-center">
          <li className="bg-indigo-800 bg-opacity-80 p-8 rounded-xl border border-indigo-600 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col">
            <div className="flex items-center gap-4 mb-5">
              <FaLaptopCode className="text-indigo-400 text-4xl" />
              <h3 className="text-3xl font-semibold text-indigo-200">Frontend Developer</h3>
            </div>
            <p className="text-md leading-relaxed text-indigo-300">
              Expert in building visually appealing, responsive, and accessible interfaces using React, Tailwind CSS, and modern JavaScript best practices.
            </p>
          </li>

          <li className="bg-indigo-800 bg-opacity-80 p-8 rounded-xl border border-indigo-600 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col">
            <div className="flex items-center gap-4 mb-5">
              <FaServer className="text-indigo-400 text-4xl" />
              <h3 className="text-3xl font-semibold text-indigo-200">Backend Developer</h3>
            </div>
            <p className="text-md leading-relaxed text-indigo-300">
              Skilled in creating robust server-side logic, RESTful APIs, authentication, and efficient data handling using Node.js and Express.
            </p>
          </li>

          <li className="bg-indigo-800 bg-opacity-80 p-8 rounded-xl border border-indigo-600 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col">
            <div className="flex items-center gap-4 mb-5">
              <FaDatabase className="text-indigo-400 text-4xl" />
              <h3 className="text-3xl font-semibold text-indigo-200">Databases</h3>
            </div>
            <p className="text-md leading-relaxed text-indigo-300">
              Proficient with MongoDB for data modeling, indexing, and querying, ensuring high performance and scalable data storage.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
