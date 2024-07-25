import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import zakron from "../assets/zakron.gif";
import internet from '../assets/internet.png';
import connecting from "../assets/connectingdots.gif";
import ripple from "../assets/ripple.gif";
import cube from "../assets/cube.gif";
import github from "../assets/github.png"
import ejpt from "../assets/eJPT.jpeg";
import ecppt from "../assets/eCPPT.jpeg";
import portfolio from "../assets/Portfolio1.gif";
import catgram from "../assets/catgram.gif";

const Projects = () => (
  <>
    <section className="bg-[#090325] text-white p-4" id="projects">
      <div>
        <p className="text-1xl mt-20">
          WORK
        </p>
        <p className="text-5xl font-bold">
          PROJECTS.
        </p>
        <p className="text-[18px] py-10">
          I specialize in React, JavaScript, Tailwind CSS, and Three.js. With certifications as an eLearnSecurity Certified Penetration Tester (ECPPT) and an eLearnSecurity Junior Penetration Tester (eJPT), you can rest assured that security is always a priority in my work. I have created projects in 3D models and animation using Three.js, made a clone of Instagram, and developed various projects, including the Zakron IT Industry website, using Tailwind, React, and Three.js.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            imgSrc: zakron,
            altText: "Project Zakron",
            liveLink: "https://zakronindustry.com/",
          }, {
            imgSrc: connecting,
            altText: "Connecting Dots",
            liveLink: "https://connecting-dots.vercel.app/",
            repoLink: "https://github.com/Zakronindustry/connecting-dots",
          },{
            imgSrc: catgram,
            altText: "catgram",
            liveLink: "https://c0pycatgram.vercel.app/",
          },
           {
            imgSrc: portfolio,
            altText: "Portfolio",
            liveLink: "https://pranay-portf0lio.vercel.app/",
          },
           {
            imgSrc: cube,
            altText: "Rotating Cube",
            liveLink: "https://rotatingcube.vercel.app/",
            repoLink: "https://github.com/Zakronindustry/rubix",
          }, {
            imgSrc: ripple,
            altText: "Ripples Effect",
            liveLink: "https://rippleeffect.vercel.app/",
            repoLink: "https://github.com/Zakronindustry/Ripple",
          }].map((project, index) => (
            <Tilt className="xs:w-[600px] md:w-[200px] w-full" key={index}>
              <motion.div 
                className="w-full bg-custom-blue p-[1px] rounded-[20px] shadow-card"
              >
                <div 
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                  }}
                  className="bg-custom-blue rounded-[20px] p-5 rounded-2x1 md:w-[300px] sm:w-[500px] w-full"
                >
                  <div className="relative w-full h-full">
                    <img
                      src={project.imgSrc}
                      alt={project.altText}
                      className="w-full h-full object-cover rounded-2x1" 
                    />
                    <div className="absolute inset-0 flex justify-end m-3 space-x-2">
                      <div onClick={() => window.open(project.liveLink, "_blank")}
                        className="bg-custom-blue w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                      >
                        <img src={internet} alt="Internet" className="h-1/2 w-1/2" />
                      </div>
                      {project.repoLink && (
                        <div onClick={() => window.open(project.repoLink, "_blank")}
                          className="bg-custom-blue w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                          <img src={github} alt="GitHub" className="h-1/2 w-1/2" />
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 flex justify-end m-3 space-x-2">
                      <div onClick={() => window.open(project.liveLink, "_blank")}
                        className="bg-custom-blue w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                      >
                        <img src={internet} alt="Internet" className="h-1/2 w-1/2" />
                      </div>
                      {project.repoLink && (
                        <div onClick={() => window.open(project.repoLink, "_blank")}
                          className="bg-custom-blue w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                          <img src={github} alt="GitHub" className="h-1/2 w-1/2" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
        <p className="text-5xl font-bold mt-10">
          CERTIFICATIONS.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {[{
            imgSrc: ejpt,
            altText: "eJPT",
            liveLink: "https://certs.ine.com/e08297a3-9c84-4e54-9244-12013ac76ce3 ",
          }, {
            imgSrc: ecppt,
            altText: "eCPPTv2",
            liveLink: "https://certs.ine.com/7fb1600f-4009-4668-8719-0bb179dc2c47",
            repoLink: "https://github.com/Zakronindustry/connecting-dots",
          }].map((project, index) => (
            <Tilt className="xs:w-[300px] w-full" key={index}>
              <motion.div 
                className="w-full bg-custom-blue p-[1px] rounded-[20px] shadow-card"
              >
                <div 
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                  }}
                  className="bg-custom-blue rounded-[20px] p-5 rounded-2x1 sm:w-[500px] w-full"
                >
                  <div className="relative w-full h-[300px]">
                    <img
                      src={project.imgSrc}
                      alt={project.altText}
                      className="w-full h-full object-cover rounded-2x1" 
                    />
                    <div className="absolute inset-0 flex justify-end m-3 space-x-2">
                      <div onClick={() => window.open(project.liveLink, "_blank")}
                        className="bg-custom-blue w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                      >
                        <img src={internet} alt="Internet" className="h-1/2 w-1/2" />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Projects;
