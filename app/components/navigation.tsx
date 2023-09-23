"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import { MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "./button";
import Link from "next/link";
import { SectionRefsContext } from "@/context/refsContext";

//import Link from "next/link";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`w-full flex fixed justify-between z-20  ${
        isOpen && "h-screen w-screen items-start"
      }`}
    >
      <div
        className={`w-full flex fixed justify-between py-7 px-12 bg-Background `}
      >
        {/* logo */}
        <Image
          src="/logo.svg"
          width={60}
          height={60}
          alt="My Logo"
          className="cursor-pointer"
        />
        {/* Navs */}
        <div className="hidden md:flex gap-5 justify-center items-start ">
          <Nav text="Home" />
          <Nav text="About" />
          <Nav text="Projects" />
          <Nav text="Contact" />
          <Button variant="primary" outlined>
            Resume
          </Button>

          <MoonIcon className="w-8 h-8 text-Text-Color pt-1" />
        </div>

        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <XMarkIcon className="w-8 h-8 text-Text-Color pt-1" />
            ) : (
              <Bars3Icon className="w-8 h-8 text-Text-Color pt-1" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="h-full w-full flex flex-col  gap-5 justify-center items-center bg-Background">
          <Nav text="Home" />
          <Nav text="About" />
          <Nav text="Projects" />
          <Nav text="Contact" />
          <Button variant="primary" outlined>
            Resume
          </Button>

          <MoonIcon className="w-8 h-8 text-Text-Color pt-1" />
        </div>
      )}
    </div>
  );
}

interface NavProps {
  text: string;
}

const Nav: React.FC<NavProps> = ({ text }) => {
  const { activeRef } = useContext(SectionRefsContext)!;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const isActive = `${
    activeRef.current == text
      ? "underline text-Light-Green text-Light-Green"
      : ""
  }`;
  return (
    <Link
      className={`font-Montserrat font-normal dark:text-Text-Color text-Background text-base uppercase w-fit hover:text-Light-Green transition-all ease-linear cursor-pointer py-2 px-4 ${isActive}`}
      href={`#${text}`}
      onClick={handleScroll}
    >
      {text}
    </Link>
  );
};

export default Navigation;
