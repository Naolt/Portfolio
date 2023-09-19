"use client";
import { urlForImage } from "@/sanity/lib/image";
import { Project } from "@/types";
import Image from "next/image";
import React from "react";
import Button from "./button";
import Chip from "./chip";

const ProjectsSection = ({ projects }: { projects: Project[] }) => {
  return (
    <div
      id="Projects"
      className="overflow-x-scroll overflow-y-hidden scrollbar-hide min-h-screen md:h-screen w-screen flex flex-col md:flex-row snap-center md:mt-0 mt-10
      md:snap-mandatory md:snap-x
      "
    >
      {projects.map((project, index) => {
        return (
          <div
            key={index}
            className="h-screen w-screen flex md:flex-row flex-col flex-1 items-center justify-center md:justify-end snap-center  "
          >
            {/* Project Image */}
            <div className="w-full md:w-[1000px] md:h-[562px] h-fit bg-Primary-Green  visible relative">
              <Image
                src={urlForImage(project.images[0]).url()}
                width={1000}
                height={705}
                alt="Project Photo"
                className="aspect-video"
              />
            </div>

            {/* Project description */}
            <div className="md:w-[28rem] md:h-[29rem] w-full px-5  -translate-y-[2rem] md:-translate-x-[8.8rem] md:translate-y-[1rem] bg-Primary-Green">
              <div className="flex flex-col md:absolute w-full md:w-[28rem] md:h-[29rem] -z-10 md:translate-x-5 -translate-y-5 bg-Text-Color px-12 py-12">
                <h3 className="font-Raleway text-xl md:text-[38px] font-medium text-Background mb-2 leading-9">
                  {project.title}
                </h3>
                <span className="font-Montserrat text-sm md:text-[16px] font-normal text-Background mb-2">
                  / {project.role}
                </span>
                <p className="font-Montserrat text-sm md:text-[16px] font-normal text-Background mb-4 truncate-6-lines line-clamp-6">
                  {project.description}
                </p>
                {/* skills and tools used */}
                <div className="flex gap-4 mb-8">
                  {project.skills?.map((skill, index) => {
                    return <Chip key={index} text={skill} />;
                  })}
                </div>
                {/* visit button */}
                <p></p>
                <span>
                  <Button
                    bgColor="Background"
                    outlined={true}
                    textColor="Background"
                  >
                    Visit
                  </Button>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsSection;
