"use client";

import { client } from "@/sanity/lib/client";
import { Project } from "@/types";
import AboutSection from "./components/about";
import ContactSection from "./components/contact";
import GlowingEffect from "./components/glowingEffect";
import HomeSection from "./components/home";
import Navigation from "./components/navigation";
import ProjectsSection from "./components/projects";

async function getData() {
  const query = `*[_type == "project"]`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const projects: Project[] = await getData();
  return (
    <div className="w-screen min-h-screen md:h-screen overflow-x-hidden md:snap-mandatory md:snap-y flex flex-col md:block">
      <Navigation />
      {/* Home */}
      <HomeSection />
      {/* About */}
      <AboutSection />
      {/*<About/>*/}
      {/* Projects */}
      <ProjectsSection projects={projects} />
      {/* Contact */}
      <ContactSection />
      {/*<GlowingEffect />*/}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data,
    },
  };
}
