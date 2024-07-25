import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt"; // Import Tilt correctly
import reactpng from "../assets/tech/reactjs.png";
import mongodb from "../assets/tech/mongodb.png";
import html from "../assets/tech/html.png";
import javascript from "../assets/tech/javascript.png";
import nodejs from "../assets/tech/nodejs.png";
import threejs from "../assets/tech/threejs.svg";
import tailwind from "../assets/tech/tailwind.png";
import css from "../assets/tech/css.png";
import git from "../assets/tech/git.png";

const Skills = () => (
  <>
    <section className="bg-[#090325] text-white p-4" id="about">
      <div>
        <p className="text-1xl mt-20">
          INTRODUCTION
        </p>
        <p className="text-5xl font-bold">
          OVERVIEW.
        </p>
        <p className="text-[18px] py-10">
          I’m a passionate developer with a knack for creating innovative solutions. I specialize in React, JavaScript, Tailwind CSS, and Three.js. With certifications as an eLearnSecurity Certified Penetration Tester (ECPPT) and an eLearnSecurity Junior Penetration Tester (eJPT), you can rest assured that security is always a priority in my work. Here are some of the projects I’ve worked on. Don't worry about security—I’ve got it covered!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"> {/* Flex container with gap between items */}
          <Tilt className="xs:w-[100px] w-full ">
            <motion.div 
              className="w-full bg-gradient-to-r from-pink-500 to-green-500 p-[1px] rounded-[20px] shadow-card"
            >
              <div 
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450
                }}
                className="bg-custom-blue rounded-[20px] py-5 px-12 min-h-[100px] flex justify-evenly items-center flex-col"
              >
                <h2 className="text-3xl font-bold py-3"> REACT.JS </h2>
                <img src={reactpng} alt="react" width={100} height={100} />
              </div>
            </motion.div>
          </Tilt>
                    <Tilt className="xs:w-[100px] w-full ">
            <motion.div 
              className="w-full bg-gradient-to-r from-pink-500 to-green-500 p-[1px] rounded-[20px] shadow-card"
            >
              <div 
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450
                }}
                className="bg-custom-blue rounded-[20px] py-5 px-12 min-h-[100px] flex justify-evenly items-center flex-col"
              >
                <h2 className="text-3xl font-bold py-3"> MONGODB </h2>
                <img src={mongodb} alt="react" width={100} height={100} />
              </div>
            </motion.div>
          </Tilt>
                    <Tilt className="xs:w-[100px] w-full ">
            <motion.div 
              className="w-full bg-gradient-to-r from-pink-500 to-green-500 p-[1px] rounded-[20px] shadow-card"
            >
              <div 
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450
                }}
                className="bg-custom-blue rounded-[20px] py-5 px-12 min-h-[100px] flex justify-evenly items-center flex-col"
              >
              <h2 className="text-3xl font-bold py-3"> HTML5 </h2>
                <img src={html} alt="react" width={100} height={100} />
              </div>
            </motion.div>
          </Tilt>
                    <Tilt className="xs:w-[100px] w-full ">
            <motion.div 
              className="w-full bg-gradient-to-r from-pink-500 to-green-500 p-[1px] rounded-[20px] shadow-card"
            >
              <div 
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450
                }}
                className="bg-custom-blue rounded-[20px] py-5 px-12 min-h-[100px] flex justify-evenly items-center flex-col"
              >
               <h2 className="text-3xl font-bold py-3"> JAVASCRIPT </h2>
                <img src={javascript} alt="react" width={100} height={100} />
              </div>
            </motion.div>
          </Tilt>
            <Tilt className="xs:w-[100px] w-full ">
            <motion.div 
              className="w-full bg-gradient-to-r from-pink-500 to-green-500 p-[1px] rounded-[20px] shadow-card"
            >
              <div 
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450
                }}
                className="bg-custom-blue rounded-[20px] py-5 px-12 min-h-[100px] flex justify-evenly items-center flex-col"
              >
              <h2 className="text-3xl font-bold py-3"> NODE.JS </h2>
                <img src={nodejs} alt="react" width={100} height={100} />
              </div>
            </motion.div>
          </Tilt>
                           <Tilt className="xs:w-[100px] w-full ">
            <motion.div 
              className="w-full bg-gradient-to-r from-pink-500 to-green-500 p-[1px] rounded-[20px] shadow-card"
            >
              <div 
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450
                }}
                className="bg-custom-blue rounded-[20px] py-5 px-12 min-h-[100px] flex justify-evenly items-center flex-col"
              >
              <h2 className="text-3xl font-bold py-3"> THREE.JS </h2>
                <img src={threejs} alt="react" width={100} height={100} />
              </div>
            </motion.div>
          </Tilt>
                           <Tilt className="xs:w-[100px] w-full ">
            <motion.div 
              className="w-full bg-gradient-to-r from-pink-500 to-green-500 p-[1px] rounded-[20px] shadow-card"
            >
              <div 
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450
                }}
                className="bg-custom-blue rounded-[20px] py-5 px-12 min-h-[100px] flex justify-evenly items-center flex-col"
              >
              <h2 className="text-3xl font-bold py-3"> TAILWINDCSS </h2>
                <img src={tailwind} alt="react" width={100} height={100} />
              </div>
            </motion.div>
          </Tilt>
          <Tilt className="xs:w-[100px] w-full">
            <motion.div 
              className="w-full bg-gradient-to-r from-pink-500 to-green-500 p-[1px] rounded-[20px] shadow-card"
            >
              <div 
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450
                }}
                className="bg-custom-blue rounded-[20px] py-5 px-12 min-h-[100px] flex justify-evenly items-center flex-col"
              >
              <h2 className="text-3xl font-bold py-3"> CSS </h2>
                <img src={css} alt="react" width={100} height={100} />
              </div>
            </motion.div>
          </Tilt>
          <Tilt className="xs:w-[250px] w-full">
            <motion.div 
              className="w-full bg-gradient-to-r from-pink-500 to-green-500 p-[1px] rounded-[20px] shadow-card"
            >
              <div 
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450
                }}
                className="bg-custom-blue rounded-[20px] py-5 px-12 min-h-[100px] flex justify-evenly items-center flex-col"
              >
              <h2 className="text-3xl font-bold py-3"> GIT </h2>
                <img src={git} alt="react" width={100} height={100} />
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </section>
  </>
);

export default Skills;
