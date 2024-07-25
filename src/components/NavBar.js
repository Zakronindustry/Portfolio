import React from 'react';
import github from '../assets/github.png';
import logo from "../assets/mobile.png";
const NavBar = () => (
  <header className="bg-custom-blue text-white p-4  ">
    <nav className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold mb-100 "><img src={logo} alt="Portfolio" height={50} width={50} /></div>
      <ul className="flex space-x-5">
        <li><a href="#about" className="relative p-2 rounded after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">About</a></li>
        <li><a href="#projects" className="relative p-2 rounded after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Projects</a></li>
        <li><a href="#contact" className="relative p-2 rounded after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Contact</a></li>
      </ul>
      <a href="https://github.com/Zakronindustry/"><img src={github} alt="Logo" className="h-12" /></a>
    </nav>
  </header>
);

export default NavBar;
