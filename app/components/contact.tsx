import Image from "next/image";
import React from "react";
const ContactSection: React.FC = () => {
  return (
    <div className="w-screen min-h-screen md:h-screen flex flex-col md:flex-row px-5 items-center  md:px-28 snap-center pb-10 ">
      {/* Left */}
      <div className="flex flex-col justify-center item-center w-full">
        <h1 className="text-Text-Color font-Montserrat  text-3xl md:text-6xl capitalize font-bold mb-11 text-center md:text-start">
          Get in Touch
        </h1>
        <div className="mb-14 m-auto md:m-0">
          <div className="w-20 md:w-40 h-2 bg-Light-Green "></div>
          <div className="w-20 md:w-40 h-2 bg-Light-Green ml-20 md:ml-20 mt-5"></div>
        </div>
        <span className="font-Raleway text-2xl  font-semibold text-Text-Color mb-9 cursor-pointer hover:text-Accent-Green transition-all ease-in-out text-center md:text-start ">
          naoltamrat36@gmail.com
        </span>
        <div className="flex gap-9 justify-center items-center pb-10 mb-5 md:justify-start">
          <div className="relative w-8 h-8 ">
            <Image
              src="/github.svg"
              //width={40}
              //height={40}
              fill
              alt="Github"
              className="cursor-pointer mb-4 text-Light-Green "
            />
          </div>
          <div className="relative w-8 h-8">
            <Image
              src="/linkedin.svg"
              //width={40}
              fill
              //height={40}
              alt="Github"
              className="cursor-pointer mb-4"
            />
          </div>
          <div className="relative w-8 h-8">
            <Image
              src="/telegram.svg"
              //width={40}
              //height={40}
              fill
              alt="Github"
              className="cursor-pointer mb-4"
            />
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="flex w-full h-full items-center justify-center md:px-24 px-0">
        <div className="flex items-center h-fit md:p-10 p-5 border-solid border-Light-Green border-2 rounded-lg w-full self-end">
          <form className="flex flex-col gap-3 w-full">
            <div className="flex flex-col w-full gap-4">
              <label
                className="font-bold font-Montserrat text-lg text-Light-Green"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none
				bg-transparent border border-solid  border-Light-Green rounded w-full py-5 px-5 text-Text-Color/[0.5] leading-tight focus:outline-none focus:shadow-outline "
                id="name"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>

            <div className="flex flex-col w-full gap-4">
              <label
                className="font-bold font-Montserrat text-lg text-Light-Green"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none
				bg-transparent border border-solid  border-Light-Green rounded w-full py-5 px-5 text-Text-Color/[0.5] leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="flex flex-col w-full gap-4">
              <label
                className="font-bold font-Montserrat text-lg text-Light-Green"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="appearance-none
				bg-transparent border border-solid  border-Light-Green rounded w-full py-5 px-5 text-Text-Color/[0.5] leading-tight focus:outline-none focus:shadow-outline "
                id="message"
                placeholder="Enter Your Message"
              />
            </div>
            <div className="flex items-center justify-between pt-6">
              <button
                className="w-full px-10 py-5 bg-Light-Green font-Montserrat capitalize font-semibold text-Text-Color rounded "
                type="button"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
