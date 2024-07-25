import React from 'react';
import { motion } from "framer-motion";
import herobg from '../assets/herobg.png'; // Make sure the path is correct
import ComputerCanvas from './CimputerCanvas';

const NavBar = () => (
  <>
    <section
      style={{ backgroundImage: `url(${herobg})` }}
      className="bg-cover bg-center h-screen mx-auto"
    >
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-purple-500" />
        </div>
        <div>
          <h1 className="text-white text-5xl font-bold mt-5"> Hi, I'am <span className="text-[#915eff]">Pranay </span></h1>
          <p className="text-white mt-5 text-2xl">
          Innovative Developer with Security Expertise
          </p>
        </div>
      </div>
      <ComputerCanvas />

      <div className="relative xs:bottom-10 bottom-32 w-full flex justify-center items-center" >
        <a href="#about">
        	<div className="w-[35px] h-[64px]  rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
        	<motion.dev
        		animate={{
        			y:[0,24,0]
        		}}
        		transition={{
        			duration:1.5,
        			repeat:Infinity,
        			repeatType:'loop'
        		}}
        		className="w-3 h-3 rounded-full bg-white mb-1"
        	 />
        	</div>
        </a>
      </div>
    </section>
  </>
);

export default NavBar;
