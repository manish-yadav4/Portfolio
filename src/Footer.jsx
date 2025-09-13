
import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      id="Contact"
      className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white py-16 px-8 md:px-24 flex flex-col md:flex-row justify-between items-center shadow-lg rounded-t-3xl"
    >
      <div className="mb-8 md:mb-0 text-center md:text-left max-w-md">
        <h1 className="text-5xl font-extrabold mb-3 tracking-wide bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
          Contact Me
        </h1>
        <p className="text-indigo-300 text-lg font-light">
          I’m open to new opportunities and collaborations. Feel free to get in touch!
        </p>
      </div>

      <ul className="flex flex-col md:flex-row gap-8 md:gap-12 text-lg font-semibold">
        <li>
          <a
            href="mailto:manishy8572@gmail.com"
            className="flex items-center gap-3 hover:text-pink-400 transition-all duration-300"
          >
            <HiOutlineMail className="text-3xl" />
            <span className="underline">manishy8572@gmail.com</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/manish-yadav4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-pink-400 transition-all duration-300"
          >
            <FaGithub className="text-3xl" />
            <span className="underline">manish-yadav4</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/manish-yadav-1825a82b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-pink-400 transition-all duration-300"
          >
            <FaLinkedin className="text-3xl" />
            <span className="underline">linkedin.com/in/manish-yadav4</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
