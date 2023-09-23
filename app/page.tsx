"use client";

import { client } from "@/sanity/lib/client";
import { Project } from "@/types";
import React, { useContext, useEffect, useRef, useState } from "react";
import AboutSection from "./components/about";
import ContactSection from "./components/contact";
import GlowingEffect from "./components/glowingEffect";
import HomeSection from "./components/home";
import Navigation from "./components/navigation";
import ProjectsSection from "./components/projects";
import { AnimatePresence } from "framer-motion";
import { SectionRefsContext, SectionRefsProvider } from "@/context/refsContext";

async function getData() {
  const query = `*[_type == "project"]`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const { updateActiveSection } = useContext(SectionRefsContext)!;

  useEffect(() => {
    updateActiveSection(); // Call the function once on component mount
  }, []);
  const projects: Project[] = await getData();

  return (
    <div
      className="w-screen min-h-screen md:h-screen overflow-x-hidden md:snap-mandatory md:snap-y flex flex-col md:block"
      onScroll={updateActiveSection}
    >
      <Navigation />
      <HomeSection />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </div>
  );
}
