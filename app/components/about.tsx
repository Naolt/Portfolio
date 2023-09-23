import Image from "next/image";

import React, { useContext, useEffect } from "react";
import Chip from "./chip";
import { motion as m } from "framer-motion";
import { SectionRefsContext } from "@/context/refsContext";

const AboutSection = () => {
  const { aboutRef, updateActiveSection } = useContext(SectionRefsContext)!;

  useEffect(() => {
    updateActiveSection(); // Call the function once on component mount
  }, []);

  const skillsAndTools = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "MongoDB",
    "Firebase",
    "Next.js",
    "MySQL",
    "GitHub",
    "React Native",
  ];
  return (
    <m.section
      ref={aboutRef}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      id="About"
      className="px-10 md:px-24 min-h-screen w-screen flex justify-center md:items-start items-center  flex-col snap-center"
    >
      <m.div
        className="absolute w-1/2 h-screen top-0 left-0 z-20 bg-Dark-Green  "
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        exit={{ opacity: 0 }}
      ></m.div>
      <h1 className="text-Light-Green text-3xl md:text-6xl font-bold  font-Montserrat mb-16 md:mb-28 text-center w-full">
        About Me
      </h1>
      {/*   */}
      <div className="flex flex-col md:flex-row justify-between gap-20 md:gap-32">
        {/* About Description */}
        <div className="flex-1">
          <h3 className="font-Raleway md:text-2xl text-xl font-semibold text-Text-Color mb-5 md:mb-10 ">
            Get to know me!
          </h3>

          <div className="leading-relaxed font-Montserrat text-Text-Color font-normal truncate-10-lines flex flex-col gap-3">
            <p>
              {`I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.`}
            </p>

            <p>
              {`I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin where I post useful content related to Web Development
              and Programming.`}
            </p>

            <p>
              {`I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience, then don't hesitate to contact me.`}
            </p>
          </div>
        </div>
        {/* Skills and tools */}
        <div className="flex-1">
          <h3 className="font-Raleway text-2xl font-semibold text-Text-Color mb-10">
            My skills & Tools
          </h3>
          <div className="flex flex-wrap gap-5">
            {skillsAndTools.map((skill) => (
              <Chip key={skill} text={skill} small={false} />
            ))}
          </div>
        </div>
      </div>
    </m.section>
  );
};

export default AboutSection;
