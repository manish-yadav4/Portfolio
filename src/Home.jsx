
import React from "react";
import Image from "./assets/a.jpg";
import TextChange from "./TextChange";




const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center px-6 md:px-16 py-12 md:py-20 gap-10 md:gap-16">
      <div className="md:w-[55%]">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          <TextChange />
        </h1>
        <p className="text-base md:text-xl leading-relaxed text-gray-300">
          Enthusiastic Full Stack Developer with knowledge of front-end and
          back-end technologies. Skilled in building user-friendly web
          applications using HTML, CSS, JavaScript, React, Node.js, Express.js
          and MongoDB.
        </p>
        <div className="mt-6 flex gap-4">
          <a
  href="#Contact"
  className="text-white bg-gray-800 border-2 border-purple-500 py-2 px-5 text-sm md:text-lg
  transition-all hover:scale-110 hover:bg-purple-600 hover:border-purple-600 font-semibold rounded-2xl"
>
  Contact Me
</a>

          <a
            href="https://drive.google.com/file/d/1H552zR3Pn22ZC1wY82L4rbxKsnXSkli6/view" target="_blank" 
            download="Manish-CV.pdf"
            className="text-white bg-purple-600 border-2 border-purple-500 py-2 px-5 text-sm md:text-lg
            transition-all hover:scale-110 hover:bg-purple-700 hover:border-purple-600 font-semibold rounded-2xl"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="md:w-[45%] flex justify-center">
        <img
          className="rounded-2xl w-72 md:w-96 object-cover shadow-xl"
          src={Image}
          alt="Manish"
        />
      </div>
    </div>
  );
};

export default Home;
