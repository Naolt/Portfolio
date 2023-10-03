"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/navigation";
import { useState, useRef, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollable = useRef(null);
  const [activeSection, setActiveSection] = useState("Home");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode: boolean) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = scrollable.current.scrollTop;
      const sections = scrollable.current.children;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop - 60;
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          if (["Home", "About", "Projects", "Contact"].includes(section.id))
            setActiveSection(section.id);
          break;
        }
      }
    };

    scrollable.current.addEventListener("scroll", handleScroll);

    return () => {
      console.log("removing the event listner");
      scrollable.current.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const localDarkMode = JSON.parse(
      localStorage.getItem("darkMode") || "false"
    );
    if (localDarkMode !== darkMode) {
      setDarkMode(localDarkMode);
    }
  }, [darkMode]);

  return (
    <html
      lang="en"
      className={darkMode ? "dark transition-all ease-linear" : ""}
    >
      <body className="dark:bg-Background bg-Text-Color overflow-x-hidden relative">
        {/*<AnimatePresence key={1} mode={"wait"}>*/}
        <Navigation
          activeSection={activeSection}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <div
          className="w-screen h-screen overflow-x-hidden md:snap-mandatory md:snap-y flex flex-col md:block scrollbar-hide relative overflow-auto pb-24"
          ref={scrollable}
        >
          {children}
        </div>
        {/*</AnimatePresence>*/}
      </body>
    </html>
  );
}
