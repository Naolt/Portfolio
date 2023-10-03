"use client";

import { getData } from "@/lib/getData";
import { client } from "@/sanity/lib/client";
import { Project } from "@/types";
import React, { useContext, useEffect, useRef, useState } from "react";
import AboutSection from "./components/about";
import ContactSection from "./components/contact";
import GlowingEffect from "./components/glowingEffect";
import HomeSection from "./components/home";
import ProjectsSection from "./components/projects";

export default function Home() {
  const [projects, setProjects] = useState<any[]>([]);
  const [info, setInfo] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const projectData = await getData("project");
      setProjects(projectData);
      const personalInfo = await getData("personalInfo");
      setInfo(personalInfo);
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Projects:", projects);
    console.log("Info:", info);
  }, [projects, info]);

  return (
    <>
      <HomeSection info={info[0]} />
      <AboutSection info={info[0]} />
      <ProjectsSection projects={projects} />
      <ContactSection info={info[0]} />
    </>
  );
}
