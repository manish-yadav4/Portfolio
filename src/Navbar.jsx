import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex flex-wrap justify-between items-center text-white px-8 py-6 md:px-20 bg-[#171d32] shadow-md z-50">
      <span className="text-2xl font-extrabold tracking-widest cursor-default select-none">
        Portfolio
      </span>

      <ul
        className={`fixed top-16 left-0 h-full w-full bg-gradient-to-r from-purple-700 via-pink-600 to-purple-500 bg-opacity-95 backdrop-blur-md p-6 space-y-6 font-semibold text-lg
        md:static md:flex md:space-y-0 md:space-x-10 md:bg-transparent md:p-0 md:font-medium md:text-base md:items-center md:w-auto
        transition-transform duration-300 ease-in-out
        ${menuOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full md:translate-x-0'}`}
      >
        <li>
          <a
            href="#About"
            onClick={() => setMenuOpen(false)}
            className="block md:inline-block px-3 py-2 rounded-md hover:bg-pink-700 hover:text-white transition-colors duration-200"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#Projects"
            onClick={() => setMenuOpen(false)}
            className="block md:inline-block px-3 py-2 rounded-md hover:bg-pink-700 hover:text-white transition-colors duration-200"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            onClick={() => setMenuOpen(false)}
            className="block md:inline-block px-3 py-2 rounded-md hover:bg-pink-700 hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
        </li>
      </ul>

      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="md:hidden relative z-50 p-2 rounded-md hover:bg-pink-600 transition-colors duration-200"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        {menuOpen ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
      </button>
    </nav>
  );
};

export default Navbar;
