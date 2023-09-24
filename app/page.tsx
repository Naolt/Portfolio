"use client";

import { client } from "@/sanity/lib/client";
import { Project } from "@/types";
import React, { useContext, useEffect, useRef, useState } from "react";
import AboutSection from "./components/about";
import ContactSection from "./components/contact";
import GlowingEffect from "./components/glowingEffect";
import HomeSection from "./components/home";
import ProjectsSection from "./components/projects";

async function getData() {
  const query = `*[_type == "project"]`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const projects: Project[] = await getData();

  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </>
  );
}
