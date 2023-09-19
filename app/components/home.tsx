import Image from "next/image";
import React from "react";

const HomeSection: React.FC = () => {
  return (
    <section className="md:px-48 lg:px-96 h-screen w-screen flex justify-center items-center md:items-start flex-col snap-center">
      <h1 className="text-Text-Color text-3xl font-semibold mb-4 font-raleway">
        Hey There,
      </h1>
      {/*  Name */}
      <div className="lg:block hidden w-full  relative overflow-hidden visible  mb-4  ">
        <Image
          src="/NameHero.svg"
          width={200}
          height={300}
          alt="My Logo"
          className="cursor-pointer contrast-200 w-full"
        />
      </div>
      <div className="md:block lg:hidden hidden relative overflow-hidden visible  mb-4  ">
        <Image
          src="/NameHero.svg"
          width={200}
          height={300}
          alt="My Logo"
          className="cursor-pointer contrast-200 w-full"
        />
      </div>
      <div className="sm:block md:hidden hidden relative overflow-hidden visible  mb-4  ">
        <Image
          src="/NameHero.svg"
          width={200}
          height={300}
          alt="My Logo"
          className="cursor-pointer contrast-200 w-full"
        />
      </div>
      <div className="sm:hidden  relative overflow-hidden visible  mb-4  ">
        <Image
          src="/NameHero.svg"
          width={200}
          height={300}
          alt="My Logo"
          className="cursor-pointer contrast-200 w-full"
        />
      </div>
      <h3 className="text-Light-Green text-2xl md:text-3xl font-bold mb-8 md:mb-6 font-montserrat">
        {"Full Stack Developer."}
      </h3>
      <p className="text-Background dark:text-Text-Color/[0.7] italic text-lg md:text-xl font-raleway truncate-4-lines font-normal md:px-0 px-5 text-center md:text-start">
        {` I am a skilled software engineer with expertise in full stack
        development. I am dedicated to creating high-quality software solutions
        that meet the needs of clients and users.`}
      </p>
    </section>
  );
};

export default HomeSection;
