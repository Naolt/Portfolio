import Image from "next/image";
import React from "react";
import Chip from "./chip";

const AboutSection: React.FC = () => {
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
    <section className="px-10 md:px-24 min-h-screen w-screen flex justify-center md:items-start items-center  flex-col snap-center">
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
              <Chip key={skill} text={skill} small={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
